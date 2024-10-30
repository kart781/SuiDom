import React from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import AboutDom from "../sections/AboutDom";
import BuyDom from "../sections/BuyDom";

const Page = () => {
    return (
        <div className="flex flex-col w-full h-full snap-mandatory snap-y">
            <Home />
            <About />
            <AboutDom />
            <BuyDom />
        </div>
    )
};

export default Page;