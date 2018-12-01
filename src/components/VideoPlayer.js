import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Advertisement, Embed} from 'semantic-ui-react'


class VideoPlayer extends Component {

  renderAdvertisement = () => {
    return (
      <Advertisement
        style={{ 'height': '100%' }}
        unit='top banner'
        test='Choose a video to reproduce &#9786;' />
    )
  }

  renderVideo = () => {
    return (
      <Fragment>
          <Embed id={this.props.video.id.videoId}
            source='youtube'
            placeholder='' />
          <p className='title'>{this.props.video.snippet.title}</p>
          <p>{this.props.video.snippet.description}</p>   
      </Fragment>
    )
  }

  render () {
    return (
      <div className="video-player">
        {this.props.video.id ?  this.renderVideo() : this.renderAdvertisement()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    video:state.reproduce.video
  }
}

export default connect(mapStateToProps,null)(VideoPlayer)