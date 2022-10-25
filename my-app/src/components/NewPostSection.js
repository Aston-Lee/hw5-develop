import { useRef } from 'react';
import './NewPostSection.css'
// import { PermMedia } from "@material-ui/icons"
// import { BiImageAdd } from 'react-icons/bi';


export default function NewPost({username, posts, setPosts }) {

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
                        <img className='NewPostProfilePic' src="https://images.squarespace-cdn.com/content/v1/5e59ec62d379cf1bffbb599b/1e4991ed-e574-41e1-b9e2-544fcb4eb1bf/DSC00563.jpg?format=1000w" />
                        {/* <span> Username</span> */}
                        <div><span>{username}</span></div>
                        <input ref={inputRef} type="text" id="message" name="message" placeholder="Share Something new?" className="NewPostInput" />
                    </div>
                    <hr className='NewPostHr' />
                    <div className='NewPostBot'>
                        <div className='Options'>
                            {/* <div className='Option'>
                                <BiImageAdd type="button" onclick="document.getElementById('fileInput').click();" className='videoPost'/>
                                <span className="videoPostText">Photo or Video</span>
                            </div> */}
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
