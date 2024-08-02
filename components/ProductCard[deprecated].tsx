import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";

import Image from 'next/image'
import product_image from '../public/image.jpeg'
import Link from "next/link";
import image_loader from "@/utils/image_loader";

export default function App({product}: {product: any}) {

  //console.log(product)
  const imageUrl = image_loader(product.image_url)
  return (
    <Link href={`/bag/${product.id}`} className="w-1/2">
      <Card>
        
        <CardBody className="overflow-visible py-1">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={`${product.image_url}`}
            width={150}
            height={150}
            priority={false}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{product.name}</p>
          <small className="text-default-500">In stock</small>
          <h4 className="font-bold text-large">tk {product.price}.00</h4>
        </CardHeader>

      </Card>
    </Link>
  );
}
