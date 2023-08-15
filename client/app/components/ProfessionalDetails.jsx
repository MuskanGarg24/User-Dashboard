// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Star from '../../public/stars.png';
// import axios from 'axios';

// const ProfessionalDetails = () => {

//     const [editMode, setEditMode] = useState(false);
//     const [professionalText, setProfessionalText] = useState('');

//     const userData = JSON.parse(sessionStorage.getItem('userData'));
//     const userId = userData?._id;

//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/user/${userId}`)
//             .then(response => {
//                 const userData = response.data.user;
//                 setProfessionalText(userData.professional || '');
//             })
//             .catch(error => {
//                 console.error('Error fetching user data:', error);
//             });
//     }, []);

//     const handleEdit = () => {
//         setEditMode(true);
//     };

//     const handleSave = () => {
//         setEditMode(false);
//     };

//     const handleCancel = () => {
//         setEditMode(false);
//     };

//     const handleChange = (event) => {
//         setProfessionalText(event.target.value);
//     };

//     return (
//         <div className="mb-5 mt-5 border-2 border-borderColor p-5 rounded-lg">
//             <div className="sm:flex justify-between">
//                 <div>
//                     <h1 className="text-lg">Professional Details</h1>
//                     <p className="mt-1 text-[#1F1F1FB2]">
//                         {editMode ? (
//                             <textarea
//                                 value={professionalText}
//                                 onChange={handleChange}
//                                 className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-full"
//                                 rows="4"
//                             />
//                         ) : (
//                             professionalText
//                         )}
//                     </p>
//                 </div>
//                 <div>
//                     <Image src={Star} alt="star" className="w-20 hidden sm:block" />
//                     {editMode ? (
//                         <div>
//                             <button className="smoky-btn mt-2 mr-1" onClick={handleSave}>
//                                 Save
//                             </button>
//                             <button className="smoky-btn mt-2" onClick={handleCancel}>
//                                 Cancel
//                             </button>
//                         </div>
//                     ) : (
//                         <button className="smoky-btn mt-2" onClick={handleEdit}>
//                             Edit
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfessionalDetails;

"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Star from '../../public/stars.png';
import axios from 'axios';

const ProfessionalDetails = () => {

    const [editMode, setEditMode] = useState(false);
    const [professionalText, setProfessionalText] = useState('');

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const userId = userData?._id;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/user/${userId}`)
            .then(response => {
                const userData = response.data.user;
                setProfessionalText(userData.professional || '');
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]); // Added userId to the dependency array

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/api/user/update/${userId}`, { professional: professionalText });
            setEditMode(false);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const handleChange = (event) => {
        setProfessionalText(event.target.value);
    };

    return (
        <div className="mb-5 mt-5 border-2 border-borderColor p-5 rounded-lg">
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="text-lg">Professional Details</h1>
                    <p className="mt-1 text-[#1F1F1FB2]">
                        {editMode ? (
                            <textarea
                                value={professionalText}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-full"
                                rows="4"
                            />
                        ) : (
                            professionalText
                        )}
                    </p>
                </div>
                <div>
                    <Image src={Star} alt="star" className="w-20 hidden sm:block" />
                    {editMode ? (
                        <div>
                            <button className="smoky-btn mt-2 mr-1" onClick={handleSave}>
                                Save
                            </button>
                            <button className="smoky-btn mt-2" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button className="smoky-btn mt-2" onClick={handleEdit}>
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalDetails;
