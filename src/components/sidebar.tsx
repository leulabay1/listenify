import {css} from "@emotion/css";
import { MdAddCircleOutline } from "react-icons/md";
import { FaMusic } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa";

import {Link} from "react-router-dom"

const Sidebar = () => {

  const linkInfo:{icon:any, link:string}[] = [
    {icon: <FaMusic className={
      css`
        width: 40px;
        height: 40px;
        border-radius: 10px;
        fill: #a9a8a8;
        padding: 10px;
      `
    } />,
      link:""},
    {icon: <MdAddCircleOutline className={
      css`
        width: 40px;
        height: 40px;
        border-radius: 10px;
        padding: 10px;
        fill: #a9a8a8;
      `
    } />,
      link:"add"},
    {icon: <FaSearch className={
      css`
        width: 40px;
        height: 40px;
        border-radius: 10px;
        fill: #a9a8a8;
        padding: 10px;
      `
    } />,
      link: ""}
  ];

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
          padding: 10px;
          background-color: #2c2c2c;
          border-radius: 10px;
          gap: 10px;
          background: var(--page-background);
        `
      }
    >
      
      {
        linkInfo.map((iconInfo, index) => (

          <div
            key={index}
            className={
              css`
                border-radius: 10px;
                background: var(--card-background);
                &:hover{
                  background: var(--card-hover);
                  
                }
              `
            }
          >
            <Link
              to={iconInfo.link}
            >
              {iconInfo.icon}
            </Link>

          </div>

        ))
      }

    </div>
  )
}

export default Sidebar;