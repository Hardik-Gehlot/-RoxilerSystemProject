import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./style.css";
function SearchBar({setSearch}) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearch(inputValue);
    }
  };
  return (
    <div className="search-box-container">
      <input type="text" className="search-input" placeholder="Search..."
      onChange={(e)=>{setInputValue(e.target.value)} }
      onKeyDown={handleKeyPress}/>
      <IoSearch className="search-icon" />
    </div>
  );
}

export default SearchBar;
