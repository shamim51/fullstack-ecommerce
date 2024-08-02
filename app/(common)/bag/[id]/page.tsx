import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard[deprecated]";
import prisma from "@/db/db_prisma";
import { getUser } from "@/utils/get_user";

const BagByIdPage = async ({params}:{params:any}) => {
    const user = await getUser()
    const product = await prisma.product.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return (
        <div className="flex flex-col justify-center items-center">
            {/* <h1>BagByIdPage</h1>
            <h2>{params.id}</h2> */}
            <ProductCard key={product? product.id:"hello"} product={product} />
            <AddToCartButton userId={user?.user_id ?? ''} productId={params.id} />
        </div>
    );
    
}

export default BagByIdPage;