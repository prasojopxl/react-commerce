"use client"

import Image from "next/image"
import React from 'react'
import { useStore } from "@/lib/store";

export default function CartPage() {
    const { cart } = useStore()

    console.log(cart)
    return (
        <div className="bg-gray-100">
            <div className="wrapper py-11">
                <div className="relative max-w-[700px] mx-auto">
                    <h4 className="text-3xl font-bold mb-5">Keranjang</h4>
                    <div className="bg-white rounded-lg p-5">
                        <div className="flex flex-col gap-4">

                            {
                                cart.length > 0 ? cart?.map((item) => {
                                    return (
                                        <div className="flex justify-between w-full">
                                            <div className="flex gap-4">
                                                <div className="max-w-[100px]">
                                                    <Image src={item.image} width={500} height={500} alt="no image" />
                                                </div>
                                                <div>
                                                    <div className="relative text-lg ">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-sm">x{item.total}</div>
                                                </div>
                                            </div>
                                            <div className="relative font-bold">${item.price}</div>
                                        </div>)
                                }) : "Keranjang Belanja Kosong"
                            }


                        </div>
                        <div className="flex justify-between mt-10 text-3xl font-bold">
                            <div>Total</div>
                            <div>$44.6</div>
                        </div>
                        <div className="btn mt-5 p-3 cursor-pointer">Checkout</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
