"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthChecker = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const userData = sessionStorage.getItem('userData');
        if (userData) {
            router.replace('/dashboard');
        }
    }, [router]);
    return children;
};

export default AuthChecker;
