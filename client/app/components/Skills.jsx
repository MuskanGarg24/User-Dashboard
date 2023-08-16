"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { userId } from '../utils/userId';

const Skills = () => {

    // state variables for edit and skills
    const [editMode, setEditMode] = useState(false);
    const [skills, setSkills] = useState([]);
    const [editedSkills, setEditedSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');


    // Fetch user data from the server when component mounts
    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setSkills(userData.skills || []);
                setEditedSkills(userData.skills ? userData.skills.slice() : []);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);


    // Handle editing of individual skills
    const handleSkillEdit = (event, index) => {
        const updatedSkills = [...editedSkills];
        updatedSkills[index] = event.target.value;
        setEditedSkills(updatedSkills);
    };


    // Enable edit mode and populate editedSkills with existing skills
    const handleEdit = () => {
        setEditMode(true);
        setEditedSkills([...skills]);
    };


    // Save edited skills to the server
    const handleSave = async () => {
        setEditMode(false);
        try {
            await axios.put(`http://localhost:5000/api/user/update/${userId}`, {
                skills: editedSkills,
            });
            setSkills([...editedSkills]);
        } catch (error) {
            console.error('Error updating skills:', error);
        }
    };


    // Cancel editing mode
    const handleCancel = () => {
        setEditMode(false);
    };


    // Add a new skill to the editedSkills state
    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setEditedSkills([...editedSkills, newSkill.trim()]);
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
                            {editedSkills.map((skill, index) => (
                                <li key={index} className="mb-3">
                                    <input
                                        type="text"
                                        value={skill}
                                        onChange={event => handleSkillEdit(event, index)}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                    />
                                </li>
                            ))}
                            <li className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Add new skill"
                                    value={newSkill}
                                    onChange={event => setNewSkill(event.target.value)}
                                    className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                />
                                <button className="smoky-btn sm:ml-4 sm:mt-0 mt-3 ml-0" onClick={handleAddSkill}>
                                    Add Skill
                                </button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index} className="mb-3">
                                {skill}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Skills;
