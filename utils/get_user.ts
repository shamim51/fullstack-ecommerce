import { cookies } from "next/headers"
import { getUserFromToken } from "./authTools"
import { COOKIE_NAME } from "./constants"

export const getUser = async ()=>{
    console.log('get user')
    let user
    //console.log(cookies().get(COOKIE_NAME))
    if(!cookies().get(COOKIE_NAME)) return
   
    const token = cookies().get(COOKIE_NAME)
    if(token)
    console.log(`name is: ${token.name}\nvalue is: ${token.value}`)
    console.log("-----------------------------------------------------------")
    
    if(token) user = await getUserFromToken(token)
    
    return user
    
  }