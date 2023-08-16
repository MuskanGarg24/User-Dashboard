// Import components from specific paths
import About from '@/app/components/About'
import BasicDetails from '@/app/components/BasicDetails'
import Certifications from '@/app/components/Certifications'
import Education from '@/app/components/Education'
import Experience from '@/app/components/Experience'
import Header from '@/app/components/Header'
import ProfessionalDetails from '@/app/components/ProfessionalDetails'
import Skills from '@/app/components/Skills'
import UploadPhoto from '@/app/components/UploadPhoto'
import React from 'react'


const page = () => {
    return (
        <div className="relative">

            {/* Header component */}
            <Header head="My Profile" />

            {/* Main content */}
            <div className="w-[80vw] mt-[-90px] sm:w-[90vw] md:w-[53vw] lg:w-[65vw] xl:w-[72vw] m-auto md:mt-[-80px] bg-secondaryColor rounded-md sm:px-9 px-2 py-7">
                <div className="xl:grid xl:grid-cols-2 xl:gap-20">
                    <div>
                        <UploadPhoto />
                        <BasicDetails />
                        <About />
                        <Skills />
                    </div>
                    <div>
                        <ProfessionalDetails />
                        <Certifications />
                        <Experience />
                        <Education />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page