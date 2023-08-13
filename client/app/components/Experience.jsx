import React from 'react';
import Image from 'next/image';
import Logo from "../../public/oru_logo.png";

const Experience = () => {
    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between mb-5">
                <div>
                    <h1 className="text-lg">Experience</h1>
                </div>
                <div>
                    <button className="smoky-btn">Edit</button>
                </div>
            </div>
            <div className="mt-3 border-2 border-borderColor rounded-xl px-5 py-4 flex space-x-5">
                <div>
                    <p>7 Years (2014-2021)</p>
                    <p className="text-[#1F1F1FB2]">Coding Ninjas</p>
                </div>
                <div>
                    <p>Full Time</p>
                    <p className="text-[#1F1F1FB2]">Full Stack Developer</p>
                </div>
                <div>
                    <Image src={Logo} alt="logo" className="w-16"/>
                </div>
            </div>
            <div className="mt-3 border-2 border-borderColor rounded-xl px-5 py-4 flex space-x-5 xl:space-x-16">
                <div>
                    <p>7 Years (2014-2021)</p>
                    <p className="text-[#1F1F1FB2]">Coding Ninjas</p>
                </div>
                <div>
                    <p>Full Time</p>
                    <p className="text-[#1F1F1FB2]">Full Stack Developer</p>
                </div>
                <div>
                    <Image src={Logo} alt="logo" className="w-16"/>
                </div>
            </div>
        </div>
    )
}

export default Experience;