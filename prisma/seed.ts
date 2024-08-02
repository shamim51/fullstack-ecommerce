const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create a test user
  /*
  const user = await prisma.user.create({
    data: {
      name: 'Test User',
      address: '123 Test Street',
      phone: '123-456-7890',
      password: 'password123',
      isAdmin: false,
    },
  });

  // Create a cart for the test user
  const cart = await prisma.cart.create({
    data: {
      user_id: user.user_id,
      items: {},
    },
  });

  // Seed categories and subcategories
  const categories = [
    { name: 'Party' },
    { name: 'Tote' },
    { name: 'Office' },
    { name: 'Medium size Bag' },
    { name: 'Big' },
    { name: 'Mini Bag' },
    { name: 'Hand Purse' },
    { name: 'Backpack' },
  ];

  const subcategories = [
    { name: 'new' },
    { name: 'hot' },
    { name: 'trending' },
    { name: 'populer' },
    { name: 'w-p-collection' },
    { name: 'discounted' },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
      },
    });
  }

  for (const subcategory of subcategories) {
    await prisma.subCategory.create({
      data: {
        name: subcategory.name,
      },
    });
  }
    
  //console.log('Database has been seeded');

  */

  
  const categories = [1, 2, 3, 4, 5, 6, 7, 8]; // Special categories
  const subcategories = [1, 2, 3, 4, 5, 6]; // Assuming subcategory IDs match
  
  for (const subcategory_id of subcategories) {
    const numberOfProducts = Math.floor(Math.random() * (11 - 5 + 1)) + 5; // Random number between 5 and 11

    for (let i = 0; i < numberOfProducts; i++) {
      const product = await prisma.product.create({
        data: {
          name: `Product ${i + 1} for Category ${subcategory_id}`,
          description: 'This is a sample product description.',
          price: parseFloat((Math.random() * (100 - 20) + 20).toFixed(2)), // Random price between 20 and 100
          discount: Math.floor(Math.random() * 30), // Random discount between 0 and 30
          special_price: parseFloat((Math.random() * (80 - 15) + 15).toFixed(2)), // Random special price between 15 and 80
          category_id: categories[Math.floor(Math.random() * subcategories.length)], // Random subcategory
          subcategory_id: subcategory_id,
          quantity: Math.floor(Math.random() * (100 - 10) + 10), // Random quantity between 10 and 100
          image_url: '/uploads/img.jpeg',
        },
      });
    }
  }

  console.log('Products have been seeded');
  

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
