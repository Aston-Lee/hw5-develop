import React from 'react'
import Online from "./Online";
import { users } from "../users";

export default function RightBar() {
    // users filtered with users[localStorage.getItem("id")-1].followed
    let usersFiltered = users.filter(user => users[localStorage.getItem("id") - 1].followed.includes(user.id))

    return (
        <>
            <h4 className="rightbarTitle">Subscribed list</h4>
            <ul className="rightbarFriendList">
                {usersFiltered.map((u) => (
                    <Online key={u.id} user={u} />
                ))}
                {/* <div>
                    <button onClick={(e) => removeItem(index, e)} className='unfollow-Button' >unfollow</button>
                </div> */}
            </ul>
        </>
    )
}
