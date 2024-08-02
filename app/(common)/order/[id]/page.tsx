import prisma from "@/db/db_prisma";
import { getUser } from "@/utils/get_user";
import Image from 'next/image';

export default async function OrderById({params}:{params:any}) {
  const user = await getUser();
  if (!user) return null;

  const orderItems = await prisma.order_item.findMany({
    where: {
        order:{
            order_id: params.id,        // Ensure the order belongs to the user
            user_id: user.user_id
        }
    },
    select: {
        product_id: true,
        quantity: true,
        original_price: true,
        discounted_price: true,
        product: {
            select: {
                name: true,
                image_url: true
            }
        },
    }
  });

  const status = await prisma.order.findUnique({
    where: {
      order_id: params.id
    },
    select: {
      status: true
    }
  });

  if (!orderItems) {
    // Handle the case where the order is not found or doesn't belong to the user
    return null;  // You can return an error response or a message as needed
  }

  console.log(orderItems);

// Calculate the totals
const originalTotalPrice = orderItems.reduce((acc, item) => acc + item.quantity * item.original_price, 0);
const discountedTotalPrice = orderItems.reduce((acc, item) => acc + item.quantity * item.discounted_price, 0);

return (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1>Order Details</h1>
    {orderItems.length === 0 ? (
      <p>No items found for this order.</p>
    ) : (
      <div>
        <ul>
          {orderItems.map((item) => (
            <li key={item.product_id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              {item.product.image_url && (
                <Image
                  src={item.product.image_url}
                  alt={item.product.name}
                  width={100}
                  height={100}
                  style={{ marginRight: '20px' }}
                />
              )}
              <div>
                <h2 style={{ margin: '0 0 10px' }}>{item.product.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Original Price: ${item.original_price.toFixed(2)}</p>
                <p>Discounted Price: ${item.discounted_price.toFixed(2)}</p>
                <p>Total: ${(item.quantity * item.discounted_price).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ borderTop: '1px solid #ddd', marginTop: '20px', paddingTop: '20px' }}>
          <h2>Order Summary</h2>
          <p><strong>Status:</strong> {status?.status}</p>
          <p><strong>Original Total Price:</strong> ${originalTotalPrice.toFixed(2)}</p>
          <p><strong>Discounted Total Price:</strong> ${discountedTotalPrice.toFixed(2)}</p>
          <p><strong>Amount Saved:</strong> ${(originalTotalPrice - discountedTotalPrice).toFixed(2)}</p>
        </div>
      </div>
    )}
  </div>
 )
}