import React from 'react'
import "./Post.css";
import { Users } from '../Data';

export default function Post({post, jsonusers}) {
    // test commit
    return ( 
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        {/* <img className='postProfilePic' src={Users.filter(u=>u.id === post.userId)[0].profilePicture} /> */}
                        <img className='postProfilePic' src={Users.filter(u=>u.id === post.userId)[0].profilePicture} />
                        {/* <span className='postProfileName'> {jsonusers.filter(u=>u.id === post.userId)[0].username} </span> */}
                        <span className='postProfileName'> {Users.filter(u=>u.id === post.userId)[0].username} </span>
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
                        <span className='postMainCaptions'>{post?.desc} </span>
                    </div>
                    <div className='postBotRight'>
                        <button className='postComment'> Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
