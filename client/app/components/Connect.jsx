import Image from 'next/image';
import React from 'react';
import Avatar from "../../public/user.png"

const Connect = ({ connected }) => {
    return (
        <div className="flex justify-evenly border-2 border-borderColor rounded-xl bg-secondaryColor py-7">
            <div>
                <h1 className="text-lg">Muskan Garg</h1>
                <p className="mt-2 text-[#1F1F1FB2]">Full Stack Developer</p>
                <p className="text-[#1F1F1FB2]">Oruphones</p>
                <button className="mt-3 bg-[#BAB6EB] text-[#1F1F1FB2] font-semibold px-2 py-1 rounded-xl">{connected}</button>
            </div>
            <div>
                <Image src={Avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default Connect;