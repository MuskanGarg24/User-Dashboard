"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {

    // State for storing user ID
    const [userId, setUserId] = useState("");

    // State for storing OTP input
    const [otp, setOTP] = useState("");

    // State for storing error messages
    const [error, setError] = useState("");

    const router = useRouter();

    // Fetch and set the user ID from the query parameter when component mounts
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const userIdParam = queryParams.get('userId');
        if (userIdParam) {
            setUserId(userIdParam);
        }
    }, []);


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://oruphones-ejg9.onrender.com/api/auth/verifyOTP/", { userId, otp });
            const verified = response.data.status;
            if (verified === "VERIFIED") {
                router.push('/'); // Redirect to the homepage if OTP is verified
            }
            else {
                setError("Incorrect OTP entered")
            }
        } catch (error) {
            setError("Some error occurred in your verification. Please try again later")
        }
    }

    return (
        <div className="bg-secondaryColor w-[90vw] mt-24 m-auto p-9 rounded-2xl sm:w-[50vw] xl:w-[30vw]">
            <h1 className="text-center text-2xl mb-3">Enter 4-Digit OTP</h1>
            <p className="text-center">OTP has been sent to your Email Address</p>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mt-7 m-auto">
                    <input
                        type="text"
                        placeholder="Enter your OTP here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setOTP(e.target.value) }}
                    />
                </div>
                <div className="text-center">
                    <button className="bg-primaryColor text-secondaryColor w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Verify</button>
                </div>
            </form>
            {error && (
                <div>
                    <p className="mt-5 text-center text-md text-redColor">{error}</p>
                </div>
            )}
        </div>
    );
};

export default Page;
