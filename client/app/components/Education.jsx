"use client"
import React, { useState } from 'react';

const Education = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState({
        institution: "IIT Hyderabad",
        date: "2010 - 2014",
        degree: "Btech",
        description: "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur."
    });

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
                            value={editedContent.institution}
                            onChange={handleChange}
                            className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-32"
                        />
                    ) : (
                        <h1 className="text-lg text-primaryColor">{editedContent.institution}</h1>
                    )}
                </div>
                <div className="flex justify-between mt-2">
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="date"
                                value={editedContent.date}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-24"
                            />
                        ) : (
                            <p>{editedContent.date}</p>
                        )}
                    </div>
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="degree"
                                value={editedContent.degree}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-16"
                            />
                        ) : (
                            <p>{editedContent.degree}</p>
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
