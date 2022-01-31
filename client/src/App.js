import React from 'react';
import './App.css';
import MyActivities from './Components/MyActivities';
import AddActivity from './Components/AddActivity';
import Home from './Components/Home'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom';




function App() {
    return (

        <div className='App'>

            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/MyActivities" element={<MyActivities />} />
                <Route path="/AddActivity" element={<AddActivity />} />
            </Routes>
        </div>




    )
}




export default App;

