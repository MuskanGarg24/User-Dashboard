"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Education = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState({
        institute_name: '',
        degree_name: '',
        start: '',
        end: '',
        description: '',
    });

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;

    useEffect(() => {
        // Fetch user's education details information here using axios or fetch
        axios
            .get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user; // Update this based on your API response structure
                const educationDetails = userData.education[0] || {};
                setEditedContent(educationDetails); // Populate editedContent state with fetched data
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedContent(prevContent => ({
            ...prevContent,
            [name]: value
        }));
    };

    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Education</h1>
                </div>
                <div>
                    {isEditing ? (
                        <div>
                            <button className="smoky-btn" onClick={handleSave}>Save</button>
                            <button className="smoky-btn" onClick={handleCancel}>Cancel</button>
                        </div>
                    ) : (
                        <button className="smoky-btn" onClick={handleEdit}>Edit</button>
                    )}
                </div>
            </div>
            <div className="mt-3 border-2 border-borderColor rounded-xl px-5 py-4">
                <div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="institution"
                            value={editedContent.institute_name}
                            onChange={handleChange}
                            className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-32"
                        />
                    ) : (
                        <h1 className="text-lg text-primaryColor">{editedContent.institute_name}</h1>
                    )}
                </div>
                <div className="flex justify-between mt-2">
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="date"
                                value={editedContent.start + "-" + editedContent.end}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-24"
                            />
                        ) : (
                            <p>{editedContent.start + "-" + editedContent.end}</p>
                        )}
                    </div>
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="degree"
                                value={editedContent.degree_name}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-16"
                            />
                        ) : (
                            <p>{editedContent.degree_name}</p>
                        )}
                    </div>
                </div>
                <div className="mt-2 text-[#1F1F1FB2]">
                    {isEditing ? (
                        <textarea
                            name="description"
                            value={editedContent.description}
                            onChange={handleChange}
                            className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-full"
                        />
                    ) : (
                        <p>{editedContent.description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Education;
