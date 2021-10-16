import React from "react";
import { Popover, Transition } from '@headlessui/react'

export default function Learnmore() {

    return(
        <div className="content-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
            <div className="relative overflow-hidden container mx-auto content-center justify-center">
                <h1 className="font-bold tracking-tighter text-2xl text-center text-indigo-900">About the technology</h1>
                <p className="py-2 max-w-4xl text-center mx-auto text-indigo-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div className="flex justify-center py-2">
                    <button className="mt-4 bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-16 rounded-full font-light">
                        Find out more
                    </button>
                </div>
                
            </div>
        </div>
    )
}