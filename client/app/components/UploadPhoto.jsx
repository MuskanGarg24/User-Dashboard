"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Avatar from '../../public/user.png';
import axios from 'axios';

const UploadPhoto = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);
    const [userImage, setUserImage] = useState(null);

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;

    useEffect(() => {
        fetchUserImage();
    }, []);

    const fetchUserImage = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
            const userData = response.data.user;
            const userImageUrl = userData.image.url;
            setUserImage(userImageUrl);
        } catch (error) {
            console.error('Error fetching user image:', error);
        }
    };

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        transformFile(selectedFile);
    };

    const transformFile = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
        } else {
            setSelectedImage(null);
        }
    };

    const uploadImage = async () => {
        try {
            setUploading(true);
            const response = await axios.post(`http://localhost:5000/api/user/uploads/${userId}`, {
                image: selectedImage,
            });
            console.log('Image uploaded successfully:', response.data);
            setUploading(false);
            setSelectedImage(null);

            // Update user image after successful upload
            fetchUserImage();
        } catch (error) {
            console.log('Error uploading image:', error);
            setUploading(false);
        }
    };

    return (
        <div className="sm:flex text-center sm:justify-between mb-2 p-5 pt-2">
            <div className="flex justify-center">
                {selectedImage || userImage ? (
                    <img src={selectedImage || userImage} alt="Avatar" className="bg-cover w-28 h-28 rounded-full" />
                ) : (
                    <Image src={Avatar} alt="Avatar" className="w-28 bg-cover" />
                )}
            </div>
            <div className="sm:mt-[40px] mt-5">
                {uploading ? (
                    <button className="smoky-btn" disabled>
                        Uploading...
                    </button>
                ) : selectedImage ? (
                    <button className="smoky-btn" onClick={uploadImage}>
                        Upload
                    </button>
                ) : (
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
                )}
            </div>
        </div>
    );
};

export default UploadPhoto;