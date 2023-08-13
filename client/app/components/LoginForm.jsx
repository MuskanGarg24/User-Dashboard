"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    // credentials states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // router
    const router = useRouter();

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields are necessary");
            return;
        }
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            sessionStorage.setItem('userData', JSON.stringify(response.data));
            router.push("/user/profile");
        }
        catch (error) {
            setError("Enter correct credentials")
            console.log(error);
        }
    }

    return (
        <div className="bg-secondaryColor w-[90vw] mt-16 m-auto p-9 rounded-2xl sm:w-[50vw] xl:w-[30vw]">
            <h1 className="text-center text-2xl mb-7">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Email Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="text-center">
                    <button className="bg-primaryColor text-secondaryColor w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Login</button>
                </div>
            </form>
            {error && (
                <div>
                    <p className="mt-5 text-center text-md text-redColor">{error}</p>
                </div>
            )}
            <div className="mt-5 text-center">
                <Link href={`/register`}>Don't have an account? <span className="font-bold">Sign Up</span></Link>
            </div>
        </div>
    )
}

export default LoginForm;