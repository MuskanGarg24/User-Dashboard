import React from 'react';

const page = () => {
    return (
        <div className="bg-secondaryColor w-[90vw] mt-24 m-auto p-9 rounded-2xl sm:w-[50vw] xl:w-[30vw]">
            <h1 className="text-center text-2xl mb-3">Enter 4-Digit OTP</h1>
            <p className="text-center">OTP has been sent to your Email Address</p>
            <form>
                <div className="form-control w-full max-w-xs mt-7 m-auto">
                    <input
                        type="text"
                        placeholder="Enter your OTP here"
                        className="input input-bordered w-full max-w-xs"
                    />
                </div>
                <div className="text-center">
                    <button className="bg-primaryColor text-secondaryColor w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Verify</button>
                </div>
            </form>
            <div>
                <p className="mt-5 text-center text-md text-redColor">This is Error</p>
            </div>
        </div>
    )
}

export default page