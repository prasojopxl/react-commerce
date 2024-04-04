"use client"
import React from 'react'
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useStore } from "@/lib/store";

export default function Header() {
    const cart = useStore((state) => state.cart)

    return (
        <div className="bg-color-main">
            <div className="wrapper">
                <div className="flex justify-between items-center py-5">
                    <Link href="/" className="text-white text-2xl font-extrabold">MyCommerce</Link>
                    <div>
                        <input type="text" placeholder="Search..." className="py-2 px-3 rounded-lg min-w-[300px]" />
                    </div>
                    <div className="text-3xl text-white relative">
                        <div className="text-sm absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">{cart.length > 0 ? cart[0].quantity : "0"}</div>
                        <IoMdCart />
                    </div>
                </div>
            </div>
        </div>
    )
}
