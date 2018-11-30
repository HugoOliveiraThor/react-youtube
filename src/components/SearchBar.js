import React, { Component } from 'react'
import {Segment, Input} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchByName } from "../store/actions/searchVideo"


class SearchBar extends Component {
  search = e => {
    if(e.keyCode === 13) {
      const termo = e.target.value
      this.props.searchByName(termo)
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

const mapDispatchToProps = dispatch => {
  return {
    searchByName: (termo) => dispatch(searchByName(termo))
  }
}

export default connect(null,mapDispatchToProps)(SearchBar) 