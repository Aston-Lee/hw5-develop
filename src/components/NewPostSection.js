import { useRef } from 'react';
import './NewPostSection.css'
// import { PermMedia } from "@material-ui/icons"
// import { BiImageAdd } from 'react-icons/bi';

export default function NewPost({userobject, setUserObject, username, posts, setPosts }) {

    const inputRef = useRef(null);

    

    function gerneratePost() {
        var tmpuserid = localStorage.getItem("id");
        console.log(tmpuserid)
        const thisarray = {
            body: inputRef.current.value,
            timestamp: Date.now(),
            userId: parseInt(tmpuserid),
            id: posts.length + 1,
        }
        console.log(thisarray)
        setPosts([thisarray, ...posts])
    }

    function clearPost(){
        inputRef.current.value = ""
    }
    
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
        <div>
            <div className='NewPostContainer' >
                <div className='NewPostWrapper'>
                    <div className='NewPostTop'>
                        <img className='NewPostProfilePic' src={userobject.profilePicture} />
                        {/* <span> Username</span> */}
                        <div className='usernamespan' ><span>{username}</span></div>
                        <input ref={inputRef} type="text" id="message" name="message" placeholder="Share Something new?" className="NewPostInput" />
                    </div>
                    <hr className='NewPostHr' />
                    <div className='NewPostBot'>
                        <div className='Options'>

                            <div>
                                <input
                                    style={{ display: 'none' }}
                                    ref={uploadinputRef}
                                    type="file"
                                    onChange={uploadhandleFileChange}
                                />

                                <button  className='PostButton' onClick={uploadhandleClick}>
                                {/* <BiImageAdd className='videoPost'/> */}
                                    Open file upload box</button>
                            </div>
                        </div>
                        <div className='NewPostBotRight'>
                            <button onClick={gerneratePost} className='PostButton'>Post</button>
                            <button onClick={clearPost} className='PostButton'>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
