'use server'

import prisma from '@/db/db_prisma';
import { getUser } from '@/utils/get_user';
import { redirect } from 'next/navigation'
import { string } from 'zod';

export async function checkout(formData: FormData) {
    const user =await getUser()
    //
    if(!user) return redirect('/signin')

    let shipping_address = formData.get('shipping_address') as string
    if(!shipping_address || shipping_address === ''){
      shipping_address = user.address
    } 

    let orderId = ''
    // console.log('checkout')
    try {
        // Fetch cart items for the user
        const cart = await prisma.cart.findFirst({
          where: {
            user_id: user.user_id,
          },
          include: {
            items: {
              include: {
                product: true,
              },
            },
          },
        });
  
        if (!cart || cart.items.length === 0) return 
  
        // Calculate total prices
        let originalTotalPrice = 0;
        let discountedTotalPrice = 0;
  
        cart.items.forEach(item => {
          originalTotalPrice += item.quantity * item.product.price;
          discountedTotalPrice += item.quantity * item.product.special_price;
        });
  
        // Create a new order
        const order = await prisma.order.create({
          data: {
            user_id: user.user_id,
            original_total_price: originalTotalPrice,
            discounted_total_price: discountedTotalPrice,
            status: 'pending', // or any other initial status
            payment_method: 'cash on delivery',
            shipping_address: shipping_address,
          },
        });

        orderId = order.order_id
  
        // Create order items
        const orderItems = cart.items.map(item => ({
          quantity: item.quantity,
          original_price: item.product.price,
          discounted_price: item.product.special_price,
          product_id: item.product_id,
          order_id: order.order_id,
        }));
  
        await prisma.order_item.createMany({
          data: orderItems,
        });
  
        // Clear the cart
        await prisma.cart_item.deleteMany({
          where: {
            cart_id: cart.cart_id,
          },

    });
    } catch (e) {
        console.error(e);
        return { message: 'Failed to checkout' };
    }
    redirect(`/order/${orderId}`)
}