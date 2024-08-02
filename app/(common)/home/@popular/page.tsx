import ProductCard from "@/components/ProductCard";
import prisma from "@/db/db_prisma";
import React from "react";

export default async function TopProducts() {

  const subCategory = await prisma.subCategory.findFirst({
    where: { name: 'popular' }
  });
  
  if(!subCategory) return null

  const products = await prisma.product.findMany({
    where: {
      subcategory_id: subCategory.id
    }
  });
  
  return (
    <div className="mx-10">
      <h1 className="text-center font-black mt-3">Popular Products</h1>
      <div className="flex flex-row flex-wrap mt-3 bg-green-200">
        { (products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  </div>
  )
}

