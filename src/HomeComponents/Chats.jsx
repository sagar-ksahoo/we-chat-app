import React from 'react'
import jane from '../images/jane.jpg'
const Chats = () => {
  return (
    <div className='chats'>
        <div className="userChat">
            <img src = {jane} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src = {jane} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src = {jane} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>

        
    </div>
  )
}

export default Chats