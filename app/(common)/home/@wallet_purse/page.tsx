import ProductCard from "@/components/ProductCard";
import prisma from "@/db/db_prisma";
import React from "react";

export default async function TopProducts() {

  const subCategory = await prisma.subCategory.findFirst({
    where: { name: 'w-p-collection' }
  });
  if(!subCategory) return null

  const products = await prisma.product.findMany({
    where: {
      subcategory_id: subCategory.id
    }
  });
  
  return (
    <div className="mx-auto my-20 flex-col justify-items-center max-w-7xl">
      <h1 className="text-2xl text-center font-black my-7 lg:text-left lg:ml-10">Wallet and Purse</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 items-center content-center justify-items-center mt-3 lg:gap-y-6">
        { (products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  </div>
  )
}

