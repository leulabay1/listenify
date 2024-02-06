import {css} from "@emotion/css";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {Music} from "../types/music";
import {useEffect} from "react";
import {getMusicsRequest, getMusicsSuccess, setCurrentMusic} from "../features/music-slice";
import {setDelete, setEdit, setEditDeletePopup} from "../features/toogle-slice";

const MusicList = () => {

  const dispatch = useAppDispatch();
  const { data, loading, error} = useAppSelector((state)=> state.music.getMusicsState);

  const {idx} = useAppSelector((state)=> state.toggle.editDeletePopup);

  useEffect(()=>{

    dispatch(getMusicsRequest());

  }, [])

  if (loading) {
    return (
      <div
        className={
          css`
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
          `
        }
      >
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div
        className={
          css`
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
          `
        }
      >
        <h1>Error while loading data</h1>
      </div>
    )
  }

  return (
    <div
      className={
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 96%;
        border-radius: 10px;
        background-color: #1a1a1a;
        color: white;
        overflow-y: scroll;
        overflow-x: hidden;
        background: var(--page-background);
        `
      }
    >
      <h1>Music List</h1>

      <div
        className={
          css`
            display: grid;
            grid-template-columns: 120px 1.5fr 1fr 1fr 0.5fr;
            place-items: center;
            background-color: #31313104;
            border-radius: 10px;
            width: 90%;
            margin: 10px;
            padding: 0 10px;
            position: sticky;
            top: 10px;
            backdrop-filter: blur(5px);
          `
        }
      >
        <p></p>
        <h3
          className={
            css`
              place-self: center left;
            `
          }
        >
          Title
        </h3>
        <h3>
          Release Date
        </h3>
        <h3>
          Duration
        </h3>
        <p></p>
      </div>

      {
        data.map((music: Music, index: number) => {
          return (
            <div

              onClick={()=>dispatch(setCurrentMusic(music))}
              className={
                css`
                  display: grid;
                  grid-template-columns: 120px 1.5fr 1fr 1fr 0.5fr;
                  place-items: center;
                  background-color: #313131;
                  border-radius: 10px;
                  width: 90%;
                  margin: 10px;
                  padding: 0 10px;
                  &:hover{
                    background: var(--card-hover);
                  }
                `
              }
              key={index}>
              <img
                className={
                  css`
                    width: 100px;
                    height: 100px;
                    border-radius: 10px;
                    margin: 10px;
                  `
                }
                src={music.image_url} alt="music" />
              <div
                className={
                  css`
                    place-self: center left;
                  `
                }
              >
                <h3
                  className={
                    css`
                      font-size: 1.6rem;
                      color: #e7e6e6;
                    `
                  }
                >{music.title}</h3>
                <p
                  className={
                    css`
                      font-size: 1.2rem;
                      color: #a1a0a0;
                    `
                  }
                >{music.artist.name}</p>
              </div>
              <p>{music.release_date.slice(0, 10)}</p>
              <p>
                {
                  Math.floor(music.duration_ms / 60000) + ":" + Math.floor((music.duration_ms % 60000) / 1000)

                }
              </p>

              <div
                onClick={(e)=>{e.stopPropagation();}}
                className={
                  css`
                    position: relative;
                    place-self: center right;
                  `
                }
              >
                <div
                  onClick={(e)=>{dispatch(setEditDeletePopup(index));}}
                  className={
                    css`
                    padding: 5px 10px;
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 3px;
                    &:hover{
                      background: #545454;
                    }
                  `
                  }
                >
                  {
                    [1, 2, 3].map((num)=>{
                      return (
                        <div
                          key={num}
                          className={
                            css`
                            width: 10px;
                            height: 10px;
                            background: #b7b7b4;
                            border-radius: 50%;
                          `
                          }
                        >
                        </div>
                      )
                    })
                  }

                </div>

                <div
                  className={
                    css`
                      display: ${idx === index ? 'block' : 'none'};
                      position: absolute;
                      background: var(--card-background);
                      width: 100px;
                      border-radius: 5px;
                      padding: 5px 6px;
                      box-shadow: #676767 0 0 5px;
                    `
                  }
                >
                  <button

                    onClick={()=>dispatch(setEdit(music))}
                    className={
                      css`
                        outline: 0;
                        border: 0;
                        width: 100%;
                        display: flex;
                        justify-content: start;
                        background: transparent;
                        font-size: 1rem;
                        font-family: 'Montserrat', sans-serif;
                        color: white;
                        border-radius: 3px;
                        &:hover{
                          background: var(--popup-hover);
                        }
                      `
                    }
                  >Edit</button>
                  <button

                    onClick={()=>dispatch(setDelete(music))}
                    className={
                      css`
                        outline: 0;
                        border: 0;
                        width: 100%;
                        display: flex;
                        justify-content: start;
                        background: transparent;
                        font-size: 1rem;
                        font-family: 'Montserrat', sans-serif;
                        color: white;
                        border-radius: 3px;
                        &:hover{
                          background: var(--popup-hover);
                        }
                      `
                    }

                  >Delete</button>
                </div>

              </div>

            </div>
          )
        })
      }

    </div>
  )
}

export default MusicList;