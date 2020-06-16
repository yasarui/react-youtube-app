import React from 'react';
import moment from 'moment'

const VideoListItem = (props) => {
     let timeAgo = moment().diff(props.video.snippet.publishedAt,"years") > 0 ? moment().diff(props.video.snippet.publishedAt,"years") + " Years ago" : 0; 
     if(timeAgo <= 0){
        timeAgo = moment().diff(props.video.snippet.publishedAt,"months") > 0 ? moment().diff(props.video.snippet.publishedAt,"months") + " Months ago" : 0;
     }
     if(timeAgo <= 0){
        timeAgo = moment().diff(props.video.snippet.publishedAt,"days") > 0 ? moment().diff(props.video.snippet.publishedAt,"months") + " days ago" : 0;         
     }
     return (
         <div className="item video-item" onClick={()=>props.handleVideoSelect(props.video)} >
            <div className="ui small image">
               <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <div className="header video-title"> {props.video.snippet.title} </div>
                <div className="meta">
                    <span className="channel"> {props.video.snippet.channelTitle} </span>
                    <span className="stay"> {timeAgo} </span>
                </div>
            </div>
         </div>
     )
}

export default VideoListItem