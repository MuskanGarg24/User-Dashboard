import React from 'react';
import Link from 'next/link';

const LoginForm = () => {
    return (
        <div className="bg-secondaryColor w-[90vw] mt-16 m-auto p-9 rounded-2xl sm:w-[50vw] xl:w-[30vw]">
            <h1 className="text-center text-2xl mb-7">Login</h1>
            <form>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Email Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="input input-bordered w-full max-w-xs"
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
                    />
                </div>
                <div className="text-center">
                    <button className="bg-primaryColor text-secondaryColor w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Login</button>
                </div>
            </form>
            <div>
                <p className="mt-5 text-center text-md text-redColor">This is Error</p>
            </div>
            <div className="mt-5 text-center">
                <Link href={`/register`}>Don't have an account? <span className="font-bold">Sign Up</span></Link>
            </div>
        </div>
    )
}

export default LoginForm;