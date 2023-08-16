"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Avatar from '../../public/user.png';
import axios from 'axios';
import { userId } from '../utils/userId';

const UploadPhoto = () => {

    // Selected image for uploading
    const [selectedImage, setSelectedImage] = useState(null);

    /// Uploading indicator
    const [uploading, setUploading] = useState(false);

    // Reference to the file input element
    const fileInputRef = useRef(null);

    // User's current profile image
    const [userImage, setUserImage] = useState(null);

    // Fetch user's current profile image from the server
    useEffect(() => {
        fetchUserImage();
    }, []);

    const fetchUserImage = async () => {
        try {
            const response = await axios.get(`https://oruphones-ejg9.onrender.com/api/user/${userId}`);
            const userData = response.data.user;
            const userImageUrl = userData.image.url;
            setUserImage(userImageUrl);
        } catch (error) {
            console.error('Error fetching user image:', error);
        }
    };


    // Handle changes to the selected image for upload
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        transformFile(selectedFile);
    };


    // Transform the selected file into a data URL
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


    // Upload the selected image to the server
    const uploadImage = async () => {
        try {
            setUploading(true);
            const response = await axios.post(`https://oruphones-ejg9.onrender.com/api/user/uploads/${userId}`, {
                image: selectedImage,
            });
            setUploading(false);
            setSelectedImage(null);
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