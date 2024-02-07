import React from "react";
import {css} from "@emotion/css";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {turnOffDelete} from "../features/toogle-slice";
import {deleteMusicRequest} from "../features/music-slice";

const DeleteDialogBox = ()=>{

  const dispatch = useAppDispatch();
  const {deleteData, deleteToggle} = useAppSelector((state)=> state.toggle.deleteToggle);
  const {loading, error} = useAppSelector((state)=> state.music.deleteMusicState);

  return (
    <div
      className={
        css`
          width: 100%;
          height: 100%;
          display: ${deleteToggle ? "grid" : "none"};
          place-items: center;
          position: absolute;
          backdrop-filter: blur(10px);
        `
      }
    >

      <div
        className={
          css`
            display: flex;
            gap: 10px;
            width: 100%;
            max-width: 700px;
            padding: 10px 40px;
            border-radius: 10px;
            margin-top: 50px;
            background: var(--card-background);
            position: relative;
            flex-direction: column;
          `
        }
      >

        <div

          onClick={()=>dispatch(turnOffDelete())}
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

        {
          loading ? <h2>Deleting music...</h2> : error ? <h2>Error while deleting data</h2> :<></>
        }

        <h2>
          Are you sure you want to delete this music?
        </h2>

        <div
          className={
            css`
              display: flex;
              align-items: center;
              justify-content: space-around;
              
            `
          }
          >
          <button
            onClick={()=>dispatch(turnOffDelete())}
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
            No
          </button>
          <button
            onClick={()=>dispatch(deleteMusicRequest(deleteData._id))}
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
            Yes</button>
        </div>

      </div>

    </div>

  );
}

export default DeleteDialogBox;