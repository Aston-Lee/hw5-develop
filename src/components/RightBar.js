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
            <div className="rightbarsearchbar">
                <AiOutlineSearch className="searchIcon" />
                <input
                    placeholder="Search for friends"
                    className="searchInput"
                />
            </div>
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
