"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Badge from "../../public/badge.png";
import axios from 'axios';

const Certifications = () => {

    // State variables for controlling edit mode and certifications
    const [editable, setEditable] = useState(false);
    const [certifications, setCertifications] = useState([]);


    // Retrieve user data from session storage
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;


    // Fetch user data from the server when the component mounts or userId changes
    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setCertifications(userData.certifications || []);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]);


    // Function to enable edit mode
    const handleEditClick = () => {
        setEditable(true);
    };


    // Function to save changes made in edit mode
    const handleSaveClick = async () => {
        try {
            await axios.put(`http://localhost:5000/api/user/update/${userId}`, { certifications });
            setEditable(false);
        } catch (error) {
            console.error('Error updating certifications:', error);
        }
    };


    // Function to cancel edit mode
    const handleCancelClick = () => {
        setEditable(false);
    };

    return (
        <div className="mb-2 p-5 rounded-lg">
            {/* Section header with Edit and Save buttons */}
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Certifications</h1>
                </div>
                <div>
                    {editable ? (
                        <>
                            <button className="smoky-btn" onClick={handleSaveClick}>Save</button>
                            <button className="smoky-btn ml-2" onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <button className="smoky-btn" onClick={handleEditClick}>Edit</button>
                    )}
                </div>
            </div>
            {/* Section containing badge image and certifications */}
            <div className="mt-3 border-2 border-borderColor sm:rounded-[3rem] sm:px-5 sm:py-4 sm:flex sm:space-x-20 px-3 py-2 rounded-xl">
                <div className="sm:block flex justify-center">
                    <Image src={Badge} alt="badge" className="w-42 sm:w-full sm:ml-5 mt-1" />
                </div>
                {/* Map through certifications and render their content */}
                {certifications.map(certification => (
                    <div key={certification.id} className="text-[#1F1F1FB2] text-center sm:text-left">
                        {editable ? (
                            <>
                                <input
                                    type="text"
                                    className="text-lg w-[200px] p-1 rounded-md border-2 border-borderColor focus:outline-borderColor mt-2 sm:mt-0"
                                    value={certification.name}
                                    onChange={(e) => {
                                        const updatedCertifications = certifications.map(cert => {
                                            if (cert.id === certification.id) {
                                                return { ...cert, name: e.target.value };
                                            }
                                            return cert;
                                        });
                                        setCertifications(updatedCertifications);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="mt-2 w-[200px] p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                    value={certification.issued_by}
                                    onChange={(e) => {
                                        const updatedCertifications = certifications.map(cert => {
                                            if (cert.id === certification.id) {
                                                return { ...cert, issued_by: e.target.value };
                                            }
                                            return cert;
                                        });
                                        setCertifications(updatedCertifications);
                                    }}
                                />
                            </>
                        ) : (
                            // Display certification details in non-editable mode
                            <div>
                                <p className="text-lg">{certification.name}</p>
                                <p>{certification.issued_by}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
