'use client'
import { Input, Button } from '@nextui-org/react'
import React from 'react'



export const AddProductForm = () => {


  return (
    <form
     
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">New Product</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Name"
        name="email"
        type="text"
      />
      <Input
        name="price"
        fullWidth
        required
        size="lg"
        type="number"
        placeholder="price"
      />
      <Input
        name="discount"
        fullWidth
        required
        size="lg"
        type="number"
        placeholder="discount"
      />

      <Input
        fullWidth
        required
        size="lg"
        placeholder="Category"
        name="email"
        type="text"
      />
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Sub Category"
        name="email"
        type="text"
      />
      
    <button>
        submit
    </button>
    </form>
  )
}

