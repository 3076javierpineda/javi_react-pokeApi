import React from 'react';
import Logo from '../Image/logo.png';
import poke from '../Image/poke.png';

const Header = () => {

    return (
        <div className='assetLogo'>
            <img src={Logo} alt='logo' className='logoImg'/>
            <img src={poke} alt='poke' className='pokeImg'/>
        </div>
    );
};

export default Header;




