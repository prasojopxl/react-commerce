import React from 'react'
import Image from "next/image";

export default function PageDetail() {
    return (
        <div className="wrapper py-11">
            <div className="flex">
                <div className="w-6/12">
                    <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={500} height={500} />
                </div>
                <div className="w-6/12">
                    <h1 className="text-4xl font-bold text-color-main">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                    <h5 className="my-3">Category: men's clothing</h5>
                    <h4 className="my-4 text-2xl font-bold">$109.95</h4>
                    <h5 className="text-lg font-bold">Description:</h5>
                    <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                    <div className="my-5">Rating</div>
                    <div className="flex gap-3 items-center">
                        <div className="relative btn">-</div>
                        <div>1</div>
                        <div className="relative btn">+</div>
                    </div>
                    <div className="btn-red my-4 ">Add to cart</div>
                </div>
            </div>
        </div>
    )
}
