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

  const tmpposts = filteredPosts

  const addPeople = (uid) => {
    userobject.followed.indexOf(uid) === -1 ? userobject.followed.push(uid) : console.log("This item already exists");
    setFilteredPosts(tmpposts.filter(post => userobject.followed.includes(post.userId)))
    setUserObject(userobject)
    localStorage.setItem("userobject", JSON.stringify(userobject))
    console.log(userobject)
    console.log(filteredPosts)
    window.location.reload(false);
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

        {/* // if userfiltered is none, then generate normal message */}
        {usersFiltered.length === 0 && <div className='remindtext'>No results found, <br></br>type something or try search for another username</div>}
          
      </div>
    </>
  )
}
