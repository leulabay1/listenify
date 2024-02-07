import React, { useState, ChangeEvent } from 'react';
import styled from "@emotion/styled";
import { Music } from "../types/music"
import {css} from "@emotion/css";
import {addMusicRequest} from "../features/music-slice";
import {useAppDispatch} from "../hooks/hooks";

const AddMusic = () => {

  const dispatch = useAppDispatch();

  const music:Music = {
    "_id":"6519e22f29dc5ee6485ff638",
    "title":"ETA",
    "genre":"",
    "duration_ms":151373,
    "image_url":"https://i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b",
    "release_date":"2023-07-21",
    "artist":{
      "name":"NewJeans",
      "popularity":84,
      "image_url":"https://i.scdn.co/image/ab6761610000e5eb5da361915b1fa48895d4f23f",
      "followers":5446545,
      "_id":"6519e22f29dc5ee6485ff639"
    },
  }

  const [formData, setFormData] = useState<Music>(music);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArtistChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      artist: {
        ...prevData.artist,
        [name]: value
      }
    }));
  };


  return (
    <div
      className={
        css`
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          overflow-y: scroll;
          background: var(--page-background);
        `
      }
    >
      <div
        className={
          css`
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            max-width: 400px;
            padding: 10px 40px;
            border-radius: 10px;
            margin-top: 50px;
            background: var(--card-background);
          `
        }
      >
        <h2>
          Music Detail
        </h2>
        <label>Title:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }

          type="text" name="title" value={formData.title} onChange={handleChange} />

        <label>Duration (ms):</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="duration_ms" value={formData.duration_ms} onChange={handleChange} />

        <label>Image URL:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="image_url" value={formData.image_url} onChange={handleChange} />

        <label>Release Date:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="release_date" value={formData.release_date} onChange={handleChange} />

        <label>Genre:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name={`genre`} value={formData.genre} onChange={handleChange} />

        <h2
          className={
            css`
              margin-top: 30px;
            `
          }
        >
          Artist Detail
        </h2>
        <label>Artist Name:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="name" value={formData.artist.name} onChange={handleArtistChange} />

        <label>Artist Popularity:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="popularity" value={formData.artist.popularity} onChange={handleArtistChange} />

        <label>Artist Image URL:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="image_url" value={formData.artist.image_url} onChange={handleArtistChange} />

        <label>Artist Followers:</label>
        <input

          className={
            css`
                width: 90%;
                height: 34px;
                padding: 4px 10px;
                color: white;
                border-radius: 10px;
                background: transparent;
                border: white solid 1px;
              `
          }
          type="text" name="followers" value={formData.artist.followers} onChange={handleArtistChange} />
      </div>
      <div className={
        css`
          margin-top: 30px;
          place-self: center;
          margin-bottom: 50px;
        `
      }>
        <button
          onClick={()=>dispatch(addMusicRequest(formData))}
          className={
            css`
                  outline: 0;
                  border: 0;
                  padding: 10px 20px;
                  border-radius: 5px;
                  color: black;
                  font-size: 1.2rem;
                  background: #cbcaca;
                  cursor: pointer;

                  &:hover {
                    background: var(--popup-hover);
                  }
                `
          }>
          Submit
        </button>
      </div>
    </div>

  );
};

export default AddMusic;
