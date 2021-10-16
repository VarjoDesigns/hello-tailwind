import React from "react";
import { Popover, Transition } from '@headlessui/react'
import Card from "./Card";

export default function ThreeColumns() {

    const data = [
        { id: 1, title: 'Inline styling with class names', description: "Tailwind uses CSS classes in html as you would do in a ordinary html5/css3 site, but instead of defining classes yourself you use premade ones included in Tailwind system.", picture: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2113&q=80",},
        { id: 2, title: 'Simple integration to React via npm', description: "Use node package manager to install the Tailwind CSS library, and Craco to overrun react css. You can edit settings via tailwind.config, or just use the default classes directly in your html", picture: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2113&q=80",},
        { id: 3, title: 'Low-level CSS architecture', description: "Instead of providing you with complete components like higher level CSS frameworks (Such as Material UI or Bootstrap), Tailwind provides you with class based approach", picture: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2113&q=80",},
        ]

    return(
        <div>
            <Card data = { data }/>
        </div>
    )
}