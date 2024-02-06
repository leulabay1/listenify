import {Music} from "../types/music";
import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/css";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {setEdit, turnOffEdit} from "../features/toogle-slice";

const EditForm = ()=>{

  const dispatch = useAppDispatch();
  const {editData, editToggle} = useAppSelector((state)=> state.toggle.editFormToggle);

  const [formData, setFormData] = useState<Music>(editData);

  useEffect(()=>{

    setFormData(editData);

  }, [editData])

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

  let Input = styled.input`
    width: 90%;
    height: 34px;
    padding: 4px 10px;
    color: white;
    border-radius: 10px;
    background: transparent;
    border: white solid 1px;
  `


  if (formData) {

    return (
      <div
        className={
          css`
          width: 100%;
          height: 100%;
          display: ${editToggle ? "grid" : "none"};
          place-items: center;
          position: absolute;
          backdrop-filter: blur(10px);
        `
        }
      >

        <div
          className={
            css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            width: 100%;
            max-width: 700px;
            padding: 10px 40px;
            border-radius: 10px;
            margin-top: 50px;
            background: var(--card-background);
            position: relative;
          `
          }
        >

          <div

            onClick={()=>dispatch(turnOffEdit())}
            className={
              css`
              position: absolute;
              right: 10px;
              top: 10px;
          `
            }

          >
            <div className={
              css`
            width: 50px;
            height: 50px;
            position: relative;
            &:hover{
              background: #414141;
              cursor: pointer;
            }
          `
            }>
              <div
                className={
                  css`
                  width: 100%;
                  height: 10px;
                  transform-origin: center center;
                  //transform: translateY(-50%);
                  rotate: 45deg;
                  top: 50%;
                  background: var(--popup-hover);
                  position: absolute;
              `
                }
              >
              </div>
              <div
                className={
                  css`
                  position: absolute;
                  width: 100%;
                  height: 10px;
                  //transform: translateY(-50%);
                  transform-origin: center center;
                  top: 50%;
                  rotate: -45deg;
                  background: var(--popup-hover);
              `
                }
              >
              </div>
            </div>
          </div>

          <div>
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
          </div>

          <div>
            <h2
              className={
                css`
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
        </div>


      </div>

    );
  }

  return (
    <></>
  )

}

export default EditForm;