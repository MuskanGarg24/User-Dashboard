"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BasicDetails = () => {
    const fields = [
        { id: 'name', label: 'Your Name' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone Number' }
    ];

    const [editStates, setEditStates] = useState({
        name: false,
        email: false,
        phone: false
    });

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setValues({
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]); // Added userId to the dependency array

    const handleEdit = (fieldId) => {
        setEditStates({ ...editStates, [fieldId]: true });
    };

    const handleSave = async (fieldId) => {
        try {
            const updatedData = { [fieldId]: values[fieldId] };
            await axios.put(`http://localhost:5000/api/user/update/${userId}`, updatedData);
            setEditStates({ ...editStates, [fieldId]: false });
        } catch (error) {
            console.error('Error updating user data:', error);
        }
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
