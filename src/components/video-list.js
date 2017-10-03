import React from 'react';
import VideoListItem from './video-list-item'

const VideoList = (props) => {

  var videoItems = []

  for(var i = 0; i < props.videos.length; i++) {
    videoItems.push(
      <VideoListItem video={ props.videos[i]}
      key={props.videos[i].etag}
      hamburger={props.hotdog}/>
    )
  }

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )

}

export default VideoList;