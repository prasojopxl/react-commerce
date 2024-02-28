"use client"
import React from 'react'
import ItemProduct from "@/components/ItemProduct";
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/services";

export default function ProductList() {
    const getQuery = async () => {
        return await getData("/products")
    }

    const query = useQuery({
        queryKey: ["product"],
        queryFn: getQuery
    })

    if (query.isLoading) {
        return (
            <div className="wrapper relative flex justify-center mt-10">
                <div className="animate-pulse w-full flex gap-4">
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full"></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                </div>
            </div>
        )
    }

    if (query.error) {
        return (
            <div className="wrapper">
                <div className="bg-red-500 text-white text-center p-5 my-7">Error Network</div>
            </div>
        )
    }

    console.log(query.data.data)

    return (
        <div className="relative flex flex-wrap -mx-4">
            <ItemProduct
                category="MENS"
                image="/images/prod.jpg"
                link="/"
                title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                price="$100"
            />
            <ItemProduct
                category="Women"
                link="/"
                title="1 Backpack, Fits 15 Laptops"
                price="$110"
            />
            <ItemProduct
                category="Child"
                image="/images/prod.jpg"
                link="/"
                title="ackpack, Fits 15 Laptops"
                price="$300"
            />
            <ItemProduct
                category="MENS"
                link="/"
                title="Fits 15 Laptops"
                price="$100"
            />
        </div>
    )
}
