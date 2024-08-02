'use server'
import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/utils/constants";
import { getUserFromToken } from "@/utils/authTools";
import { NavbarItem } from "@nextui-org/navbar";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";

export default async function ServerPage(){
 
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
            <h1>hello</h1>
            <h2>
                {user?.email}
            </h2>

        </>
    )
}