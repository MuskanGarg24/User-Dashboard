"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userId } from '../utils/userId';

const About = () => {

    // State variables for controlling edit mode and about text
    const [editMode, setEditMode] = useState(false);
    const [aboutText, setAboutText] = useState('');

    // Effect hook that fetches user data from the server when the component mounts or userId changes
    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setAboutText(userData.about || '');
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]);

    // Function to enable edit mode
    const handleEdit = () => {
        setEditMode(true);
    };

    // Function to save changes made in edit mode
    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/api/user/update/${userId}`, { about: aboutText });
            setEditMode(false);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    // Function to cancel edit mode
    const handleCancel = () => {
        setEditMode(false);
    };

    // Function to handle changes in the textarea during edit mode
    const handleChange = (event) => {
        setAboutText(event.target.value);
    };

    return (
        <div className="mb-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">
                        About <span className="text-primaryColor">Muskan</span>
                    </h1>
                </div>
                <div>
                    {editMode ? (
                        <div className="flex">
                            <button className="smoky-btn mr-1" onClick={handleSave}>
                                Save
                            </button>
                            <button className="smoky-btn" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button className="smoky-btn" onClick={handleEdit}>
                            Edit
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-5">
                {editMode ? (
                    <textarea
                        value={aboutText}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full rounded-md border-2 border-borderColor focus:outline-borderColor"
                        rows="5"
                    />
                ) : (
                    <p>{aboutText}</p>
                )}
            </div>
        </div>
    );
};

export default About;
