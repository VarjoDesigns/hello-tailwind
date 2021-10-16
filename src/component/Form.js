import React, {useState} from 'react';

export default function Form() {

    return(
        <div className="py-20">
            <h1 className="font-bold tracking-tight text-2xl text-center text-indigo-900">
                Please leave us a message!
            </h1>
            <form className="mx-auto text-center mt-8 text-indigo-900">
                <div className="py-2">
                    <label htmlFor="name">Your name: </label><br />
                    <input id="name" type="text"  className="py-2 px-4 w-80"></input>
                </div>

                <div className="py-2">
                    <label htmlFor="name">Your email: </label><br />
                    <input id="email" type="text" className="py-2 px-4 w-80"></input>
                </div>
                
                <div className="py-2">
                    <label htmlFor="name">Your message: </label><br />
                    <textarea id="email" type="text" className="py-2 px-4 w-80"></textarea>
                </div>

                <button type="submit" className="bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-16 rounded-full font-light">Submit</button>

            </form>
        </div>
    )
}