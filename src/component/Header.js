import React from "react";

export default function Header() {

    return(
        <div className="min-h-screen bg-header bg-cover bg-center flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Finnish National Banana Exporters Association</h1>
                    <p className="text-sm font-medium text-gray-900">
                        The lucrative business of exporting bananas grown in Finland awaits!
                        Join FNBEA today!
                        </p>
                    <button
                        type="submit"
                        className="mt-10 w-full bg-white border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}