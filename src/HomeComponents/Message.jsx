import React from 'react'
import jane from '../images/jane.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={jane} alt="" />
        <span>just now</span>
      </div>
      
      <div className="messageContent">
        <p>hello</p>

        <img src={jane} alt="" />
      </div>
    </div>
  )
}

export default Message