'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {BsCheckCircle} from "react-icons/bs"

function Showcase() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Set the default number of slides to show
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
                centerPadding: "50px", // Add this line to reduce centerPadding for smaller screens
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerPadding: "0px", // Add this line to remove centerPadding for smallest screens
              },
            },
          ],
        };
    
   const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg"]

  return (
    <div className="bg-black text-white pb-10">
      <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-4xl pt-20">
        Exclusive Content on tabii
      </h1>
      <h1 className="text-center mt-4 font-semibold text-2xl">Anytime, anywhere…</h1>

      <div className="mx-auto max-w-7xl mt-20">
        <Slider {...settings}>
            {
                images.map((image, index) => {
                    return (
                        <div className="px-2" key={index}>
                            <Image src={`/showcase/${image}`} width={300} height={300} />
                        </div>
                    )
                })
            }
        </Slider>
      </div>

      <div className="pt-16">
        <BsCheckCircle className="text-center mx-auto text-2xl md:text-3xl lg:text-7xl text-white font-thin" />
        <h1 className="mt-4 text-center font-semibold text-2xl md:text-3xl lg:text-4xl">
           Content for the whole family
       </h1>
      </div>
    </div>
  );
}

export default Showcase;
