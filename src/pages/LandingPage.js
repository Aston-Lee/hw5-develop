import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Users, Posts } from '../Data';
import { useEffect } from 'react';
import './LandingPage.css'

import {users} from '../users'

export default function RegistrationPage() {
    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const [Input, setInput] = useState({
        username: "",
        password1: ""
    });

    // fetch json file from path(src/users.json)
    console.log(users)


    // fetch user info from https://jsonplaceholder.typicode.com/users json file   
    // const [users, setUsers] = useState();
    // const getUsersData = async () => {
    //     const response = fetch(
    //         '../users.json'
    //     ).then((response) => response.json());
    //     setUsers(response);
    // };

    // useEffect(() => {
    //     getUsersData();
    // }, []);


    // set login state
    const [Login, setLogin] = useState({
        username: "",
        password: ""
    });

    var verified = false;

    
    // const userarray = Users.map(({ username }) => username)
    // const passwordarray = Users.map(({ password }) => password)

    const handleSubmit = (e) => {
        // check if Input.username is in users, let password be any value
        const user = users.find(user => user.username === Input.username && Input.password1 == user.address.street);
        if (user) {
            verified = true;
            // alert("Username already exists");
        } else {
            alert("user not found");
        }

        
        e.preventDefault();
        console.log(Input.username)
        console.log(Input.password1)

        //to-do verifcation(2pt)
        console.log(verified)

        if (verified === true) {
            localStorage.setItem("username", user.username);
            localStorage.setItem("id", user.id)
            localStorage.setItem("email", user.email)
            // localStorage.setItem("address", "street"+ "suite"+ "city"+ "zipcode")
            localStorage.setItem("phone", user.phone)
            localStorage.setItem("address", user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode)
            localStorage.setItem("website", user.website)
            localStorage.setItem("catchPhrase", user.company.catchPhrase)
            localStorage.setItem("newuser", false)
            localStorage.setItem("followed", user.followed)

            // localStorage.setItem("userobject", JSON.stringify(user))

            //using redux to store user info
            // const action = { type: 'LOGIN', payload: user };
            // dispatch(action);    
            // console.log(action.payload)
            // console.log(action.payload.username)
            // console.log(action.payload.id)
            // console.log(action.payload.email)
            // console.log(action.payload.address)
            // console.log(action.payload.phone)
            // console.log(action.payload.website)
            

            navigate('/MainPage')
        } else {
            window.alert("not registered user or wrong login information")
        }
    };


    return (
        <div className='RegFormOuter'>
            <form
                className='RegFormContainer'
                id="RegistrationPage"
                // action to change
                // return validation, should I put the validation into submitHandler?
                // onsubmit="return Validation()"
                // onSubmit={submitHandler}
                onSubmit={handleSubmit}
                target="_blank"
            >
                <div className='RegFormWrapper'>
                    <h1> Login</h1>
                    <div>
                        <p>
                            {" "}
                            username: <br />{" "}
                            <input
                                type="type"
                                value={Input.username}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                // onChange={changeHandler}
                                name="username"
                                id="username"
                                placeholder="abc123"
                                required=""
                            />{" "}
                        </p>
                    </div>
                    <div>
                        {/*todo: password vailidation*/}
                        <p>
                            {" "}
                            password <br />{" "}
                            <input
                                type="password"
                                name="password1"
                                value={Input.password1}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                id="password1"
                                placeholder="password"
                                defaultValue=""
                                required=""
                            />{" "}
                        </p>
                    </div>
                    <div>
                        <input className='Button' type="submit" defaultValue="submit" />
                    </div>
                    <div className='register'>
                        <button className='Button' onClick={() => navigate2('/RegistrationPage')}>register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
