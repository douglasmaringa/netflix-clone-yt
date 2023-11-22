"use client"
import Image from "next/image"
import {Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()

  return (
    <div className="flex mx-auto bg-transparent justify-between ">
        <div className="flex items-center">
        <Image src="logo-dark.svg" width={100} height={50} />
        <h1 className="text-white font-semibold text-3xl">Seffa Flix</h1>
        </div>

        <div className="flex items-center mr-4">
         <Button onClick={() => router.push('/home')} className="text-white hover:text-black" variant="ghost">
            Login
         </Button>
        </div>
    </div>
  )
}

export default Header