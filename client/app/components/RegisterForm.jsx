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
    const [experienceYears, setExperienceYears] = useState("");
    const [educationInstituteName, setEducationInstituteName] = useState("");
    const [educationDegreeName, setEducationDegreeName] = useState("");
    const [educationYears, setEducationYears] = useState("");
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
        const skillsArray = skills.split(',').map(skill => skill.trim());
        const res = {
            name,
            email,
            password,
            phone,
            about,
            skills: skillsArray,
            professional,
            certificationName,
            certificationIssuedBy,
            experienceRole,
            experienceJobType,
            experienceCompany,
            experienceYears,
            educationInstituteName,
            educationDegreeName,
            educationYears,
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
        <>
            <div className="bg-primaryColor pt-[80px] pb-[150px] text-center text-secondaryColor">
                <h1 className="text-3xl lg:text-[2.5rem]">Create New Account</h1>
                <p className="mt-5">
                    <Link href={`/`}>Already have an account? Log In</Link>
                </p>
            </div>
            <div className="bg-secondaryColor sm:w-[90vw] xl:w-[70vw] mt-[-100px] mb-28 m-auto px-14 py-16 rounded-3xl">
                <form onSubmit={handleSubmit}>
                    <div className="md:grid md:grid-cols-3 md:gap-5 text-center md:text-left">
                        <div className="col-span-1 mb-5 md:mb-0">
                            <h1 className="text-xl">Personal Information</h1>
                            <p className="mt-1">Use a permanent address where you can receive mail.</p>
                        </div>
                        <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3">
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
                                    type="text"
                                    placeholder="Enter your Phone"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => { setPhone(e.target.value) }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                        <div className="col-span-1">
                            <h1 className="text-xl">Professional Information</h1>
                            <p className="mt-1">Enter your professional details to be displayed on your profile</p>
                        </div>
                        <div className="col-span-2 m-auto mt-3">
                            <div className="form-control md:max-w-xs lg:w-full mb-2">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">About</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Give a brief summary about yourself"
                                    className="input input-bordered py-3 md:w-[42vw]"
                                    onChange={(e) => { setAbout(e.target.value) }}
                                />
                            </div>
                            <div className="col-span-2">
                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text text-md font-semibold">Skills</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your skills separated by commas"
                                        className="input input-bordered md:w-[42vw]"
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text text-md font-semibold">Professional Details</span>
                                    </label>
                                    <textarea
                                        type="text"
                                        placeholder="Enter your Professional Details"
                                        className="input input-bordered md:w-[42vw] py-3"
                                        onChange={(e) => { setProfessional(e.target.value) }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                        <div className="col-span-1">
                            <h1 className="text-xl">Certifications Information</h1>
                            <p className="mt-1">Enter your Latest Certification Information</p>
                        </div>
                        <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3 mt-5">
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
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                        <div className="col-span-1">
                            <h1 className="text-xl">Work Experience</h1>
                            <p className="mt-1">Enter your latest work experience (Job or Internship)</p>
                        </div>
                        <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3 mt-5">
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
                                    placeholder="Enter Company Name"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => setExperienceCompany(e.target.value)}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mb-2 m-auto">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Timeline</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="For e.g 2021 - 2025"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => setExperienceYears(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                        <div className="col-span-1">
                            <h1 className="text-xl">Education</h1>
                            <p className="mt-1">Enter your current Academic Details</p>
                        </div>
                        <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3 mt-5">
                            <div className="form-control w-full max-w-xs mb-2 m-auto">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">University Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your University Name"
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
                                    placeholder="Enter your Degree Name"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => setEducationDegreeName(e.target.value)}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mb-2 m-auto">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Degree Duration</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="For e.g (2021 - 2025)"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => setEducationYears(e.target.value)}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mb-2 m-auto">
                                <label className="label">
                                    <span className="label-text text-md font-semibold">Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Degree Description"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => setEducationDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-9">
                        <button className="bg-primaryColor text-secondaryColor w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Register</button>
                    </div>
                </form>
                {error && (
                    <div>
                        <p className="mt-5 text-center text-md text-redColor">{error}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default RegisterForm;