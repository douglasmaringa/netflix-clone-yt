"use client"
import React from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalHeader, ModalBody} from "@nextui-org/react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {AiFillPlusCircle} from "react-icons/ai";
import { useRouter } from 'next/navigation'

export default function HomeModal({ isOpen, onOpen, onOpenChange }) {
  const router = useRouter()

  return (
    <>
      <Modal className="bg-black " size="3xl" scrollBehavior="outside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white"> </ModalHeader>
              <ModalBody>
                <div className="">
                <Image
                    src={`/main/2.jpeg`}
                    alt="test"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
                <h2 className="text-lg font-semibold text-white">Avengers
                <span className="font-light text-base"> (2022)</span>
                </h2>
                
                <div className="flex space-x-6">
                <div
                className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full"
                >
                <h2 className="text-xs font-semibold text-black">Movie</h2>
                </div>
                
                <div
                className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-700 text-orange-700 rounded-full"
                >
                <h2 className="text-xs font-semibold text-black">Action</h2>
                </div>

                <div
                className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-700 text-orange-700 rounded-full"
                >
                <h2 className="text-xs font-semibold text-black">Drama</h2>
                </div>
                
                
                </div>
                
                <p className="text-white">
                  The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City. Since then, the team has expanded its roster and faced a host of new threats, while dealing with their own turmoil.
                </p>

                <div className="flex items-center mb-10">
                  <button onClick={() => router.push('/watch')} className="py-1 rounded-full text-gray-300 hover:text-white text-sm px-1">
                    <AiOutlinePlayCircle className="h-7 w-7 md:h-10 md:w-10" />
                  </button>
                  <div>
                    <h2 className="text-lg font-semibold text-white cursor-pointer">Watch</h2>
                  </div>

                  <button onClick={onOpen} className="py-1 ml-10 rounded-full text-gray-300 hover:text-white text-sm px-1">
                    <AiFillPlusCircle className="h-7 w-7 md:h-10 md:w-10" />
                  </button>
                  <div>
                    <h2 className="text-lg font-semibold text-white cursor-pointer">Favorite</h2>
                  </div> 
                </div>


              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
