"use client";
import React, { useState, useRef } from 'react';
import Image from "next/image";
import Avatar from "../../public/user.png";

const UploadPhoto = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    function handleImageChange(event) {
        const selectedFile = event.target.files[0];
        setSelectedImage(URL.createObjectURL(selectedFile));
    }

    function handleUploadButtonClick() {
        fileInputRef.current.click();
    }

    return (
        <div className="sm:flex text-center sm:justify-between mb-2 p-5 pt-2">
            <div className="flex justify-center">
                {selectedImage ? (
                    <img src={selectedImage} alt="Avatar" className="bg-cover w-28 h-28 rounded-full" />
                ) : (
                    <Image src={Avatar} alt="Avatar" className="w-28 bg-cover" />
                )}
            </div>
            <div className="sm:mt-[40px] mt-5">
                <label className="smoky-btn cursor-pointer">
                    Upload Photo
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        className="hidden"
                    />
                </label>
            </div>
        </div>
    );
}

export default UploadPhoto;

