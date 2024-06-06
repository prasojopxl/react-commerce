"use client"
import { Button } from "@/components/ui/button"
import FilterData from "@/components/FilterData";
import SortData from "@/components/SortData";
import Basecontent from "@/components/basecontent";
import ProductList from "@/components/ProductList";
import { useEffect } from "react";

export default function Home() {    
    useEffect(()=> {
        // const scriptSnap = "https://app.sandbox.midtrans.com/snap/snap.js"
        // const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY
        // const script = document.createElement("script")
        // script.src = scriptSnap
        // script.setAttribute("data-client-key", clientKey)
        // script.async = true
        // document.body.appendChild(script)
        // return ()=> {
        //     document.body.removeChild(script)
        // }
    },[])
    return (
    <div className="wrapper">
        <Basecontent>
            <div className="my-7">
                <div className="flex lg:flex-row flex-col lg:items-center gap-5 justify-between w-full">
                    <FilterData/>
                    <SortData/>
                </div>
                <ProductList/>
            </div>
        </Basecontent>
    </div>
    );
}
