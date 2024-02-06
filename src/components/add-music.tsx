import React, { useState, ChangeEvent } from 'react';
import styled from "@emotion/styled";
import { Music } from "../types/music"
import {css} from "@emotion/css";

const AddMusic = () => {

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

  let Input = styled.input`
    width: 100%;
    height: 34px;
    padding: 4px 10px;
    color: white;
    border-radius: 10px;
    background: transparent;
    border: white solid 1px;
  `

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
        <Input type="text" name="name" value={formData.title} onChange={handleChange} />

        <label>Duration (ms):</label>
        <Input type="text" name="duration_ms" value={formData.duration_ms} onChange={handleChange} />

        <label>Image URL:</label>
        <Input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />

        <label>Release Date:</label>
        <Input type="text" name="release_date" value={formData.release_date} onChange={handleChange} />

        <label>Genre:</label>
        <Input type="text" name={`genre`} value={formData.genre} onChange={handleChange} />

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
        <Input type="text" name="artist_name" value={formData.artist.name} onChange={handleChange} />

        <label>Artist Popularity:</label>
        <Input type="text" name="popularity" value={formData.artist.popularity} onChange={handleChange} />

        <label>Artist Image URL:</label>
        <Input type="text" name="artist_image_url" value={formData.artist.image_url} onChange={handleChange} />

        <label>Artist Followers:</label>
        <Input type="text" name="followers" value={formData.artist.followers} onChange={handleChange} />
      </div>
    </div>

  );
};

export default AddMusic;
