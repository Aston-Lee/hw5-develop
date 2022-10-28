import React from 'react'
import "./Post.css";
import { Users } from '../Data';

export default function Post({userobject, setUserObject, post, jsonusers}) {

    console.log(userobject)
    return ( 
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfilePic' src={userobject.profilePicture} />
                        <span className='postProfileName'> {userobject.username} </span>
                        <span className="postTime"> {post.date }</span>
                    </div>
                    <div className='postTopRight'>
                        <button className='postEdit'> Edit</button>
                    </div>
                </div>
                <div className='postMain'>
                    <img className='postMainPic' src={post.photo}  />

                </div>
                <div className='postBot'>
                    <div className='postBotLeft'>
                        <span className='postMainCaptions'>{post?.body} </span>
                    </div>
                    <div className='postBotRight'>
                        <button className='postComment'> Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
