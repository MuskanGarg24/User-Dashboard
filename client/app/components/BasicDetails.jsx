"use client"
import React, { useState } from 'react';

const BasicDetails = () => {
    const fields = [
        { id: 'name', label: 'Your Name', value: 'Muskan Garg' },
        { id: 'email', label: 'Email', value: 'xyz@gmail.com' },
        { id: 'phoneNumber', label: 'Phone Number', value: '+91 9874562130' }
    ];

    const [editStates, setEditStates] = useState({
        name: false,
        email: false,
        phoneNumber: false
    });

    const [values, setValues] = useState({
        name: 'Muskan Garg',
        email: 'xyz@gmail.com',
        phoneNumber: '+91 9874562130'
    });

    const handleEdit = (fieldId) => {
        setEditStates({ ...editStates, [fieldId]: true });
    };

    const handleSave = (fieldId) => {
        setEditStates({ ...editStates, [fieldId]: false });
    };

    const handleCancel = (fieldId) => {
        setEditStates({ ...editStates, [fieldId]: false });
    };

    const handleChange = (fieldId, event) => {
        setValues({ ...values, [fieldId]: event.target.value });
    };

    return (
        <div className="mb-5 border-2 border-borderColor p-5 pb-2 rounded-lg">
            {fields.map((field) => (
                <div key={field.id} className="mb-5">
                    <div>
                        <p className="text-md text-[#1F1F1FB2]">{field.label}</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            {editStates[field.id] ? (
                                <input
                                    type="text"
                                    value={values[field.id]}
                                    onChange={(e) => handleChange(field.id, e)}
                                    className="mt-1 text-md sm:w-auto sm:mr-0 w-[140px] mr-2 p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                />
                            ) : (
                                <p className="mt-1 text-md">{values[field.id]}</p>
                            )}
                        </div>
                        <div>
                            {editStates[field.id] ? (
                                <div className="flex mt-1 sm:mt-0">
                                    <button className="smoky-btn w-auto mr-1" onClick={() => handleSave(field.id)}>Save</button>
                                    <button className="smoky-btn w-auto" onClick={() => handleCancel(field.id)}>Cancel</button>
                                </div>
                            ) : (
                                <button className="smoky-btn" onClick={() => handleEdit(field.id)}>Edit</button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BasicDetails;
