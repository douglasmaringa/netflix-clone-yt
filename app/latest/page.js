'use client'
import Header from "../components/home/Header"
import Showcase from "../components/home/Showcase"
import Footer from "../components/home/Footer"
import {useDisclosure} from "@nextui-org/react";
import HomeModal from "../components/home/HomeModal";

function page() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <div className="bg-black h-screen flex flex-col justify-between">
        <div className=" ">
           <Header/>
        </div>


        <div className="bg-black mt-20">
          <Showcase title="Latest Movies" onOpen={onOpen}/>
        </div>

        <div className="bg-black">
          <Footer/>
        </div>
        <HomeModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}/>
   
   
    </div>
  )
}

export default page