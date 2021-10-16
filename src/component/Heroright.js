import React from "react";
import { Popover, Transition } from '@headlessui/react'

export default function HeroRight() {

    return(
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <main className="mt-28 mb-20 mx-auto max-w-7x1 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-36 lg:px-8 xl:mt-48">
                    <div className="text-right">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="text-indigo-900">Where can I </span><span className="text-pink-600">learn more?</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Let's explore some neat tricks 
                        </p>
                    </div>
                </main>

            </div>
        </div>
    )
}