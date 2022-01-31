import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactSession } from 'react-client-session';
import Nav from './Nav';






export default function Home() {
    const navigate = useNavigate();
    const [username, setusername] = useState(ReactSession.get("user"));

    useEffect(() => {
        setusername(ReactSession.get("user"));
    }, [username]);

    function handleAddActivityClick() {
        return navigate('/AddActivity');
    }
    return (
        <>
            <Nav />

            <div>
                <h2> Welcome to the PW Time Reporter, <strong style={{ fontSize: "1.2em" }}>{username}</strong>. </h2>
            </div>
            <div className='Home-buttons'>
                <button onClick={handleAddActivityClick}><h1>Add Activity</h1></button>
                <button ><h1>Request Monthly Report</h1></button>
            </div>
        </>

    );
}
