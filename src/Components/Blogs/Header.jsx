import React from 'react';

const Header = () => {
    return (
        <div className='header d-flex justify-content-between '>
            <div className=''>
                <h2 className='title'>Knowledge Cafe</h2>
            </div>
            <div className='w-0 mx-0 px-0'>
                <img className=' img w-25 h-100 rounded-circle' src="https://pokemonrevolution.net/forum/uploads/monthly_2018_04/download.png.b1d9c82499e47c0f8a2911f602c46d26.png" alt="" />
            </div>
        </div>
    );
};

export default Header;