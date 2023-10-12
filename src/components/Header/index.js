import React from 'react';
import './index.css';
import SearchForm from './SearchForm';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <button className='menuBtn'>
                    <i className="fas fa-bars"></i>
                </button>
                <Link to="/">
                    <div className='logo'>
                        <img src="/images/logo.png" alt="logo" className='logoImage' />
                        <h1 className='logoTitle'>Youtube</h1>
                    </div>
                </Link>
            </div>
            <div className='header-center'>
                 <SearchForm  />
                 <button><i className="fas fa-microphone"></i></button>
             </div>
             <div className='header-end'> 
                <button className='top-util-btn'><i className="fas fa-plus-square"></i></button>
                <button className='top-util-btn'><i className="fas fa-th"></i></button>
                <button className='top-util-btn'><i className="fas fa-bell"></i></button>
             </div>
        </div>
    );
};

export default Header;