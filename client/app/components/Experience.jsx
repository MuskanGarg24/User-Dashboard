"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../../public/oru_logo.png";
import axios from 'axios';

const Experience = () => {
    const initialExperience = {
        years: "7",
        company: "i",
        role: "i"
    };

    const [experiences, setExperiences] = useState([]);
    const [editedExperienceIndex, setEditedExperienceIndex] = useState("");

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;

    useEffect(() => {
        // Fetch user's experience details information here using axios or fetch
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user; // Update this based on your API response structure
                setExperiences(userData.experience || []); // Populate experiences state with fetched data
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleEditClick = (index) => {
        if (index === editedExperienceIndex) {
            setEditedExperienceIndex(-1);
        } else {
            setEditedExperienceIndex(index);
        }
    }
    const handleCancelClick = () => {
        setEditedExperienceIndex(-1);
    }

    const handleInputChange = (event, property, index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][property] = event.target.value;
        setExperiences(updatedExperiences);
    }

    return (
        <div>
            {experiences.map((experience, index) => (
                <div key={index} className="mb-2 p-5 rounded-lg">
                    <div className="flex justify-between mb-5">
                        <div>
                            <h1 className="text-lg">Experience</h1>
                        </div>
                        <div>
                            {editedExperienceIndex === index ? (
                                <>
                                    <button className="smoky-btn" onClick={() => handleEditClick(index)}>Save</button>
                                    <button className="smoky-btn" onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <button className="smoky-btn" onClick={() => handleEditClick(index)}>Edit</button>
                            )}
                        </div>
                    </div>
                    <div className="mt-3 border-2 border-borderColor rounded-xl px-5 py-4 text-center md:text-left md:flex md:space-x-5">
                        <div>
                            <p>
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={ experience.start + "-" + experience.end}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'years', index)}
                                    />
                                ) : (
                                    experience.start + "-" + experience.end
                                )}
                            </p>
                            <p className="text-[#1F1F1FB2]">
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={experience.company}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'company', index)}
                                    />
                                ) : (
                                    experience.company
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={experience.role}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'role', index)}
                                    />
                                ) : (
                                    experience.role
                                )}
                            </p>
                            <p>
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={experience.job_type}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'role', index)}
                                    />
                                ) : (
                                    experience.job_type
                                )}
                            </p>
                        </div>
                        <div className="flex justify-center mt-2 md:block md:mt-0">
                            <Image src={Logo} alt="logo" className="w-16" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;

