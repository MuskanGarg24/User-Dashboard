import React from 'react'

const BasicDetails = () => {
    return (
        <div className="mb-5 border-2 border-borderColor p-5 pb-2 rounded-lg">
            <div className="mb-5">
                <div>
                    <p className="text-md text-[#1F1F1FB2]">Your Name</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="mt-1 text-md">Muskan Garg</p>
                    </div>
                    <div>
                        <button className="smoky-btn">Edit</button>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div>
                    <p className="text-md text-[#1F1F1FB2]">Email</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="mt-1 text-md">xyz@gmail.com</p>
                    </div>
                    <div>
                        <button className="smoky-btn">Edit</button>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div>
                    <p className="text-md text-[#1F1F1FB2]">Phone Number</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="mt-1 text-md">+91 9874562130</p>
                    </div>
                    <div>
                        <button className="smoky-btn">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDetails