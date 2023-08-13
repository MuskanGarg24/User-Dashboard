import React from 'react';

const About = () => {
    return (
        <div className="mb-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">About <span className="text-primaryColor">Muskan</span></h1>
                </div>
                <div>
                    <button className="smoky-btn">Edit</button>
                </div>
            </div>
            <div className="mt-5">
                <p>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    )
}

export default About;