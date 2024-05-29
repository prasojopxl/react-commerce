"use client"
import { Button } from "@/components/ui/button"
import FilterData from "@/components/FilterData";
import SortData from "@/components/SortData";
import Basecontent from "@/components/basecontent";
import ProductList from "@/components/ProductList";

export default function Home() {    
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
