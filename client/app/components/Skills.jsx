"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [editMode, setEditMode] = useState(false);
    const [skills, setSkills] = useState('');
    const [editedSkills, setEditedSkills] = useState('');
    const [newSkill, setNewSkill] = useState('');

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setSkills(userData.skills || '');
                setEditedSkills(userData.skills || '');
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleEdit = () => {
        setEditMode(true);
        setEditedSkills(skills);
    };

    const handleSave = () => {
        setEditMode(false);
        setSkills(editedSkills);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const handleChange = event => {
        setEditedSkills(event.target.value);
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setEditedSkills(editedSkills + (editedSkills ? ', ' : '') + newSkill);
            setNewSkill('');
        }
    };

    return (
        <div className="mb-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Skills</h1>
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
                    <>
                        <ul>
                            <li className="mb-3">
                                <input
                                    type="text"
                                    value={skills}
                                    className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                />
                            </li>

                            <li className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Add new skill"
                                    value={newSkill}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                    className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                />
                            </li>
                        </ul>
                    </>
                ) : (
                    <ul>
                        <li className="mb-3">
                            {skills}
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Skills;
