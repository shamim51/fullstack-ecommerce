import Link from "next/link";
import Image from 'next/image'

export default function ProductCard({product}: {product: any}){
    return (
        
        <Link href={`/bag/${product.id}`} className="">
            <div className="m-2 w-32 h-64 lg:w-60 lg:h-96"  >
                <div className="">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full h-44 lg:h-80"
                        src={`${product.image_url}`}
                        width={150}
                        height={150}
                    />
                </div>
                <div className="product-info mt-4">
                    <p className="product-card-title text-sm font-bold ">Elegant</p>
                    <p className="text-sm font-semibold mt-2">{product.price}.00tk</p>
                </div>
            </div>
        </Link>

    )
}