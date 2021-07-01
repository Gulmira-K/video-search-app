import axios from 'axios'

const KEY = 'AIzaSyClQCWlCToQI4wCMFSoapzYgiKAViuJU04';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})

