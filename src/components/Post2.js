import React from 'react'
import "./Post.css";
// import { Users } from '../Data';
import { users } from '../users';
import { Comment, Header } from 'semantic-ui-react'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Post2({ userobject, setUserObject, post, username, newuser }) {
    const [images, setImages] = useState([])
    // axios.get('https://api.thecatapi.com/v1/images/search')
    // .then(res => {
    //     setImages(res.data)
    // })
    // console.log(images.url)


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
                    <img className='postMainPic' src={images.url} />

                </div>
                <div className='postBot'>
                    <div className='postBotLeft'>
                        <span className='postMainCaptions'>{post?.body} </span>
                    </div>
                    <div className='postBotRight'>
                        <button className='postComment'> Comment</button>
                    </div>
                </div>
                <div>
                    
                    The quick brown fox ...
                </div>
                
            </div>
        </div>
    )
}
