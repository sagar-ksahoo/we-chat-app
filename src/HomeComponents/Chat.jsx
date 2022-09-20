import React from 'react'
import addPeople from "../images/Add-people.png";
import cam from "../images/cam.png";
import more from "../images/more.png";

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
    </div>
  )
}

export default Chat