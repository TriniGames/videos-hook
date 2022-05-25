import axios from "axios";
const KEY = "AIzaSyCAFkr2DZ0JF9v2vYNxFueojQm_-J93U7M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
