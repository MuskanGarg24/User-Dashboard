"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthChecker = ({ children }) => {
    const router = useRouter();
    // Effect hook that runs when the component mounts or router changes
    useEffect(() => {
        const userData = sessionStorage.getItem('userData');
        // Check if user data exists
        if (userData) {
            router.push('/user/profile'); // Redirect to the user's profile page if user data exists
        }
        else{
            router.push('/') // Redirect to the default page if user data doesn't exist
        }
    }, [router]);
     // Return the child components
    return children;
};

// Export the AuthChecker component for use in other parts of the application
export default AuthChecker;
