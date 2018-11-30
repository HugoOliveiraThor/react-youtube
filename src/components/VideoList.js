import React  from 'react'
import { List, Image } from 'semantic-ui-react'


const VideoList = props => {
  return (
    <div className="video-list">
      <h1>Video List</h1>
      <List animated verticalAlign='middle'>
      <List.Item>
        <List.Content>
          <List.Header>
            Titulo do Vídeo
          </List.Header>
        </List.Content>
      <Image avatar src=''></Image>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            Titulo do Vídeo
          </List.Header>
        </List.Content>
      <Image avatar src=''></Image>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
            Titulo do Vídeo
          </List.Header>
        </List.Content>
      <Image avatar src=''></Image>
      </List.Item>
      </List>
    </div>
  )
}

export default VideoList