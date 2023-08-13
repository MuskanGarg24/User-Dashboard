import React from 'react';
import Image from "next/image";
import Avatar from "../../public/user.png";

const UploadPhoto = () => {
    return (
        <div className="sm:flex text-center sm:justify-between mb-2 p-5 pt-2">
            <div className="flex justify-center">
                <Image src={Avatar} alt="Avatar" className="w-28 bg-cover" />
            </div>
            <div>
                <button className="smoky-btn sm:mt-[40px] mt-5">Upload Photo</button>
            </div>
        </div>
    )
}

export default UploadPhoto;