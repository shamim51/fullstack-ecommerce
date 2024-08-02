'use server'
import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/utils/constants";
import { getUserFromToken } from "@/utils/authTools";
import Link from "next/link";

export default async function User(){
 
    let user
    
    if(cookies().get(COOKIE_NAME)){
      const token = cookies().get(COOKIE_NAME)
      console.log(token)
      if(!token) return
      console.log(`name is: ${token.name}\nvalue is: ${token.value}`)
      user = await  getUserFromToken(token)
 
    }

    return(
        <>
            
        </>
        
    )
}