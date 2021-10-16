import React from "react";
import { Popover, Transition } from '@headlessui/react'

export default function Card(props) {
    // Simple card
    return(
        <div id="cards"className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
            <article>
                <section className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
                    { props.data.map( data => {
                        return(
                            <article key={ data.id } className="relative bg-white overflow-hidden w-full h-60 bg-cover bg-center transition ease-in-out duration-500 shadow-md hover:shadow-lg rounded-md">
                                <div className="absolute inset-0">
                                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                        <div>
                                            <p className="text-purple-900 text-center text-xl font-normal">
                                                { data.title }
                                            </p>
                                            <p className="mt-4 text-purple-900 text-center text-main font-extralight">
                                                { data.description }
                                            </p>
                                        </div>
                                        <img url={ data.picture }></img>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </article>
        </div>
    )
}