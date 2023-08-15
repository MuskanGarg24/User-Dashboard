"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Connect from '@/app/components/Connect';
import axios from 'axios';

const ConnectionsPage = () => {
    const [connectedUsers, setConnectedUsers] = useState([]);
    const [potentialConnections, setPotentialConnections] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/connect/get-users');
            const users = response.data;

            const connected = users.filter(user => user.isConnected);
            const potential = users.filter(user => !user.isConnected);

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

