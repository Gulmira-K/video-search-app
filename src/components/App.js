import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import Videos from './Videos'
import VideoDetail from './VideoDetail'
import useVideo from '../hooks/useVideos'
import useVideos from '../hooks/useVideos'

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('cars')
   
  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='ten wide column'> 
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='six wide column'>   
            <Videos videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
