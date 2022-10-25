import "./topbar.css";
import SideBar from "./SideBar"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import { Search } from "@material-ui/icons";
import {AiOutlineSearch} from "react-icons/ai"

export default function Topbar() {
    
    const navigate2 = useNavigate();
    function handellogout(){
        localStorage.clear();
        navigate2("/");
    }


    const navigate = useNavigate()
    return (
        <div className="topbarContainer">
            <SideBar />
            <div className="topbarLeft">
                
                <span className="logo">Ricetagram</span>
            </div>
            <div className="topbarCenter">
            <div className="searchbar">
                <AiOutlineSearch className="searchIcon" />
                <input
                    placeholder="Search for friend, post"
                    className="searchInput"
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