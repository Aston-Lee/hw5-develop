import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/topbar'
import { users } from '../users'
import './ProfilePage.css'

export default function ProfilePage() {

    function validation() {

        var phone = document.getElementById('phone').value;
        var zipcode = document.getElementById('zipcode').value;
        var password1 = document.getElementById('password1').value;
        var password2 = document.getElementById('password2').value;


        var isValidPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
        if (phone & !isValidPhone) {
            alert("Phone format is xxx-xxx-xxxx")
            return false;
        }

        var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
        if (zipcode & !isValidZip) {
            alert("Zip code format is 5 digits or 5 digits + dash + 4 digits")
            return false;
        }

        if (password1 || password2) {
            if (password1 != password2) {
                alert("Your password not match");
                return false;
            }
        }

        var output = "";
        var displayname = document.forms["Profilepage"]["displayname"].value;
        var emailaddress = document.forms["Profilepage"]["emailaddress"].value;
        // var phone = document.forms["Profilepage"]["phone"].value;
        // var zipcode = document.forms["Profilepage"]["zipcode"].value;
        if (displayname) {
            output += "displayname: " + document.getElementById("displaynamespan").innerHTML + " to " + displayname + "\n";
            document.getElementById("displaynamespan").innerHTML = displayname;
            document.getElementById("displayname").value = ""
            document.getElementById("displayname").setAttribute("placeholder", displayname)
        }
        if (emailaddress) {
            output += "email address: " + document.getElementById("emailaddressspan").innerHTML + " to " + emailaddress + "\n";
            document.getElementById("emailaddressspan").innerHTML = emailaddress;
            document.getElementById("emailaddress").value = ""
            document.getElementById("emailaddress").setAttribute("placeholder", emailaddress)
        }
        if (zipcode) {
            output += "zipcode: " + document.getElementById("zipcodespan").innerHTML + " to " + zipcode + "\n";
            document.getElementById("zipcodespan").innerHTML = zipcode;
            document.getElementById("zipcode").value = ""
            document.getElementById("zipcode").setAttribute("placeholder", zipcode)
        }
        if (phone) {
            output += "phone: " + document.getElementById("phonespan").innerHTML + " to " + phone + "\n";
            document.getElementById("phonespan").innerHTML = phone;
            document.getElementById("phone").value = ""
            document.getElementById("phone").setAttribute("placeholder", phone)
        }
        // window.alert(output + "profile has been updated")

        return false // prevent page to refresh
    }

    const [Input, setInput] = useState({
        username: localStorage.getItem("username"),
        displayname: localStorage.getItem("displayname"),
        email: localStorage.getItem("email"),
        phone: localStorage.getItem("phone"),
        birthday: localStorage.getItem("birthday"),
        zipcode: localStorage.getItem("zipcode"),
        password1: localStorage.getItem("password1"),
        password2: localStorage.getItem("password2"),
        newuser: localStorage.getItem("newuser"),
    });

    const verified = true
    const handleSubmit = (e) => {
        e.preventDefault();

        //to-do verifcation(2pt)


        console.log(verified)
        if (verified === true) {
            // localStorage.setItem("user", JSON.stringify(Input));
            // inputRef.current.value
            localStorage.setItem("username", usernameinputRef.current.value || Input.username);
            localStorage.setItem("displayname", displayinputRef.current.value || Input.displayname);
            localStorage.setItem("email", emailinputRef.current.value || Input.email);
            localStorage.setItem("phone", phoneinputRef.current.value || Input.phone);
            localStorage.setItem("birthday", birthdayinputRef.current.value || Input.birthday);
            localStorage.setItem("zipcode", zipcodeinputRef.current.value || Input.zipcode);
            localStorage.setItem("password1", password1inputRef.current.value || Input.password1);
            localStorage.setItem("password2", password2inputRef.current.value || Input.password2);

            usernameinputRef.current.value = null;
            displayinputRef.current.value = null
            emailinputRef.current.value = null
            phoneinputRef.current.value = null
            birthdayinputRef.current.value = null
            zipcodeinputRef.current.value = null
            password1inputRef.current.value = null
            password2inputRef.current.value = null

            // navigate('/MainPage')
        }
    };
    const usernameinputRef = useRef(null);
    const displayinputRef = useRef(null);
    const emailinputRef = useRef(null);
    const phoneinputRef = useRef(null);
    const birthdayinputRef = useRef(null);
    const zipcodeinputRef = useRef(null);
    const password1inputRef = useRef(null);
    const password2inputRef = useRef(null);


    const navigate = useNavigate()


    const uploadinputRef = useRef(null);

    const uploadhandleClick = () => {
        uploadinputRef.current.click();
    };

    const uploadhandleFileChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        event.target.value = null;
    }

    return (
        <div className='RegFormOuter'>
            <form className='RegFormContainer' id="Profilepage" onSubmit={handleSubmit} >
                <h1> Profile Update</h1>
                <input
                    style={{ display: 'none' }}
                    ref={uploadinputRef}
                    type="file"
                    onChange={uploadhandleFileChange}
                />
                <div>
                    <img className='profilePicture' src={users.filter(user => user.username === localStorage.getItem("username"))[0].profilePicture} />
                </div>
                <button className='PostButton' onClick={uploadhandleClick}>
                    {/* <BiImageAdd className='videoPost'/> */}
                    Change Profile Pic</button>

                <div>
                    <p> username: <input type="type" name="username"
                        ref={usernameinputRef}
                        onChange={(e) =>
                            setInput({
                                ...Input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        id="username" placeholder={Input.username} />
                        <span id="displaynamespan" />
                    </p>
                </div>
                {/* <div>
                    <p> display name: <input ref={displayinputRef} type="type" name="displayname" id="displayname" placeholder={localStorage.getItem("displayname")} />
                        <span id="displaynamespan" />
                    </p>
                </div> */}
                <div>
                    <p> email address: <input type="email"
                        ref={emailinputRef}
                        name="emailaddress" id="emailaddress" placeholder={localStorage.getItem("email")} />
                        <span id="emailaddressspan"></span>
                    </p>
                </div>
                <div>
                    <p> phone number: <input type="tel"
                        ref={phoneinputRef}
                        name="phone" id="phone"
                        onChange={(e) =>
                            setInput({
                                ...Input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        placeholder={localStorage.getItem("phone")} />
                        <span id="phonespan" />
                    </p>
                </div>
                {/* <div>

                    <label htmlFor="dob">date of birth:</label>

                    <input
                        type="date"
                        name='birthday'
                        // value={Input.birthday}
                        ref={birthdayinputRef}
                        onChange={(e) =>
                            setInput({
                                ...Input,
                                [e.target.name]: e.target.value,
                            })
                        }
                        id="dob"
                        required=""
                    /> <p />
                </div> */}
                <div> {/*five digits, five digits + dash + 4 digits*/}
                    <p> zipcode  <input type="type" ref={zipcodeinputRef}
                        name="zipcode" id="zipcode" placeholder={localStorage.getItem("zipcode")} />
                        <span id="zipcodespan" />
                    </p>
                </div>
                <div>{/*todo: password vailidation*/}
                    <p> password  <input type="password" ref={password1inputRef} name="password1" id="password1" placeholder="********" /> </p>
                </div>
                <div>
                    <p> password confirmation  <input type="password" ref={password2inputRef} name="password2" id="password2" placeholder="confirm password" /> </p>
                </div>
                <div>
                    <input className='Button' type="submit" defaultValue="submit" /> <br /><br />
                    {/* <a href="./main.html">Return to Main Page</a> */}
                    {/* <button className='Button' onclick="window.location='./main.html'">Return to Main Page</button> <br /> */}
                </div>
                <input type="hidden" name="timestamp" id="timestamp" defaultValue="somevalue" />
                <div >
                    <button className='Button' onClick={() => navigate('/MainPage')}>Return to Main Page</button>
                </div>
            </form>
        </div>
    )
}
