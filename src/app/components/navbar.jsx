'use client'
import Image from "next/image";
import React, {useState} from "react";
import PillButton from '../components/ui/button2'
import { BookOpen } from "lucide-react";

export default function Navbar(){
    return(
        <div className=" flex w-[100%] mt-3 justify-around items-center">
           <div className="flex items-center space-x-2">
                     <div className="bg-indigo-600 p-1.5 rounded-md">
                       <BookOpen className="w-4 h-4 text-white" />
                     </div>
                     <span className="text-lg font-medium text-white">
                       Echoes
                     </span>
            </div>
            <div className="flex">
                <PillButton
                    className = 'text-sm text-white w-fit h-fit'
                > Dashboard</PillButton>
                <PillButton
                    className = 'text-sm text-white w-fit h-fit'
                > Insights</PillButton>
                <PillButton
                    className = 'text-sm text-white w-fit h-fit'
                > Reels</PillButton>
                <PillButton
                    className = 'text-sm text-white w-fit h-fit'
                > Community</PillButton>
                

            </div>
        </div>
    )
}