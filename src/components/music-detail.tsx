import {css} from "@emotion/css";
import {useAppSelector} from "../hooks/hooks";

const MusicDetail = () => {

  const { data } = useAppSelector((state)=> state.music.currentMusicState);

  if (!data) {
    return (
      <div

        className={
          css`
          width: 97%;
          padding: 5px;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 96%;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
            justify-content: center;
          background: var(--page-background);
        `
        }
      >
        <h3>
          Select a music to see details
        </h3>
      </div>
    );
  }

  return (
    <div

      className={
        css`
          width: 97%;
          padding: 5px;
          overflow-y: scroll;
          overflow-x: hidden;
          height: 96%;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--page-background);
        `
      }
    >
      <div
        className={
          css`
            width: 90%;
            padding: 5px;
            border-radius: 10px;
          `
        }
      >
        <h2>
          {
            data.title
          }
        </h2>
        <img
          className={
            css`
              width: 100%;
              border-radius: 10px;
            `
          }
          src={data.image_url} alt="music" />
        <h3>
          {data.artist.name}
        </h3>
      </div>

      <div

        className={
          css`
            width: 100%;
            padding: 5px;
            position: relative;
            border-radius: 10px;
          `
        }
      >
        <h2
          className={
            css`
              position: absolute;
              top: 10px;
              left: 10px;
            `
          }
        >
          About Artist
        </h2>
        <img
          className={
            css`
              width: 100%;
              border-radius: 10px;
            `
          }
          src={data.artist.image_url} alt={"artist"}/>
        <div
          className={
            css`
              margin-left: 10px;
              color: #b6b5b5;
            `
          }
        >
          <h4>{
            "Monthly listeners " + data.artist.popularity
          }
          </h4>
          <h4>{
            "Followers " + data.artist.followers
          }
          </h4>
        </div>
      </div>

    </div>
  )
}

export default MusicDetail;