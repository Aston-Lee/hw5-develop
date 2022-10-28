import "./topbar.css";
// import SideBar from "./SideBar"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import { Search } from "@material-ui/icons";
import { AiOutlineSearch } from "react-icons/ai"
import { useEffect, useState } from "react";

export default function Topbar({ posts, setPosts }) {

    const navigate2 = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    
    function handellogout() {
        localStorage.clear();
        navigate2("/");
    }

    // localStorage.setItem("originalposts", JSON.stringify(posts))

    useEffect(() => {
        console.log(searchInput)
        console.log(searchInput.length)
        if (searchInput.length > 0) {
            // temporary array to hold the filtered data
            const temp = [];
            // loop through the original posts and push to the temp array
            // if the post title includes the searchInput value
            let originalpost = JSON.parse(localStorage.getItem("originalposts"))
            originalpost.forEach((post) => {
                if (post.body.toLowerCase().includes(searchInput.toLowerCase())) {
                    temp.push(post);
                }
            });
            // set the filtered state based on what our rules added to temp
            setPosts(temp);
        } else {
            // if the search bar is empty, set posts back to original
            let originalpost = JSON.parse(localStorage.getItem("originalposts"))
            setPosts(originalpost);
        }
    }, [searchInput]);

    const navigate = useNavigate()

    return (
        <div className="topbarContainer">
            {/* <SideBar /> */}
            <div className="topbarLeft">

                <span className="logo">Ricetagram</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <AiOutlineSearch className="searchIcon" />
                    <input
                        placeholder="Search for post"
                        className="searchInput"
                        // onChange={handleChange}
                        onChange={e => setSearchInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    {/* <span className="topbarLink">Profilepage </span> */}
                    <span className="topbarLink" onClick={() => navigate('/ProfilePage')}>Profilepage</span>
                    {/* <span className="topbarLink">Timeline</span> */}
                    <span className="topbarLink" onClick={handellogout} >Logout</span>
                </div>
            </div>
        </div>
    );
}