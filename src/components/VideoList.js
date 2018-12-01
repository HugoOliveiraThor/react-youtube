import React, {Component}  from 'react'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from "react-redux";
import {reproduceVideo} from '../store/actions/reproduceVideo'


class VideoList extends Component {

  renderVideo (video) {
    return (
      <List animated verticalAlign='middle' key={video.etag}>
          <List.Item onClick={() =>  this.props.reproduce(video)}>
            <List.Content>
              <List.Header>
                {video.snippet.title}
            </List.Header>
            </List.Content>
            <Image src={video.snippet.thumbnails.default.url}></Image>
          </List.Item>
      </List>
    )
  }

  render() {
    console.log(this.props.loading)
    return (
      <div className="video-list">
      {
        this.props.loading && (<Dimmer active inverted>
          <Loader size='medium'>Carregando...</Loader>
        </Dimmer>)
      }
      { this.props.videos.map(video => this.renderVideo(video)) }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reproduce: video => dispatch(reproduceVideo(video))
  }
}

const mapStateToProps = state => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    error: state.search.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)