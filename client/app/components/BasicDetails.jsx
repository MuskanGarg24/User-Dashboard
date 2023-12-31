"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userId } from '../utils/userId';

const BasicDetails = () => {

    // List of fields to display and edit
    const fields = [
        { id: 'name', label: 'Your Name' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone Number' }
    ];

    // State variables for controlling edit states and field values
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

    // Fetch user data from the server when the component mounts or userId changes
    useEffect(() => {
        axios.get(`https://oruphones-ejg9.onrender.com/api/user/${userId}`)
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
    }, [userId]);


    // Function to enable edit mode for a specific field
    const handleEdit = (fieldId) => {
        setEditStates({ ...editStates, [fieldId]: true });
    };


    // Function to save changes made in edit mode for a specific field
    const handleSave = async (fieldId) => {
        try {
            // Prepare updated data for the specific field
            const updatedData = { [fieldId]: values[fieldId] };
            // Send updated data to the server
            await axios.put(`https://oruphones-ejg9.onrender.com/api/user/update/${userId}`, updatedData);
            // Disable edit mode for the specific field
            setEditStates({ ...editStates, [fieldId]: false });
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    // Function to cancel edit mode for a specific field
    const handleCancel = (fieldId) => {
        setEditStates({ ...editStates, [fieldId]: false });
    };

    // Function to handle changes in the input during edit mode
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
