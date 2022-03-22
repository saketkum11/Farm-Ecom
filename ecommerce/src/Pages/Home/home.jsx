import React from "react";
import { NavBar } from "../../component/Navbar/Navbar";
import { Link } from "react-router-dom";


export function Home(){
return (
<>
    <NavBar></NavBar>
    <main class="wt-80 m-auto ">
    <div class="flex items-start justify-center h-lg m-y-11 position-rel">
        <img src="" alt="" class="rounded-L object-content wt-100 h-100" />
        <a href="/component/product/product.html" target="_blank"
            class="text-color-9 text-dec text-m rounded-m pd-x-9 pd-y-3 position-ab bg-black-1 p-t-7 p-lf-1">More</a>
    </div>
    <div class="m-y-9">
        <span class="text-lg text-bold">Categories</span>
    </div>
    <section class="flex m-y-3 justify-around ">
        <div class=" wt-20 flex flex-column justify-center items-center  position-rel">
            <a href="/component/product/product.html" target="_blank">
                <img src="/css/image/Egg.jpg" class="wt-100 h-100 object-content rounded-m" alt="" />
            </a>
            <span class=" position-ab text-color-0 text-m text-bold p-t-5">Egg and Meat </span>

        </div>
        <div class=" wt-20 flex justify-center position-rel">
            <a href="/component/product/product.html" target="_blank">
                <img src="/css/image/Grain.jpg" class="wt-100 h-100 object-content rounded-m" alt="" />
            </a>
            <span class="position-ab  text-color-0 text-m text-bold p-t-5">Grain</span>
        </div>
        <div class="  wt-20 flex justify-center position-rel">
            <a href="/component/product/product.html" target="_blank">
                <img src="/css/image/vegetable (2).jpg" class="wt-100 h-100 object-content rounded-m" alt="" />
            </a>
            <span class="position-ab  text-color-0 text-m text-bold p-t-5">Vegetable</span>

        </div>
        <div class="rounded-s wt-20 flex justify-center position-rel">
            <a href="/component/product/product.html" target="_blank"> <img src="/css/image/strawberri.jpg"
                    class="wt-100 h-100 object-content rounded-m" alt="" />
            </a>
            <span class="position-ab  text-color-0 text-m text-bold p-t-5">Fruits</span>
        </div>
    </section>
    <section class="m-y-11">
        <div class="m-y-11">
            <span class="text-lg text-bold">Coming Soon</span>
        </div>
        <div class="flex wt-100 justify-btw m-x-4">
            <div class=" rounded-s wt-30  flex justify-center position-rel items-start">
                <img src="/css/image/Egg.jpg" alt="" class="rounded-L object-content wt-100 h-50" />
                <a href="/component/product/product.html" target="_blank"
                    class=" text-color-9 text-dec text-xm rounded-m pd-x-8 pd-y-3 position-ab bg-black-1 p-lf-1 p-t-3">More</a>
            </div>
            <div class="roounded-s wt-80 flex justify-center position-rel  m-x-4">
                <img src="/css/image/Egg.jpg" alt="" class="rounded-L object-content wt-100 h-50" />
                <a href="/component/product/product.html" target="_blank"
                    class="position-ab text-color-9 text-dec text-xm rounded-m pd-x-11 pd-y-3 position-ab bg-black-1 p-t-3 p-lf-1">More</a>
            </div>

        </div>
    </section>

</main>
</>
)
}