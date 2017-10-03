import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar'
import VideoDetail from './components/video-detail'
import VideoList from './components/video-list'

const API_KEY ='API_KEY'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }  

    this.videoSearch('Justin Timerberlake')

  }

  videoSearch(term) {
    setTimeout( () => {
      YTSearch({key: API_KEY, term: term}, (response) => {
        console.log(response);
  
        this.setState({
          videos: response,
          selectedVideo: response[0]
        })
      })

    }, 300)
  }

  render() {
    return(
    <div>
      <SearchBar onSearchTermChange={ (term) => this.videoSearch(term)}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
      videos={this.state.videos}
      hotdog={
        (video) => this.setState({selectedVideo: video})
      }/>
    </div>
    )
  } 

}

ReactDOM.render(<App />, document.querySelector('.container'));
