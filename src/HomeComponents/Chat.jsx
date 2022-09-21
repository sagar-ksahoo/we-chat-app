import React from 'react'
import addPeople from "../images/Add-people.png";
import cam from "../images/cam.png";
import more from "../images/more.png";
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Jane</span>
            <div className="chatIcons">
                <img src={cam} alt="cam-logo" />
                <img src={addPeople} alt="add-logo" />
                <img src={more} alt="more-logo" />
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat