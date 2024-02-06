import {css} from "@emotion/css";
import musicIcon from "../assets/music-icon.png";
import bookmarkIcon from "../assets/bookmark-icon.png";
import searchIcon from "../assets/search-icon.png";

import {Link} from "react-router-dom"

const Sidebar = () => {

  const linkInfo:{icon:string, link:string}[] = [{icon: musicIcon, link:""}, {icon: searchIcon, link:"search"}, {icon: bookmarkIcon, link: "add"}];

  return (
    <div
      className={
        css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90%;
          height: 80%;
          background-color: #2c2c2c;
          border-radius: 10px;
          background: var(--page-background);
        `
      }
    >
      
      {
        linkInfo.map((iconInfo, index) => (

          <div
            key={index}
          >
            <Link
              to={iconInfo.link}
            >
              <img
                src={iconInfo.icon}
                alt="icon"
                className={
                  css`
                width: 40px;
                height: 40px;
                border-radius: 10px;
                padding: 10px;
              `
                }
              />
            </Link>

          </div>

        ))
      }
    </div>
  )
}

export default Sidebar;