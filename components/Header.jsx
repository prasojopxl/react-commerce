"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useStore } from "@/lib/store";
import { CiMenuKebab } from "react-icons/ci";
import Basecontent from "./basecontent";
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/services";
import _ from "lodash"
import { getQuery } from "./ProductList";

function HeaderSection() {
    const { cart, productName, price } = useStore()
    const [keyword, setKeyword] = useState("")
    const handleSearch = (e) => {
        setKeyword(e)
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ["product"],
        queryFn: getQuery
    })

    const dataContent = data?.data

    console.log(keyword)

    return (
        <div className="bg-color-main">
            <div className="wrapper">
                <div className="flex justify-between items-center py-5">
                    <Link href="/" className="text-white text-2xl font-extrabold">MyCommerce</Link>
                    <div className="hidden lg:block">
                        <input type="text" placeholder="Search..." className="py-2 px-3 rounded-lg min-w-[300px]" onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <div className="flex">
                        <Link href="/cart" className="text-3xl text-white relative">
                            <IoMdCart />
                            <div className="absolute text-[10px] top-0 right-0 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">{cart.length}</div>
                        </Link>
                        <div className="text-white text-2xl lg:hidden block">
                            <CiMenuKebab />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default function Header() {

    return (
        <Basecontent>
            <HeaderSection />
        </Basecontent>
    )
}
