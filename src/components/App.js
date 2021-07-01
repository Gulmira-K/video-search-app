import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import Videos from './Videos'
import VideoDetail from './VideoDetail'
import youtube from '../api/youtube'

const App = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  
  const onInputSubmit = async (input) => {
    const response = await youtube.get('/search', {
      params: {
        q: input,
      },
    });
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelect = video => {
    setSelectedVideo(video)
  }

  useEffect(() => {
    onInputSubmit('cars')
  })
  

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onInputSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='ten wide column'> 
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='six wide column'>   
            <Videos videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
