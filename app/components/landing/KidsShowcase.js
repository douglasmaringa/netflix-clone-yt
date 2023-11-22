'use client'

import Image from 'next/image'
import React from 'react'

function KidsShowcase() {
  return (
    <div className='bg-black p-10 flex flex-col md:flex-row justify-center'>
        <div className='flex flex-col'>
            <h1 className='text-[#02FF99] font-semibold text-xl'>Children</h1>
            <p className='text-white text-xl font-semibold mt-2'>Your kids will enjoy hours of entertainment, explore new <br/> worlds and meet new characters from shows you can trust.</p>

            <h1 className='text-[#02FF99] font-semibold text-xl mt-5'>For You</h1>
            <p className='text-white text-xl font-semibold mt-2'>Watch shows the whole family can enjoy together.</p>
        </div>

        <div className='flex justify-center items-center'>
        <Image src='/kids.png' width={730} height={710} objectFit='cover' />
      </div>
    </div>
  )
}

export default KidsShowcase