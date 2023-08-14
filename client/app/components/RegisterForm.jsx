"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import axios from "axios";
import { useRouter } from 'next/navigation';

const RegisterForm = () => {

    // credentials states 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [professional, setProfessional] = useState("");
    const [certificationName, setCertificationName] = useState("");
    const [certificationIssuedBy, setCertificationIssuedBy] = useState("");
    const [experienceRole, setExperienceRole] = useState("");
    const [experienceJobType, setExperienceJobType] = useState("");
    const [experienceCompany, setExperienceCompany] = useState("");
    const [experienceStart, setExperienceStart] = useState("");
    const [experienceEnd, setExperienceEnd] = useState("");
    const [educationInstituteName, setEducationInstituteName] = useState("");
    const [educationDegreeName, setEducationDegreeName] = useState("");
    const [educationStart, setEducationStart] = useState("");
    const [educationEnd, setEducationEnd] = useState("");
    const [educationDescription, setEducationDescription] = useState("");
    const [error, setError] = useState("");

    // router
    const router = useRouter();

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }
        const res = {
            name,
            email,
            password,
            phone,
            about,
            skills,
            professional,
            certificationName,
            certificationIssuedBy,
            experienceRole,
            experienceJobType,
            experienceCompany,
            experienceStart,
            experienceEnd,
            educationInstituteName,
            educationDegreeName,
            educationStart,
            educationEnd,
            educationDescription,
        };
        // password validation 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!password.match(passwordRegex)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.");
            return;
        }
        // if password validates, signup
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", res);
            const userId = response.data.data.userId;
            router.push(`/verify?userId=${userId}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-secondaryColor w-[90vw] mt-16 m-auto p-9 rounded-2xl sm:w-[50vw] xl:w-[30vw]">
            <h1 className="text-center text-2xl mb-7">Create New Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
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
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Phone</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your Phone"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">About</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your About"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setAbout(e.target.value) }}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Skills</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your skills"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setSkills(e.target.value) }}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Professional</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your Professional"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => { setProfessional(e.target.value) }}
                    />
                </div>
                {/* New input fields for certifications */}
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Certification Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Certification Name"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setCertificationName(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Certification Issued By</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Issuing Authority"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setCertificationIssuedBy(e.target.value)}
                    />
                </div>
                {/* New input fields for experience */}
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Experience Role</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Experience Role"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setExperienceRole(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Job Type</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Job Type"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setExperienceJobType(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Company</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Company"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setExperienceCompany(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Start</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Start Date"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setExperienceStart(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">End</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter End Date"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setExperienceEnd(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Insitute Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Institute Name"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setEducationInstituteName(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Degree Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Education degree name"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setEducationDegreeName(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Start</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Education Start"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setEducationStart(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">End</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Education End"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setEducationEnd(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-2 m-auto">
                    <label className="label">
                        <span className="label-text text-md font-semibold">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Education Description"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setEducationDescription(e.target.value)}
                    />
                </div>
                <div className="text-center">
                    <button className="bg-primaryColor text-secondaryColor w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Sign Up</button>
                </div>
            </form>
            {error && (
                <div>
                    <p className="mt-5 text-center text-md text-redColor">{error}</p>
                </div>
            )}
            <div className="mt-5 text-center">
                <Link href={`/`}>Already have an account? <span className="font-bold">Login</span></Link>
            </div>
        </div>
    )
}

export default RegisterForm;