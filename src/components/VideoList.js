import React, {Component}  from 'react'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from "react-redux";


class VideoList extends Component {

  renderVideo (video) {
    return (
      <List animated verticalAlign='middle' key={video.etag}>
          <List.Item>
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
      {
        this.props.videos.map(video => {
          return this.renderVideo(video)
        })
      }
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.search.videos,
    loading: state.search.loading,
    error: state.search.error
  }
}

export default connect(mapStateToProps, null)(VideoList)