'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import {AiFillPlusCircle} from "react-icons/ai";
import { useRouter } from 'next/navigation'

function Showcase({title,onOpen}) {
  const router = useRouter()

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
  ];

  return (
    <div className="bg-black text-white pb-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-start font-semibold text-lg md:text-xl lg:text-2xl py-6">
          {title}
        </h1>
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <div className="relative group px-2 cursor-pointer" key={index}>
                <Image src={`/showcase/${image}`} width={300} height={300} />
                <div className="absolute w-full bottom-0 py-2 px-2 bg-black text-white">
                    <h2 className="text-sm font-semibold">Movie Title</h2>
                  </div>
                <div className="absolute bottom-0 left-0 w-full h-1/5 bg-opacity-75 bg-black text-white  text-sm px-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition   duration-300">
                  <button onClick={() => router.push('/watch')} className="py-1 rounded-full text-gray-300 hover:text-white text-sm px-1">
                    <AiOutlinePlayCircle className="h-7 w-7 md:h-10 md:w-10" />
                  </button>
                  <div>
                    <h2 className="text-sm font-semibold">Drama</h2>
                  </div>

                  <button onClick={onOpen} className="py-1 rounded-full text-gray-300 hover:text-white text-sm px-1">
                    <AiFillPlusCircle className="h-7 w-7 md:h-10 md:w-10" />
                  </button>
                  
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Showcase;
