"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Connect from '@/app/components/Connect';
import axios from 'axios';

const ConnectionsPage = () => {

    // State for connected users
    const [connectedUsers, setConnectedUsers] = useState([]);

    // State for potential connections
    const [potentialConnections, setPotentialConnections] = useState([]);


    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);


    // Fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://oruphones-ejg9.onrender.com/api/connect/get-users');
            const users = response.data;

            // Separate connected users and potential connections
            const connected = users.filter(user => user.isConnected);
            const potential = users.filter(user => !user.isConnected);

            // Update state with the fetched data
            setConnectedUsers(connected);
            setPotentialConnections(potential);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="relative">
            <Header head="My Connections" />
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9">
                {connectedUsers.map(user => (
                    <Connect key={user._id} user={user} connected="Remove Connection" />
                ))}
            </div>
            <div className="mt-14">
                <h1 className="text-2xl">People you can also connect</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9 mb-20">
                    {potentialConnections.map(user => (
                        <Connect key={user._id} user={user} connected="Connect" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ConnectionsPage;

