"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Connect = ({ user }) => {

    // State variable to track the connection status
    const [isConnected, setIsConnected] = useState(user.isConnected);

    // Function to toggle the connection status
    const toggleConnection = async () => {
        try {
            // Send a request to update the connection status
            const response = await axios.post(`http://localhost:5000/api/connect/update-connection/${user._id}`, {
                isConnected: !isConnected
            });
            setIsConnected(response.data.isConnected);
        } catch (error) {
            console.error('Error toggling connection:', error);
        }
    };

    return (
        <div className="flex justify-evenly border-2 border-borderColor rounded-xl bg-secondaryColor py-7">
            <div>
                <h1 className="text-lg">{user.username}</h1>
                <p className="mt-2 text-[#1F1F1FB2]">{user.role}</p>
                <p className="text-[#1F1F1FB2]">{user.company}</p>
                <button
                    className={`mt-3 bg-[#BAB6EB] text-[#1F1F1FB2] font-semibold px-2 py-1 rounded-xl ${isConnected ? 'bg-green-500' : ''
                        }`}
                    onClick={toggleConnection}
                >
                    {isConnected ? 'Remove Connection' : 'Connect'}
                </button>
            </div>
            <div>
                <Image src="/user.png" alt="avatar" width={100} height={100} />
            </div>
        </div>
    );
}

export default Connect;

