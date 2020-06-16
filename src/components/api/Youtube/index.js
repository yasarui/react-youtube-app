import axios from 'axios';
const youtube_api = "AIzaSyBkcwW0lLBolDk5DrMre9o43kiHn4Ume1c";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:youtube_api,
    }
});