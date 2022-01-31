import React from 'react';
import { useNavigate } from 'react-router';
import { ReactSession } from 'react-client-session';





export default function Login() {
    const navigate = useNavigate();




    const handleSubmit = (event) => {
        event.preventDefault();
        ReactSession.set("user", document.getElementById("login-name").value);
        navigate("/Home");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text" id="login-name" required />
            </label>
            <input type="submit" value="Login" />

        </form>
    );

}

