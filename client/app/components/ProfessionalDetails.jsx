import React from 'react';
import Image from "next/image";
import Star from "../../public/stars.png"

const ProfessionalDetails = () => {
    return (
        <div className="mb-5 mt-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="flex">
                <div>
                    <h1 className="text-lg">Professional Details</h1>
                    <p className="mt-1 text-[#1F1F1FB2]">This are the professional details shown to users in the app.</p>
                </div>
                <div>
                    <Image src={Star} alt="star" className="w-20" />
                </div>
            </div>
        </div>
    )
}

export default ProfessionalDetails;