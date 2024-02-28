import { Button } from "@/components/ui/button"
import FilterData from "@/components/FilterData";
import SortData from "@/components/SortData";
import ItemProduct from "@/components/ItemProduct";

export default function Home() {
  


  return (
    <div className="wrapper">
        <div className="my-7">
            <div className="flex items-center justify-between w-full">
                <FilterData/>
                <SortData/>
            </div>
            <div className="relative flex flex-wrap -mx-4">
              <ItemProduct category="MENS"/>
              <ItemProduct category="WOMEN"/>
              <ItemProduct category="SHOP"/>
              <ItemProduct category="CHILD"/>
              <ItemProduct/>
            </div>
        </div>
    </div>
  );
}
