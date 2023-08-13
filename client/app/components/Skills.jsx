import React from 'react';

const Skills = () => {
    return (
        <div className="mb-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Skills</h1>
                </div>
                <div>
                    <button className="smoky-btn">Edit</button>
                </div>
            </div>
            <div className="mt-5">
                <ul>
                    <li className="mb-3">NextJS</li>
                    <li className="mb-3">Typescript</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;