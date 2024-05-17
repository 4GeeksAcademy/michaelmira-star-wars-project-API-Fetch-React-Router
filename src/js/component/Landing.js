import React from 'react'
import video from './assets/Video1.mp4'

export const Landing = () => {
  return (
    <div className='landing'>
      <video src={video} autoPlay muted loop ></video>
      <div className='overlay' ></div>
      <div className='content'>
        <h1>Welcome to Miami</h1>
        <p>Hawaii is a group of volcanic islands in the Central Pacific</p>
        <p> Beutiful beaches, Surfing and volcanoes are waiting</p>
        <button>Buy Tickets</button>
      </div>
    </div>
  )
}

