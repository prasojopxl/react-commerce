"use client"
import React from 'react'
import ItemProduct from "@/components/ItemProduct";
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/services";
import _ from "lodash";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductList() {
    const searchParams = useSearchParams();
    const paramsCategory = searchParams.get("category")
    const paramsSort = searchParams.get("sort")

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
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full hidden lg:block "></div>
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

    const myData = query?.data.data

    const newData = paramsCategory && !paramsSort ?
        _.filter(myData, (item) => {
            return myData && item.category === paramsCategory
        })
        :
        !paramsCategory && paramsSort ?
            _.filter(myData, (item) => {
                return myData
            })
                .sort((a, b) => {
                    if (paramsSort === "low") {
                        return a.price - b.price
                    }
                    if (paramsSort === "hight") {
                        return b.price - a.price
                    }
                })
            :
            paramsCategory && paramsSort ?
                _.filter(myData, (item) => {
                    return myData && item.category === paramsCategory
                })
                    .sort((a, b) => {
                        if (paramsSort === "low") {
                            return a.price - b.price
                        }
                        if (paramsSort === "hight") {
                            return b.price - a.price
                        }
                    })
                :
                myData



    return (

        <div className="relative flex flex-wrap lg:-mx-4 -mx-2 ">
            {
                newData.map(item => {
                    return (
                        <ItemProduct
                            key={item.id}
                            category={item.category}
                            image={item.image}
                            link={`/product/${item.id}`}
                            title={item.title}
                            price={`$${item.price}`}
                            rate={parseInt(`${item.rating.rate}`)}
                        />
                    )
                })
            }

        </div>
    )
}
