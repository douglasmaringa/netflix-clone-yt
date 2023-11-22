'use client'
import React from "react";
import Slider from "react-slick";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from 'next/navigation'

function Hero() {
  const router = useRouter()


  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[65vh] lg:justify-end lg:pb-12 lg:pl-24">
      <div className="absolute top-0 left-0 h-[95vh] w-full -z-10">
        <Image
          src={`/main/1.jpeg`}
          alt="test"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-full h-32  bg-gradient-to-t from-gray-800 to-transparent bottom-0 z-20" />
      </div>

      <h1 className="text-white text-2xl md:text-4xl lg:text-7xl font-bold">
        The Flash
      </h1>
      <p className="text-white max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl line-clamp-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi eos optio vel. Illo placeat soluta aperiam expedita rem voluptate quasi necessitatibus error corrupti, totam quidem laudantium consequatur cupiditate.
      </p>

      <div className="flex space-x-3">
        <button
          onClick={() => router.push('/watch')}
          className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black"
        >
          <AiFillPlayCircle className="h-4 w-4 text-black md:h-7 md:w-7 cursor-not-allowed" />
          Play
        </button>
        <button
          className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70"
        >
          More Info{" "}
          <IoMdInformationCircleOutline className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
   
  );
}

export default Hero;
