import youtubeSearch from 'youtube-api-v3-search'
import {api} from '../../key'


export const beginSearchVideo = () => {
  return {
    type: 'SEARCH_VIDEO_BEGIN',
    loading: true,
    erro: false
  }
}

export const searchVideoSuccess = (videos) => {
  return {
    type: 'SEARCH_VIDEO_SUCCESS',
    videos,
    loading: false,
    erro: false
  }
}

export const searchVideoError = () =>  {
  return {
    type: 'SEARCH_VIDEO_ERROR',
    error: true,
    loading:false
  }
}

export const searchByName = (name) => {
  return dispatch => {
    dispatch(beginSearchVideo())
    youtubeSearch(api,{q:name})
    .then(data => dispatch(searchVideoSuccess(data.items)))
    .catch(() => {
      dispatch(searchVideoError())
    })
  }
}
