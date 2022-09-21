import React from 'react'
import attach from '../images/attach-logo.png';
import image from '../images/image-icon.png';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something ...' />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
          <img src={image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>

  )
}

export default Input ;