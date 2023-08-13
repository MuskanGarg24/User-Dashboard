import React from 'react';

const Education = () => {
    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Education</h1>
                </div>
                <div>
                    <button className="smoky-btn">Edit</button>
                </div>
            </div>
            <div className="mt-3 border-2 border-borderColor rounded-xl px-5 py-4">
                <div>
                    <h1 className="text-lg text-primaryColor">IIT Hyderabad</h1>
                </div>
                <div className="flex justify-between mt-2">
                    <div>
                        <p>(2010 - 2014)</p>
                    </div>
                    <div>
                        <p>Btech</p>
                    </div>
                </div>
                <div className="mt-2 text-[#1F1F1FB2]">
                    <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    )
}

export default Education;