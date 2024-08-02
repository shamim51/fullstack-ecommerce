
import 'server-only'
import jwt from 'jsonwebtoken'
import prisma from '@/db/db_prisma'
import bcrypt from 'bcrypt'

const SECRET = 'use_an_ENV_VAR'

export const createTokenForUser = (userId: string) => {
  const token = jwt.sign({ id: userId }, SECRET)
  return token
}
//------------------------------------------------------------------//
export const getUserFromToken =  (token: {
  name: string
  value: string
}) => {
  const payload = jwt.verify(token.value, SECRET) as { id: string }

  const user = prisma.user.findFirst({
    where:{
      user_id:payload.id
    }
  })
 
  return user
}
//--------------------------------------------------------------------//

export const signin = async ({
  phone,
  password,
}: {
  phone: string
  password: string
}) => {

  const match = await prisma.user.findFirst({
    where:{
      phone: phone
    }
  })

  if (!match) throw new Error('invalid user')

  const correctPW = await comparePW(password, match.password)

  if (!correctPW) {
    throw new Error('invalid user')
  }

  const token = createTokenForUser(match.user_id)
  const { password: pw, ...user } = match

  return { user, token }
}
//---------------------------------------//
export const signup = async ({name,address, phone, password}: {
  name: string
  address: string
  phone: string
  password: string
}) => {
  const hashedPW = await hashPW(password)
  const user = await prisma.user.create({
    data:{
      name: name,
      address: address,
      phone: phone,
      password: hashedPW,
    }
  })
  const token = createTokenForUser(user.user_id)

  await prisma.cart.create({
    data:{
      user_id:user.user_id
    }
  })

  return { user, token }
}

export const hashPW = (password: string) => {
  return bcrypt.hash(password, 10)
}

export const comparePW = (password: string, hashedPW: string) => {
  return bcrypt.compare(password, hashedPW)
}