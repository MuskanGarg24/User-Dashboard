import React from 'react';
import Image from "next/image";
import Badge from "../../public/badge.png"

const Certifications = () => {
    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Certifications</h1>
                </div>
                <div>
                    <button className="smoky-btn">Edit</button>
                </div>
            </div>
            <div className="mt-3 border-2 border-borderColor sm:rounded-[3rem] sm:px-5 sm:py-4 sm:flex xl:space-x-28 lg:space-x-56 md:space-x-24 sm:space-x-28 px-3 py-2 rounded-xl">
                <div className="flex justify-center">
                    <Image src={Badge} alt="badge" className="w-10 sm:ml-5 mt-1"/>
                </div>
                <div className="text-center text-[#1F1F1FB2]">
                    <p className="text-lg">Python</p>
                    <p>Coding Ninjas</p>
                </div>
            </div>
        </div>
    )
}

export default Certifications;