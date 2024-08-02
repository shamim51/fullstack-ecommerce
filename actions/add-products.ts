'use server'
import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import prisma  from '@/db/db_prisma'; // Adjust the path to your prisma instance
import { revalidatePath } from 'next/cache';

const authSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  discount: z.string(),
  quantity: z.string(),
  category: z.string(),
  subcategory: z.string(),
});

export const add_products = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    discount: formData.get('discount'),
    category: formData.get('category'),
    subcategory: formData.get('sub-category'),
    quantity: formData.get('quantity'),
  });

  const parsedPrice = parseFloat(data.price);
  const parsedDiscount = parseFloat(data.discount);
  const special_price = parsedPrice - (parsedPrice * (parsedDiscount / 100));
  const parsedQuantity = parseInt(data.quantity);

  const imageFile = formData.get('image');
  if (!imageFile || !(imageFile instanceof File)) {
    throw new Error('Invalid image file');
  }

  const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
  const imageName = `${Date.now()}-${imageFile.name}`;
  const imagePath = path.join(process.cwd(), 'public', 'uploads', imageName);

  // Save the image locally
  //fs.writeFileSync(imagePath, imageBuffer);
  //The problem is that the imageBuffer is of type Buffer, but the fs.writeFileSync function expects a parameter of type string or ArrayBufferView. To fix this, you can convert the imageBuffer to a Uint8Array before passing it to fs.writeFileSync.
  fs.writeFileSync(imagePath, new Uint8Array(imageBuffer));

  try {
    const categoryRecord = await prisma.category.findFirst({
      where: { name: data.category }
    });
    const subCategoryRecord = await prisma.subCategory.findFirst({
      where: { name: data.subcategory }
    });

    if (!categoryRecord || !subCategoryRecord) {
      return prevState;
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: parsedPrice,
        discount: parsedDiscount,
        special_price,
        category_id: categoryRecord.id,
        subcategory_id: subCategoryRecord.id,
        quantity: parsedQuantity,
        image_url: `/uploads/${imageName}`, // Store the relative URL of the image
      }
    });
  } catch (e) {
    console.error(e);
  }

  revalidatePath('/');
  return prevState;
}
