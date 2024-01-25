import React from 'react';
import './App.css';
import musicIcon from "./assets/music-icon.png";
import bookmarkIcon from "./assets/bookmark-icon.png";
import searchIcon from "./assets/search-icon.png";
import likedIcon from "./assets/like-icon.png";
import homeIcon from "./assets/home-icon.png";

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
    // const arrayRange = [1, 2]

    const iconArray = [musicIcon, bookmarkIcon, searchIcon, likedIcon, homeIcon];

  return (
          <section className="body-container">
              <article className="sidebar">
                  {
                      iconArray.map((image)=>{
                          return (
                              <span className="tab-icon-container" key={image}>
                                  <img className="tab-icon" src={image} alt="tab icons"/>
                              </span>
                          )
                      })
                  }
              </article>
              <div className="big-container">
                  <article className="first-container">
                      {
                          arrayRange.map((num)=>{

                              return (
                                  <div key={num} className="music-card">
                                      <img className="music-img" src={music.image_url} alt="music image"/>

                                      <div className="music-description">
                                          <span className="music-name-container">
                                              <h2>
                                                  {music.name}
                                              </h2>
                                              <h3>
                                                  {music.artist.name}
                                              </h3>
                                          </span>

                                          <h2>
                                              {music.release_date}
                                          </h2>

                                          <h2>
                                              {music.duration_ms}
                                          </h2>
                                      </div>

                                  </div>
                              )
                          })
                      }
                  </article>
                  <article className="second-container">

                  </article>
              </div>
          </section>
  );
}

export default App;
