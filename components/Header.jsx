"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useStore } from "@/lib/store";
import { CiMenuKebab } from "react-icons/ci";
import { motion, AnimatePresence } from 'framer-motion';


export default function Header() {
    const { cart } = useStore()
    return (
        <div className="bg-color-main">
            <div className="wrapper">
                <div className="flex justify-between items-center py-5">
                    <Link href="/" className="text-white text-2xl font-extrabold">MyCommerce</Link>
                    <div className="hidden lg:block">
                        <input type="text" placeholder="Search..." className="py-2 px-3 rounded-lg min-w-[300px]" />
                    </div>
                    <div className="flex">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0.5, scale: 0.9 }}
                                animate={cart.length > 0 ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.9 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                }}
                            >
                                {
                                    cart.length > 0 ? <Link href="/cart" className="text-3xl text-white relative cursor-pointer">
                                        <IoMdCart />
                                        <div className="absolute text-[10px] top-0 right-0 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">{cart.length}</div>
                                    </Link> :
                                        <div className="text-3xl text-white relative">
                                            <IoMdCart />
                                        </div>
                                }

                            </motion.div>
                        </AnimatePresence>
                        <div className="text-white text-2xl lg:hidden block">
                            <CiMenuKebab />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
