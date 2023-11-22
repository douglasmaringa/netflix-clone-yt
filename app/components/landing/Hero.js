'use client'
import React from 'react';
import { Input,Button } from "@nextui-org/react";

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex flex-col space-y-4">
        <span>Discover the magic</span> <span>of Seffa Flix entertainment</span> 
        </h1>
        <br />
        <h2 className='text-white text-xl'>Enter your email to get started</h2>
       
        <div className='w-full flex items-center space-x-4'>
        <Input
          isClearable
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="text-white max-w-2xl"
        />
        <Button className='py-7 bg-[#24FF95] font-semibold text-base' color="default">
            Get Started
        </Button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
