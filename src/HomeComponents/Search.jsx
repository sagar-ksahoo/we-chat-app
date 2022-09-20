import React from 'react'
import jane from '../images/jane.jpg'
const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='search a user'/>
        </div>

        <div className="userChat">
            <img src = {jane} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search