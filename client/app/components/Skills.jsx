"use client"
import React, { useState } from 'react';

const Skills = () => {
    const [editMode, setEditMode] = useState(false);
    const [skills, setSkills] = useState(['NextJS', 'Typescript']);
    const [editedSkills, setEditedSkills] = useState([...skills]);
    const [newSkill, setNewSkill] = useState('');

    const handleEdit = () => {
        setEditMode(true);
        setEditedSkills([...skills]);
    };

    const handleSave = () => {
        setEditMode(false);
        setSkills([...editedSkills]);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const handleEditSkill = (index, value) => {
        const updatedSkills = [...editedSkills];
        updatedSkills[index] = value;
        setEditedSkills(updatedSkills);
    };

    const handleChange = (index, event) => {
        handleEditSkill(index, event.target.value);
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setEditedSkills([...editedSkills, newSkill]);
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
                                        onChange={(e) => handleChange(index, e)}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                    />
                                </li>
                            ))}
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
