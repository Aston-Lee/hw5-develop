import React from 'react'
import "./Post.css";
// import { Users } from '../Data';
import { users } from '../users';
import { Comment, Header } from 'semantic-ui-react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Post2({ comments, userobject, setUserObject, post, username, newuser }) {

    // let clientId = "slEQ6gVGydzmTuPMyJVA8nM4Rywehc0lK1Aq6qIUM0U"
    // let endpoint = `https://api.unsplash.com/photos/random?client_id=${clientId}`

    // using cat api
    let endpoint = "https://api.thecatapi.com/v1/images/search?limit=1"

    const [url, setUrl] = useState("")

    const [comment1, setComment1] = useState("")
    const [comment2, setComment2] = useState("")

    useEffect(() => {

        fetch(endpoint)
            .then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                setUrl(jsonData[0].url)
            })

        let randomNum1 = Math.floor(Math.random() * 100)
        let randomNum2 = Math.floor(Math.random() * 100)
        setComment1(comments[randomNum1].body)
        setComment2(comments[randomNum2].body)
    }, [])
    const [hidden, setHidden] = useState(true);


    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>

                        <img className='postProfilePic' src={users.filter(u => u.id === post.userId)[0].profilePicture} />
                        <span className='postProfileName'> {users.filter(u => u.id === post.userId)[0].username} </span>
                        <span className="postTime"> {post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <button className='postEdit'> Edit</button>
                    </div>
                </div>
                <div className='postMain'>
                    <img className='postMainPic' src={url} />
                </div>
                <div className='postBot'>
                    <div className='postBotLeft'>
                        <span className='postMainCaptions'>{post?.body} </span>
                    </div>
                    <div className='postBotRight'>
                        <button id='postComment' className='postComment'> Comment</button>
                    </div>
                </div>
                <div id='commentarea' className='commentarea'>
                    {!hidden ? <p> comment1 {comment1}<br></br>comment2 :{comment2}  </p> : null}
                    <button  className='postComment' onClick={() => setHidden(s => !s)}>
                     show hide comment
                    </button>
                </div>

            </div>
        </div>
    )
}
