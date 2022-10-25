// import { paperClasses } from '@mui/material';
import React, { useState } from 'react';
import { Users, Posts } from '../Data';

import RegistrationPage from './RegistrationPage';

import {
    // BrowserRouter,
    Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { Switch } from '@mui/material';

import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
    const [logindata, setlogindata] = useState({
        username: "",
        password: ""
    })

    const { username, password } = logindata;

    const changeHandler = e => {
        setlogindata({ ...logindata, [e.target.name]: [e.target.value] });
    }


    const submitHandler = e => {
        e.preventDefault();
        console.log(logindata);
        console.log(logindata.username);
        console.log(logindata.password);

        const userarray = Users.map(({ username }) => username)
        const passwordarray = Users.map(({ password }) => password)
        for (let i = 0; i < userarray.length; i++) {
            console.log(userarray[i], passwordarray[i])
            if (logindata.username == userarray[i] && logindata.password == passwordarray[i]) {
                console.log("found")
                // prepare to swap to main page

            }
        }
        // show not found and encourage to go to register page
    }

    //  do change up

    const navigate = useNavigate();

    // for (let i = 0; i < userarray.length; i++) {
    //     console.log(userarray[i], passwordarray[i])
    //     if (logindata.username == userarray[i] && logindata.password == passwordarray[i] ) {
    //         console.log("found")
    //         break
    //     }
    // }
    return (
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <input type="text" name="username" value={username} onChange={changeHandler} /><br />
                    <input type="password" name="password" value={password} onChange={changeHandler} /><br />
                    <input type="submit" name="submit" />
                </form>
                <button onClick={() => navigate('../RegistrationPage')} > Register</button>
                <button onClick={() => navigate('../MainPage')} > MainPage</button>

                {/* <BrowserRouter>
                    <Routes>
                        <Route path="RegistrationPage" element={<RegistrationPage />}>
                        </Route>
                    </Routes>
                </BrowserRouter> */}


            </center>
        </div>
        
    );
}

