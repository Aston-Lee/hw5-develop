import React from 'react'
import Online from "./Online";
import { users } from "../users";
import { useState, useEffect } from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import "./RightBar.css";

export default function RightBar( {userobject, setUserObject, filteredPosts, setFilteredPosts}) {

    // filter users while using localstorage.getitem("followed")
    const [usersFiltered, setusersFiltered] = useState(users.filter(user => userobject.followed.includes(user.id)))

    const removePeople = (uid) => {
        setusersFiltered(usersFiltered.filter(user => user.id !== uid))
        userobject.followed = userobject.followed.filter(user => user !== uid)
        setFilteredPosts(filteredPosts.filter(post => post.userId !== uid))

        setUserObject(userobject)
        console.log(userobject)
        console.log(filteredPosts)
        localStorage.setItem("userobject", JSON.stringify(userobject))
    }

    return (
        <>  
            <h4 className="rightbarTitle">Subscribed list</h4>
            {usersFiltered.map((u) => {
                return (
                    <div>
                        <ul className="rightbarFriendList">
                            <div className='rightbarLeft'>
                                <Online key={u.id} user={u} />
                            </div>
                            <div classname="rightbarRight" >
                                <button onClick={(e) => removePeople(u.id)} className='unfollow-Button' >unfollow</button>
                            </div>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}
