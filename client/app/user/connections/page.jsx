import Connect from '@/app/components/Connect';
import Header from '@/app/components/Header';
import React from 'react';

const page = () => {
    return (
        <div className="relative">
            <Header head="My Connections" />
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9">
                <Connect connected="Remove Connection" />
                <Connect connected="Remove Connection" />
            </div>
            <div className="mt-14">
                <h1 className="text-2xl">People you can also connect</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9 mb-20">
                    <Connect connected="Connect" />
                </div>
            </div>
        </div>
    )
}

export default page;