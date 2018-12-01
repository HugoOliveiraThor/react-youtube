const INITIAL_STATE = {
  video: {}
}

export default function reproduceVideo(state = INITIAL_STATE, payload) {
  if(payload.type === 'REPRODUCE_VIDEO') {
    return {
      video: payload.video
    }
  } else {
    return state
  }
}