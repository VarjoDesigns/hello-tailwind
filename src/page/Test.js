import React from "react";
import Features from "../component/Features";
import Footer from "../component/Footer";
import Form from "../component/Form";

export default function Home() {
    // Simple card
    return(
        <div className="bg-gray-50">
            <Features/>
            <Form />
            <Footer />
        </div>
    )
}