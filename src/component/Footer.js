import React from "react";
import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faFacebookSquare, faBehance } from "@fortawesome/free-brands-svg-icons"

export default function Hero() {

    // Font awesome icon setup
    const github = <FontAwesomeIcon icon ={faGithub} />
    const instagram = <FontAwesomeIcon icon ={faInstagram} />
    const facebook = <FontAwesomeIcon icon ={faFacebookSquare} />
    const behance = <FontAwesomeIcon icon ={faBehance} />

    return(
        <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <Popover>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8 py-10 mt-28">
                        <nav className="px-4 relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="hidden md:block md:md1-10 md:pr-4 md:space-x-8">
                                <a href="#">
                                    <span className="font-medium text-indigo-800 hover:text-pink-600">Home</span>
                                </a>
                                <a href="#">
                                    <span className="font-medium text-indigo-800 hover:text-pink-600">About</span>
                                </a>
                                <a href="#">
                                    <span className="font-medium text-indigo-800 hover:text-pink-600">Services</span>
                                </a>
                                <a href="#">
                                    <span className="font-medium text-indigo-800 hover:text-pink-600">Contact</span>
                                </a>
                            </div>
                            <div className="relative w-full">
                                <p className="text-right w-full text-xl">
                                    <a href="https://github.com/varjodesigns" className="px-2 text-indigo-800 hover:text-pink-600">{ github }</a>
                                    <a href="https://www.instagram.com/varjodesigns/" className="px-2 text-indigo-800 hover:text-pink-600">{ instagram }</a>
                                    <a href="https://www.facebook.com/VarjoDesigns" className="px-2 text-indigo-800 hover:text-pink-600">{ facebook }</a>
                                    <a href="https://www.behance.net/VarjoDesigns" className="px-2 text-indigo-800 hover:text-pink-600">{ behance }</a>
                                </p>
                            </div>
                        </nav>
                        <p className="mt-8 text-center text-sm">
                            Copyright: Joona Mellin 2021
                        </p>
                    </div>
                </Popover>
            </div>
        </div>
    )
}