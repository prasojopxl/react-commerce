"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Image from "next/image"
import { getData } from "@/lib/services";
import { FaStar, FaRegStar } from "react-icons/fa";



export default function ItemProduct(props) {
    const [product, setProduct] = useState([])


    return (
        <div className="lg:w-4/12 w-6/12 lg:p-4 p-2">
            <div className="border-[1px] border-gray-200 border-solid rounded-lg min-h-6 p-3 flex flex-col lg:gap-4 gap-2">
                <div className="relative">
                    <Image src={`${props.image ? props.image : "/images/no-image-square.jpg"}`} width={1049} height={1500} alt={props.title} />
                </div>
                <Link href={`${props.link ? props.link : "/"}`} className="bg-slate-400 rounded-lg text-white lg:px-4 lg:py-3 px-2 py-1 text-center hover:bg-black">Detail</Link>
                <h5 className="lg:text-lg text-sm">{props.category ? props.category : "no category"}</h5>
                <h2 className="lg:text-3xl text-lg font-bold">{props.title ? props.title : "no title"}</h2>
                <div className="flex gap-1">
                    {
                        Array.from({ length: 5 }, (_, i) => {
                            return i < props.rate ? <FaStar key={i} /> : <FaRegStar key={i} />;
                        })
                    }
                </div>
                <div className="flex justify-between text-lg opacity-75">{props.price ? props.price : "no price"}</div>
            </div>
        </div >
    )
}



