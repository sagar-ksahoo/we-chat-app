import React from 'react'
import jane from '../images/jane.jpg'
import catherine from "../images/catherine.jpg";
import henry from "../images/henry-cavill.jpg";
import tobey from "../images/tobey-maguire.png";
import daniel from "../images/daniel-radcliffe.jpg";
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
            <img src = {henry} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Henry</span>
                <p>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src = {tobey} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Tobey</span>
                <p>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src = {catherine} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Catherine</span>
                <p>Hello</p>
            </div>
        </div>
        
        <div className="userChat">
            <img src = {daniel} alt="userChat-img" />
            <div className="userChatInfo">
                <span>Daniel</span>
                <p>Hello</p>
            </div>
        </div>

    </div>
  )
}

export default Chats