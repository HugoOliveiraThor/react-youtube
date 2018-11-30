import React, { Component } from 'react'
import { Provider } from "react-redux";
import './App.css'
import store from './store/index'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from "./components/VideoPlayer";

class App extends Component {
  render() {
    console.log('App',this)
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </Provider>
    )
  }
}

export default App;
