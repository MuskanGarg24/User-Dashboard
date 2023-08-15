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
        fetchEducationDetails();
    }, []);

    const fetchEducationDetails = () => {
        axios
            .get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                const educationDetails = userData.education[0] || {};
                setEditedContent(educationDetails);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        fetchEducationDetails(); // Reset to original data on cancel
    };

    const handleSave = () => {
        setIsEditing(false);

        // Send updated educationDetails to the server
        axios
            .put(`http://localhost:5000/api/user/update/${userId}`, {
                education: [editedContent],
            })
            .then(response => {
                console.log('User data updated:', response.data);
            })
            .catch(error => {
                console.error('Error updating user data:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedContent(prevDetails => ({
            ...prevDetails,
            [name]: value,
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
                            name="institute_name"
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
                                name="years"
                                value={editedContent.years}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-24"
                            />
                        ) : (
                            <p>{editedContent.years}</p>
                        )}
                    </div>
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="degree_name"
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
