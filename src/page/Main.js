import React from "react";
import Hero from "../component/Hero";
import ThreeColumns from "../Assets/ThreeColumns";
import HeroRight from "../component/Heroright";
import HeroCenter from "../component/Herocenter";
import Learnmore from "../component/Learnmore";

export default function Main() {
    // Simple card
    return(
        <div className="bg-gray-50 h-full">
            <Hero/>
            <ThreeColumns/>
            <HeroCenter/>
            <Learnmore/>
            <HeroRight/>
        </div>
    )
}