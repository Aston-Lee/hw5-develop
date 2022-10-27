import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css'

export default function RegistrationPage() {
    const navigate = useNavigate();
    const [Input, setInput] = useState({
        username: "",
        displayname: "",
        email: "",
        phone: "",
        birthday: "",
        zipcode: "",
        password1: "",
        password2: "",
        newuser: true,
        followed: []
    });

    const verified = true;

    const handleSubmit = (e) => {
        e.preventDefault();

        //to-do verifcation(2pt)


        console.log(verified)
        if (verified===true){
            // localStorage.setItem("user", JSON.stringify(Input));
            localStorage.setItem("username", Input.username);
            localStorage.setItem("displayname",Input.displayname);
            localStorage.setItem("email", Input.email);
            localStorage.setItem("phone", Input.phone);
            localStorage.setItem("birthday", Input.birthday);
            localStorage.setItem("zipcode", Input.zipcode);
            localStorage.setItem("password1", Input.password1);
            localStorage.setItem("password2", Input.password2);
            localStorage.setItem("newuser", true);
            localStorage.setItem("catchphrase", "happy day");
            localStorage.setItem("followed", "[]");
            localStorage.setItem("userobject", JSON.stringify(Input));
            navigate('/MainPage')
        }
    };

    const [regdatadata, setregdatadata] = useState({
        username: "",
        password: ""
    })

    const { username, password } = regdatadata;

    const changeHandler = e => {
        setregdatadata({ ...regdatadata, [e.target.name]: [e.target.value] });
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(regdatadata);
        console.log(regdatadata.username);
        console.log(regdatadata.password);
    }

    return (
        <div className='RegFormOuter'>
            <form
                className='RegFormContainer'
                method="GET"
                id="RegistrationPage"
                // action to change
                action="formProcessor.html"
                // return validation, should I put the validation into submitHandler?
                // onsubmit="return Validation()"
                // onSubmit={submitHandler}
                onSubmit = {handleSubmit}
                target="_blank"
            >
                <div className='RegFormWrapper'>
                    <h1> Registration Page</h1>
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
                        <p>
                            {" "}
                            display name (optional) <br />{" "}
                            <input
                                type="type"
                                name="displayname"
                                value={Input.displayname}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                id="displayname"
                                placeholder="Aston"
                            />{" "}
                        </p>
                    </div>
                    <div>
                        <p>
                            {" "}
                            email address <br />{" "}
                            <input
                                type="email"
                                name="email"
                                value={Input.email}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                id="emailaddress"
                                placeholder="abc@gmail.com"
                                required=""
                            />{" "}
                        </p>
                    </div>
                    <div>
                        <p>
                            {" "}
                            Phone: <br />{" "}
                            <input
                                type="tel"
                                name="phone"
                                value={Input.phone}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                // onChange={changeHandler}
                                id="phone"
                                placeholder="123-123-1234"
                                required=""
                            />{" "}
                        </p>
                    </div>
                    <div>
                        {/*todo: 18yo vailidation*/}
                        <label htmlFor="dob">date of birth:</label>
                        <br />
                        <input
                            type="date"
                            name='birthday'
                            value={Input.birthday}
                            onChange={(e) =>
                                setInput({
                                    ...Input,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            id="dob"
                            required=""
                        /> <p />
                    </div>
                    <div>
                        {" "}
                        {/*five digits, five digits + dash + 4 digits*/}
                        <p>
                            {" "}
                            zipcode <br />{" "}
                            <input
                                type="type"
                                name="zipcode"
                                value={Input.zipcode}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                id="zipcode"
                                placeholder={77005}
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
                        <p>
                            {" "}
                            password confirmation <br />{" "}
                            <input
                                type="password"
                                name="password2"
                                value={Input.password2}
                                onChange={(e) =>
                                    setInput({
                                        ...Input,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                id="password2"
                                defaultValue=""
                                placeholder="confirm password"
                                required=""
                            />{" "}
                        </p>
                    </div>
                    <div>
                        <input className='Button' type="submit" defaultValue="submit" />
                    </div>
                    <div className='register'>
                        <button className='Button' type="reset">Clear</button>
                    </div>
                    <input
                        type="hidden"
                        name="timestamp"
                        id="timestamp"
                        defaultValue="somevalue"
                    />
                </div>
                <div className='register'>
                        <button className='Button' onClick={() => navigate('/')}>Login?</button>
                </div>
            </form>
        </div>
    )
}
