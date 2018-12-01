import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Advertisement, Embed} from 'semantic-ui-react'


class VideoPlayer extends Component {

  renderAdvertisement = () => {
    return (
      <Advertisement
        style={{ 'height': '433px' }}
        unit='top banner'
        test='Escolha um vídeo para reproduzir' />
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
    console.log('props', this.props)
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