
'use server'
import { cookies } from 'next/headers'
import { getUserFromToken, signin, signup } from '@/utils/authTools'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'

const authSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  password: z.string(),
})

const signinSchema = z.object({
  phone: z.string(),
  password: z.string()
})

export const registerUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    name: formData.get('name'),
    address: formData.get('address'),
    phone: formData.get('phone'),
    password: formData.get('password'),
  })

  const maxAge = 6 * 30 * 24 * 60 * 60;

  try {
    const { token } = await signup(data)
    cookies().set(COOKIE_NAME, token, { maxAge })
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you up' }
  }
  redirect('/')
}

export const signinUser = async (prevState: any, formData: FormData) => {
  const data = signinSchema.parse({
    phone: formData.get('phone'),
    password: formData.get('password'),
  })

  const maxAge = 6 * 30 * 24 * 60 * 60;


  try {
    const { token } = await signin(data)
    cookies().set(COOKIE_NAME, token, { maxAge })
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you in' }
  }
  redirect('/')
}

export const showUser = async ()=>{
  console.log('show user')
  let user
  //console.log(cookies().get(COOKIE_NAME))
  if(cookies().get(COOKIE_NAME)){
    const token = cookies().get(COOKIE_NAME)
    if(token)
    console.log(`name is: ${token.name}\nvalue is: ${token.value}`)
    console.log("-----------------------------------------------------------")
    
    if(token) user = await getUserFromToken(token)
    
    return user
  }
}