import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtubeApi from './api/Youtube';
const youtube_api = "AIzaSyBkcwW0lLBolDk5DrMre9o43kiHn4Ume1c";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedVideo:null,
            videoListItems:[]
        }
    }
    async fetchVideos(searchText){
        const response = await youtubeApi.get("/search",{ params: { q:searchText }});
        console.log("Response is ",response.data.items);
        this.setState({
            selectedVideo:response.data.items[0],
            videoListItems:response.data.items
        })
    }
    componentDidMount(){
        this.fetchVideos("ReactJS");
    }
    handleSearchFormSubmit(value){
        this.fetchVideos(value);
    }
    handleVideoSelect(video){
        this.setState({
            selectedVideo:video
        })
    }
    render(){
        return(
            <div className="ui container">
               <SearchBar handleSubmit={(value)=>this.handleSearchFormSubmit(value)} />
               <div className="ui grid">
                   <div className="ten wide column">
                       <VideoDetail video={this.state.selectedVideo} />
                   </div>
                   <div className="six wide column">
                        <VideoList handleVideoSelect={(video)=>this.handleVideoSelect(video)}videos={this.state.videoListItems} />
                   </div>
               </div>
            </div>
        )
    }
}

export default App;