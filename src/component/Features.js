import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faFacebookSquare, faBehance } from "@fortawesome/free-brands-svg-icons"

export default function Features() {

    // Font awesome icon setup
    const github = <FontAwesomeIcon icon ={faGithub} />

    const features = [
        {
            title: "API based design system",
            description: "Use Tailwind's powerful utility classes to design your page directly within html structure. Find an efficient workload that won't constrain you with premade components",
            icon: "faGithub",
        },
        {
            title: "Very important notion",
            description: "Use Tailwind's powerful utility classes to design your page directly within html structure. Find an efficient workload that won't constrain you with premade components",
            icon: "faGithub",
        },
        {
            title: "Who's reading these anyway",
            description: "Use Tailwind's powerful utility classes to design your page directly within html structure. Find an efficient workload that won't constrain you with premade components",
            icon: "faGithub",
        },
        {
            title: "Profoundly efficient workflow system",
            description: "Use Tailwind's powerful utility classes to design your page directly within html structure. Find an efficient workload that won't constrain you with premade components",
            icon: "faGithub",
        },
    ]

    return(
        <div className="py-20 flex max-w-7xl mx-auto">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16">
                { features.map((feature) => (
                    <div key={feature.title} className="relative">
                        <div>
                            <h1 className="leading-6 font-semibold text-xl text-indigo-900">{ feature.title }</h1>
                            <p className="mt-2 text-base font-light text-indigo-900">{ feature.description }</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}