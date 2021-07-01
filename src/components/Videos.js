import React from 'react'
import Video from './Video'

const Videos = ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => {
    return <Video video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />
  })

  return (
    <div className='ui relaxed divided list'>
      {videoList}
    </div>
  )
}

export default Videos
