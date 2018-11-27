import React, { Component } from 'react'
import {Segment, Input} from 'semantic-ui-react'


class SearchBar extends Component {
  search = e => {
    if(e.keyCode === 13) {
      const termo = e.target.value
      console.log(termo)
    }
  }

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input
            icon="search"
            size="large"
            onKeyDown={this.search}
            placeholder="Search ...."
          />
        </Segment>
      </div>
    )
  }
}

export default SearchBar