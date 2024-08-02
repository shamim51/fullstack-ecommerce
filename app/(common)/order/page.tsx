import prisma from "@/db/db_prisma";
import { getUser } from "@/utils/get_user";
import Link from "next/link";

export default async function AllOrder() {
    const user = await getUser()
    const orders = await prisma.order.findMany({
        where:{
            user_id: user?.user_id
        }
    })
    return (
        <div>
            <h1 className="text-center">All Orders</h1>
            <div className="px-2 py-4">
                {orders.map(order => (
                  <div className="py-5">
                    <Link href="#" key={order.order_id}>
                        <h2>Order ID: {order.order_id}</h2>
                        <p>Original Total Price: {order.original_total_price}</p>
                        <p>Discounted Total Price: {order.discounted_total_price}</p>
                        <p>Status: {order.status}</p>
                        <p>Payment Method: {order.payment_method}</p>
                        <p>Shipping Address: {order.shipping_address}</p>
                    </Link>
                  </div>
                ))}
            </div>
        </div>
    )
}

