import React from 'react';
import VideoListItem from './VideoListItem';
import './VideoListItem.css';

const VideoList = ({videos,handleVideoSelect}) => {
    return (
        <React.Fragment>
            <div className="ui items">
                {videos.map((video,index)=>{
                    return <VideoListItem handleVideoSelect={(video)=>handleVideoSelect(video)} video={video} key={video.etag} />
                })}
             </div>
        </React.Fragment> 
    )
}

export default VideoList;