import React from "react";
import { Popover, Transition } from '@headlessui/react'

export default function Hero() {

    return(
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <Popover>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="px-4 relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="hidden md:block md:md1-10 md:pr-4 md:space-x-8">
                                <a href="#">
                                    <span className="font-medium text-gray-500 hover:text-pink-600">Home</span>
                                </a>
                                <a href="#">
                                    <span className="font-medium text-gray-500 hover:text-pink-600">About</span>
                                </a>
                                <a href="#">
                                    <span className="font-medium text-gray-500 hover:text-pink-600">Services</span>
                                </a>
                                <a href="#">
                                    <span className="font-medium text-gray-500 hover:text-pink-600">Contact</span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </Popover>

                <main className="mt-20 mb-20 mx-auto max-w-7x1 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span>Let's code with</span><span className="text-pink-600"> Tailwind CSS!</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Tailwind is a low-level CSS framework, based around style classes. 
                        </p>
                    </div>
                </main>

            </div>
        </div>
    )
}