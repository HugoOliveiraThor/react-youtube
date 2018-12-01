import React, { Component } from 'react'
import { Provider } from "react-redux";
import './App.css'
import store from './store/index'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from "./components/VideoPlayer";

class App extends Component {
  render() {
    console.log('App', this)
    return (
      <Provider store={store}>
        <React.Fragment>
          <div className="container">
            <SearchBar />
            <VideoList />
            <VideoPlayer />
          </div>
          <div class="ui inverted vertical footer segment form-page">
            <div class="ui container">
              Created by Hugo Oliveira - December 2018
            </div>
          </div>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App;
