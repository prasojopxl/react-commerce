"use client"
import React from 'react'
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useStrore } from "@/lib/store";
import { CiMenuKebab } from "react-icons/ci";


export default function Header() {
    const cart = useStrore((state) => state.cart)
    return (
        <div className="bg-color-main">
            <div className="wrapper">
                <div className="flex justify-between items-center py-5">
                    <Link href="#" className="text-white text-2xl font-extrabold">MyCommerce</Link>
                    <div className="hidden lg:block">
                        <input type="text" placeholder="Search..." className="py-2 px-3 rounded-lg min-w-[300px]" />
                    </div>
                    <div className="flex">
                        <div className="text-3xl text-white relative">
                            <IoMdCart />
                            <div className="absolute text-[10px] top-0 right-0 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">{cart}</div>
                        </div>
                        <div className="text-white text-2xl lg:hidden block">
                            <CiMenuKebab />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
