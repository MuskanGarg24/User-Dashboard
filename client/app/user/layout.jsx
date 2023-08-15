"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/menuIcon.png";
import oruLogo from "../../public/oru_logo.png";
import avatar from "../../public/user.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import AuthChecker from "../components/AuthChecker";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function layout({ children }) {

    // State for toggling sidebar visibility
    const [sidebarVisible, setSidebarVisible] = useState(false);


    // Toggle sidebar visibility on icon click
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };


    // Close sidebar when clicking outside of it
    useEffect(() => {
        const closeSidebarOnOutsideClick = (e) => {
            if (sidebarVisible && !e.target.closest(".sidebar")) {
                setSidebarVisible(false);
            }
        };
        document.addEventListener("click", closeSidebarOnOutsideClick);
        return () => {
            document.removeEventListener("click", closeSidebarOnOutsideClick);
        };
    }, [sidebarVisible]);


    // Get the current pathname
    const pathname = usePathname();

    // Access Next.js router
    const router = useRouter();


    // handle logout
    const handleLogOut = () => {
        sessionStorage.clear();
        router.push('/');
    }


    // state for user image
    const [userImage, setUserImage] = useState(null);


    // User data retrieval from session storage
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;


    // fetch user image function
    const fetchUserImage = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/user/${userId}`);
            const userData = response.data.user;
            const userImageUrl = userData.image.url;
            console.log(userImageUrl);
            setUserImage(userImageUrl);
        } catch (error) {
            console.error('Error fetching user image:', error);
        }
    };

    // get user image when the components mounts
    useEffect(() => {
        fetchUserImage();
    }, []);


    return (
        <AuthChecker >
            <div>

                {/* header starts here */}
                <div className="z-10 bg-secondaryColor flex justify-between items-center py-2 px-4 border-2 border-borderColor sticky top-0 w-full">
                    <div className="flex">
                        <div>
                            <Image alt="menu" src={menuIcon} className="cursor-pointer w-10 object-cover md:hidden" onClick={toggleSidebar} />
                        </div>
                        <div>
                            <Image alt="logo" src={oruLogo} className="cursor-pointer object-cover ml-1 mt-1 md:hidden" />
                        </div>
                    </div>
                    <div className="flex md:mr-7 cursor-pointer">
                        <div className="flex justify-center w-16 md:mr-3">
                            <IoNotificationsOutline size={28} className="mt-2 md:mt-3" />
                        </div>
                        <div className="hidden md:flex md:justify-center border-2 border-borderColor rounded-md py-1 w-full">
                            <div>
                                <img alt="user" src={userImage || avatar} className="w-12 mr-2 h-12 rounded-full object-cover" />
                            </div>
                            <div className="block text-primaryColor mr-7">
                                <p className="text-xs mt-1">Welcome Back,</p>
                                <p className="text-md font-semibold">Muskan Garg</p>
                            </div>
                            <div>
                                <FiChevronDown className="text-primaryColor mt-3" size={25} />
                            </div>
                        </div>
                        <div className="md:hidden">
                            <img alt="user" src={userImage || avatar} className="w-12 h-12 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
                {/* header ends here  */}

                {/* sidebar starts here  */}
                <div
                    className={`${sidebarVisible ? "translate-x-0" : "-translate-x-full"
                        } sidebar md:-translate-x-0 bg-secondaryColor border-2 border-borderColor z-10 fixed top-0 h-screen w-[300px] px-5 cursor-pointer transform transition-transform duration-500 ease-in-out`}
                >
                    <div>
                        <Link href="/user/profile">
                            <div className="text-center text-xl font-bold mt-9">
                                <span className="border-2 border-borderColor px-12 py-3 rounded-lg">Dashboard</span>
                            </div>
                        </Link>
                        <div className="text-primaryColor mt-16">
                            <Link href="/user/profile">
                                <div className="flex mb-3">
                                    <BiChevronRight size={25} className="mt-3" />
                                    <p className={`ml-5 text-lg px-12 py-3 ${pathname == '/user/profile' ? 'border-2 border-primaryColor rounded-lg' : ''}`}>My Profile</p>
                                </div>
                            </Link>
                            <Link href="/user/connections">
                                <div className="flex mb-3">
                                    <BiChevronRight size={25} className="mt-3" />
                                    <p className={`ml-5 text-lg px-7 py-3 ${pathname == '/user/connections' ? 'border-2 border-primaryColor rounded-lg' : ''}`}>My Connections</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-lg font-bold fixed bottom-10 w-[250px]">
                        <p className="text-center" onClick={handleLogOut}>Log Out</p>
                    </div>
                </div>
                <div className="md:ms-[300px] p-5">{children}</div>
            </div>
        </AuthChecker>
    );
}
