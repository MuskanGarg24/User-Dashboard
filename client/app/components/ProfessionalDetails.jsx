"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Star from '../../public/stars.png';
import axios from 'axios';
import { userId } from '../utils/userId';

const ProfessionalDetails = () => {

    // State to manage edit mode and professional text
    const [editMode, setEditMode] = useState(false);
    const [professionalText, setProfessionalText] = useState('');

    // Fetch user's professional details from the server
    useEffect(() => {
        axios.get(`https://oruphones-ejg9.onrender.com/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setProfessionalText(userData.professional || '');
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]);


    // Function to enable editing mode
    const handleEdit = () => {
        setEditMode(true);
    };


    // Function to save edited professional details
    const handleSave = async () => {
        try {
            await axios.put(`https://oruphones-ejg9.onrender.com/api/user/update/${userId}`, { professional: professionalText });
            setEditMode(false);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };


    // Function to cancel editing mode
    const handleCancel = () => {
        setEditMode(false);
    };


    // Function to handle text input changes
    const handleChange = (event) => {
        setProfessionalText(event.target.value);
    };


    return (
        <div className="mb-5 mt-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="text-lg">Professional Details</h1>
                    <p className="mt-1 text-[#1F1F1FB2]">
                        {editMode ? (
                            <textarea
                                value={professionalText}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-full"
                                rows="4"
                            />
                        ) : (
                            professionalText
                        )}
                    </p>
                </div>
                <div>
                    <Image src={Star} alt="star" className="w-20 hidden sm:block" />
                    {editMode ? (
                        <div>
                            <button className="smoky-btn mt-2 mr-1" onClick={handleSave}>
                                Save
                            </button>
                            <button className="smoky-btn mt-2" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button className="smoky-btn mt-2" onClick={handleEdit}>
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalDetails;
