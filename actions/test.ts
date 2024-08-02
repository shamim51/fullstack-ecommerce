'use server'
import prisma from "@/db/db_prisma";
export default async function test(){
    for (let i = 2; i <= 3000; i++)
    await prisma.product.create({
        data:{
            name: `product${i}`,
            description: `there will be description for product ${i}`,
            price: 10*i,
            discount: 10,
            special_price: (10*i)*.9,
            category_id: 1,
            subcategory_id: 1,
            quantity: 10,
            image_url: 'hello',
    
        }
    })
}
