'use client'
import React from "react";
import Dash from '../components/dashboard'; 
import Navbar from '../components/navbar'
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-gray-800 h-screen w-full flex justify-center items-center relative">
        <div style={{ width: '100%', height: '100vh', position: 'absolute', zIndex: '1' }}>
          <Image
            src={'/bgimages.png'}
            width={1200}
            alt="image"
            height={700}
            className="rounded-3xl absolute inset-0 w-full h-full object-cover z-3"
          />
        </div>
        <div className="bg-transparent p-0 w-[85%] h-[90%] relative ring-1 ring-white/30 rounded-3xl z-2 overflow-hidden">
          <div className="relative p-3 z-4 w-full h-full">
            <Navbar />
            <Dash/>
          </div> 
        </div>
      </div>
    </>
  )
}
