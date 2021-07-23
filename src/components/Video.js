import React from 'react'
import './Video.css'

const Video = ({ video, onVideoSelect }) => {
  const handleSelect = () => {
    onVideoSelect(video)
  }
  
  return (
    <div className='video-item item' onClick={handleSelect}>
      <img className='ui image'src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className='content'>
        <div className='header'>
          {video.snippet.title}
        </div>
       </div>
    </div>
  )
}

export default Video
