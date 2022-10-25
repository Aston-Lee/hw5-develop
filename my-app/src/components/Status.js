import './Status.css'
import { useRef } from 'react';
import { useEffect, useState } from 'react';

export default function Status() {
    const inputRef = useRef(null);
    // inputRef.current.value = "";

    const [message, setmessage] = useState();
    // setmessage(inputRef.current.value)

    function gernerateStatus() {
        setmessage(inputRef.current.value)
    }
    
    // get value from localstorage catchPhrase
    const catchPhrase = localStorage.getItem("catchPhrase");

    return (
        <div className='StatusContainer' >
            <div className='StatusWrapper'>
                <div className='Status'>
                    <div className='StatusLeft'>
                        <span className='StatusTitle'> Status </span>
                    </div>
                    <div className='StatusCenter'>
                        <input ref={inputRef} className='StatusInput' placeholder="    enter your status" />
                    </div>
                    <div className='StatusRight'>
                        <button onClick={gernerateStatus} className='StatusUpdate'> Update</button>
                    </div>

                </div>
                <div className='current-status'>
                    <span > Current Status:        </span>
                    <div className='message'>
                        <span > {message || catchPhrase }  </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
