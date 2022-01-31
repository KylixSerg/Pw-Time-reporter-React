import React from 'react';



export default function Nav() {



    return (
        <nav>
            <a href='/Home'><h3 className='nav-bar-buttons'>PW time reporter</h3></a>

            <ul className='nav-links '>
                <a href='/MyActivities' className='nav-bar-buttons'><li>My Activities</li></a>
                <a href='/' className='nav-bar-buttons'><li>Logout</li></a>

            </ul>
        </nav>
    );
}


