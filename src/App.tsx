import React from 'react';
import styled from "@emotion/styled";

import './App.css';
import musicIcon from "./assets/music-icon.png";
import bookmarkIcon from "./assets/bookmark-icon.png";
import searchIcon from "./assets/search-icon.png";
import likedIcon from "./assets/like-icon.png";
import homeIcon from "./assets/home-icon.png";
import { css } from "@emotion/css";


function App() {

    const music = {
        "_id":"6519e22f29dc5ee6485ff638",
        "name":"ETA",
        "duration_ms":151373,
        "image_url":"https://i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b",
        "release_date":"2023-07-21",
        "artist":{
            "name":"NewJeans",
            "popularity":84,
            "image_url":"https://i.scdn.co/image/ab6761610000e5eb5da361915b1fa48895d4f23f",
            "followers":5446545,
            "geners":[],
            "_id":"6519e22f29dc5ee6485ff639"
        },
        "__v":0
    }
    const arrayRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 34, 45, 35, 234, 43, 64, 75]

    const iconArray = [musicIcon, bookmarkIcon, searchIcon, likedIcon, homeIcon];

  return (

    <div
      className={
        css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #1a1a1a;
            color: white;
        `
      }
    >

    </div>

  );
}

export default App;
