// /components/SignupForm.tsx
'use client'

import { useFormState } from 'react-dom'
import { Input, Button, Checkbox, Dropdown, Select } from '@nextui-org/react'
import Submit from './SubmitButton'
import { add_products } from '@/actions/add-products'

const initState = { message: null }

const AddProductForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    add_products,
    initState
  )

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Add Product</h3>
      <Input
        name="name"
        fullWidth
        size="lg"
        type="text"
        placeholder="name"
        required
      />
      <Input
        name="description"
        fullWidth
        size="lg"
        type="text"
        placeholder="description"
        required
      />
      <Input
        name="price"
        fullWidth
        size="lg"
        type="number"
        placeholder="price"
        required
      />
      <Input
        name="discount"
        fullWidth
        size="lg"
        type = "number"
        placeholder="discount"
        required
      />
      {/* <Input
        name="category"
        fullWidth
        size="lg"
        type="number"
        placeholder="category"
        required
      /> */}
      <Input
        name="quantity"
        fullWidth
        size="lg"
        type="number"
        placeholder="quantity"
        required
      />
     
     <label htmlFor="category" className='dropdown p-1'>Category</label>
     <select id='category' name='category'className='m-1'>
        <option value="Party" >Party Bags</option>
        <option value="Tote">Tote Bag</option>
        <option value="Office">Office bag</option>
        <option value="Medium">Medium Size Bag</option>
        <option value="Big">Big size Bag</option>
        <option value="Mini">Mini Bag</option>
        <option value="Hand Purse">Hand Purse</option>
        <option value="Backpack">Backpack</option>
     </select>

     <label htmlFor="sub-category" className='dropdown p-1'>Sub Category</label>
     <select id='sub-category' name='sub-category'className='m-1'>
        <option value="new" >New Arrival </option>
        <option value="hot">Hot Deal</option>
        <option value="trending">Trending</option>
        <option value="populer">Popular Products</option>
        <option value="w-p-collection">Wallet & Purse Collection </option>
        <option value="discounted">DISCOUNTED Bag </option>
     </select>

     <Input
        name="image"
        fullWidth
        size="lg"
        type="file"
        required
      />

      <Submit label={'submit'} />
      
      {formState?.message && <p>{formState.message}</p>}
    </form>
  )
}

export default AddProductForm
