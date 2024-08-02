// /components/Submit.tsx
'use client'

import { add_to_cart } from "@/actions/add-to-cart"
import { useTransition } from 'react';
 
export default function AddToCartButton({userId, productId}: {userId: string, productId: string}) {
  let [isPending, startTransition] = useTransition();
 
  return (
    <div className="border-black border-2 border-black-500">
      <button onClick={() => startTransition(() => add_to_cart(userId, productId))}>
        Add To Cart
      </button>
    </div>

  );
}