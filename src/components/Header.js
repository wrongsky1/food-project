import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className='blue lighten-2'>
            <div className='nav-wrapper blue lighten-2'>
                <Link to='/' className='brand-logo'>
                    React Shop
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                    <li>
                        <a href='#!' target='_blank' rel='noreferrer'>
                            repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
