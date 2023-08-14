"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Star from '../../public/stars.png';

const ProfessionalDetails = () => {
    const [editMode, setEditMode] = useState(false);
    const [professionalText, setProfessionalText] = useState(
        'This are the professional details shown to users in the app.'
    );

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = () => {
        setEditMode(false);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

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
