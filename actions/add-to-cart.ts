'use server'

import prisma from "@/db/db_prisma"
import { revalidatePath } from "next/cache";

export async function add_to_cart (userId:string , productId:string){
    const cart_id:string = (await prisma.cart.findFirst({
        where:{
            user_id: userId
        }
    }))?.cart_id ?? '';

   
    await prisma.cart_item.create({
        data:{
            quantity: 1,
            product_id: Number(productId),
            cart_id: cart_id
        }
    })
    console.log(userId, productId)
    await prisma.user.findMany()

    revalidatePath('/cart')
}

