/* eslint-disable default-case */
const INITIAL_STATE = {
  videos: [],
  loading: false,
  erro: false
}

export default function search(state = INITIAL_STATE, payload) {
  switch(payload.type) {
    case 'SEARCH_VIDEO_BEGIN':
      return {
        videos: [],
        loading: true,
        erro: false        
      }
    case 'SEARCH_VIDEO_SUCCESS':
      return {
        videos: payload.videos,
        loading: false,
        erro: false 
      }
    case 'SEARCH_VIDEO_ERROR':
      return {
        videos: [],
        loading: false,
        erro: true 
      }    
    default: return state  
  }
}