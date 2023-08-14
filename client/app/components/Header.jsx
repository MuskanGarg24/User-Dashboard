import React from 'react';

const Header = ({head}) => {
    return (
        <div className="bg-primaryColor text-secondaryColor h-[25vh] md:h-[28vh] rounded-lg">
            <p className="p-3 md:p-5 text-sm md:text-lg">{head}</p>
        </div>
    )
}

export default Header;