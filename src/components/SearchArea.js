import React from 'react'
import Online from "./Online";
import { users } from "../users";
import { useState, useEffect, useLayoutEffect } from 'react';
import { AiOutlineSearch } from "react-icons/ai"
import "./SearchArea.css";

// import "./RightBar.css";

export default function SearchArea({ userobject, setUserObject, filteredPosts, setFilteredPosts }) {
  // userobject.followed

  const [search, setSearch] = useState("");
  const [usersFiltered, setusersFiltered] = useState([])
  // useLayoutEffect is used to prevent the page from rendering before the data is fetched
  useLayoutEffect(() => {
    

    if (search.length > 0) {
      setusersFiltered(users.filter(user => user.username.toLowerCase().includes(search.toLowerCase())))
      console.log(usersFiltered)
    }
    else {
      setusersFiltered([])
    }
  }, [search])


  // console.log(usersFiltered)
  // let originalpost = JSON.parse(localStorage.getItem("originalpost"))
  // console.log(originalpost)

  // addpeople use uid and added into userobject.followed
  function addPeople(uid) {
    let originalpost = JSON.parse(localStorage.getItem("originalpost"))
    let tmpuserobject = userobject
    tmpuserobject.followed.push(uid)
    setUserObject(tmpuserobject)
    console.log(userobject)
    localStorage.setItem("userobject", JSON.stringify(userobject))
    setFilteredPosts(originalpost.filter(post => userobject.followed.includes(post.userId)))
    console.log(filteredPosts)
    console.log(originalpost)
    console.log(userobject.followed)
    console.log(originalpost.filter(post => userobject.followed.includes(post.userId)))

    // userobject.followed = [...userobject.followed, uid]
    // setFilteredPosts(originalpost.filter(post => post.userId.includes(uid)))
    // console.log(userobject.followed)
    // setUserObject(userobject)
  }


  return (
    <>
      <div className='SearchArea2'>
        <div >
          <AiOutlineSearch className="searchIcon" />
          <input
            placeholder="Search for friends (usrname)"
            className="searchInput"
            onChange={e => setSearch(e.target.value)}
          // onChange={e => setusersFiltered(users.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase())))}
          />
        </div>
        {usersFiltered.map((u) => {
          return (
            <>
              <div>
                <ul>
                  <div className='searchfriend'>
                    <Online key={u.id} user={u} />
                  </div>
                </ul>
              </div>
              <div>
                <button onClick={(e) => addPeople(u.id)} className='follow-Button' >follow</button>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
