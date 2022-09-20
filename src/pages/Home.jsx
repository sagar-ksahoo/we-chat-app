import React from 'react'
import Chat from '../HomeComponents/Chat';
import Sidebar from '../HomeComponents/Sidebar';

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home;