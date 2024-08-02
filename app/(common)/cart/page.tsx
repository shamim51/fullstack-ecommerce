import { checkout } from "@/actions/checkout"
import DeleteFromCart_Button from "@/components/DeleteFromCart_Button"
import prisma from "@/db/db_prisma"
import { getUser } from "@/utils/get_user"
import Image from "next/image"

export default async function CartPage(){
    const user = await getUser()
    if(!user) return null

    const cart_items = await prisma.cart_item.findMany({
        where: {
          cart: {
            user_id: user.user_id,
          },
        },
        select: {
          quantity: true,
          product: {
            select: {
              id: true,
              name: true,
              image_url: true,
              price: true,
              special_price: true,
              discount: true,
            },
          },
        },
    })
    //console.log(cart_items)
    // Calculate prices
  let subtotal = 0;
  let totalDiscount = 0;
  const shippingCost = 100; // Example shipping cost
  cart_items.forEach((item) => {
    subtotal += item.quantity * item.product.price;
    totalDiscount += item.quantity * (item.product.price - item.product.special_price);
  });
  const total = subtotal - totalDiscount + shippingCost;

  if (cart_items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-xl mt-4">Your cart is empty</h2>
        <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
      </div>
    );
  }

    return(
        <>
            <h1 className="text-center">cart page</h1>
            <ul>
                <div>
                    {cart_items.map((cart_items) => (
                        <li key={cart_items.product.id} className="py-4 px-5">
                            <h2>{cart_items.product.name}</h2>
                            {cart_items.product.image_url
                            && 
                            <Image 
                            src={cart_items.product.image_url} 
                            alt={cart_items.product.name}  
                            width={50}
                            height={100}
                            />}

                            <p>Price: ${cart_items.product.price}</p>
                            <p>Discount: {cart_items.product.discount}%</p>

                            <DeleteFromCart_Button />
                       </li>
                        
                    ))}
                </div>

                
            </ul>

        <div style={{ borderTop: "1px solid #ddd", marginTop: "20px", paddingTop: "20px" }}>
        <h2>Checkout Summary</h2>
        <p>Subtotal: {subtotal.toFixed(2)} TK</p>
        <p>Total Discount: {totalDiscount.toFixed(2)} TK</p>
        <p>Shipping: {shippingCost} TK</p>
        <h3>Total: {total.toFixed(2)} TK</h3>
        <h3>Payable Total: {total.toFixed(2)} TK</h3>

        <div style={{ marginTop: "20px" }}>
          <h3>Delivery Address</h3>
          <form action={checkout}>
            <input type="text" placeholder="Shipping Address" defaultValue={user.address} className="border border-solid border-black"/>
            <button style={{ padding: "10px", backgroundColor: "#333", color: "#fff", border: "none", cursor: "pointer" }}>Place Order</button>
          </form>
        </div>
      </div>            
      </>
    )
}