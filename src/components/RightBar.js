import React from 'react'
import Online from "./Online";
import { users } from "../users";
import { useState, useEffect } from 'react';

export default function RightBar( {filteredPosts, setFilteredPosts}) {

    // filter users while using localstorage.getitem("followed")
    const [usersFiltered, setusersFiltered] = useState(users.filter(user => localStorage.getItem("followed").includes(user.id)))

    const [followarray, setfollowarray] = useState(users[localStorage.getItem("id") - 1].followed)

    const removePeople = (uid) => {
        // remove uid from users[localStorage.getItem("id")-1].followed
       
        setusersFiltered(usersFiltered.filter(user => user.id !== uid))
        setfollowarray(followarray.filter(user => user !== uid))
        setFilteredPosts(filteredPosts.filter(post => post.userId !== uid))

        localStorage.setItem("followed", followarray)
        console.log(filteredPosts)
        
    }

    return (
        <>  
            <h4 className="rightbarTitle">Subscribed list</h4>
            {usersFiltered.map((u) => {
                return (
                    <div>
                        <ul className="rightbarFriendList">
                            <div>
                                <Online key={u.id} user={u} />
                            </div>
                            <div>
                                <button onClick={(e) => removePeople(u.id)} className='unfollow-Button' >unfollow</button>
                            </div>
                        </ul>
                    </div>
                )
            })}
        </>
    )


    // return (
    //     <>
    //         {sidearray.map((item, index) => {
    //             return (
    //                 <div className='profile-container' key={index} >

    //                     <img className={item.cName} src={item.icon} />
    //                     <div className='profile-text'>
    //                         <span>{item.title}</span>
    //                     </div>
    //                     <div className='profile-status'>
    //                         <span>{item.status}</span>
    //                     </div>
    //                     <div>
    //                         {/* <button onClick={removeItem({index})} className='unfollow-Button' >unfollow</button> */}
    //                     </div>

    //                 </div>
    //             );
    //         })}

    //     </>
    // )
}
