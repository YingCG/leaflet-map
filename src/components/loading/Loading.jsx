import React from 'react'
import './loading.css'

function Loading() {
  return (
    <div className='container'>
      <div className="loading">
        <div className='animate-loading'></div>
        <div className='animate-loading'></div>
        <div className='animate-loading'></div>
      </div>
      <p>Loading my discovery on map...</p>
    </div>
  )
}

export default Loading