import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

import "./RightBar.css";

export default function SearchArea() {
  return (
    <div className="SearchArea">
      <AiOutlineSearch className="searchIcon" />
      <input
        placeholder="Search for friends"
        className="searchInput"
      />
    </div>
  )
}
