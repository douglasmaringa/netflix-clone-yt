'use client'
import Header from "../components/home/Header"
import Hero from "../components/home/Hero"
import Showcase from "../components/home/Showcase"
import Footer from "../components/home/Footer"
import HomeModal from "../components/home/HomeModal"
import {useDisclosure} from "@nextui-org/react";

function page() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="">
        <div className="h-screen bg-gradient-to-t from-black to-transparent">
           <Header/>
           <Hero/>
        </div>


        <div className="bg-black">
          <Showcase title="Trending Worldwide" onOpen={onOpen}/>
          <Showcase title="Comedy Movies" onOpen={onOpen}/>
          <Showcase title="Action Movies" onOpen={onOpen}/>
          <Showcase title="Kids' Movies" onOpen={onOpen}/>
        </div>

        <div className="bg-black">
          <Footer/>
        </div>
        <HomeModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}/>
   
    </div>
  )
}

export default page