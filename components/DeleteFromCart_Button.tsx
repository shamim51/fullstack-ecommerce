'use client'

import { checkout } from '@/actions/checkout';
import deleteFromCart from '@/actions/delete-from-cart';
import { useTransition } from 'react';
 
export default function DeleteFromCart_Button() {
  let [isPending, startTransition] = useTransition();
 
  return (
    <div >
      <button className="border-black border-2 border-black-500" onClick={() => startTransition(() => deleteFromCart())}>
        Delete Item
      </button>
    </div>

  );
}