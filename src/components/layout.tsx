import {css} from "@emotion/css";
import Sidebar from "./sidebar";
import MusicList from "./music-list";
import MusicDetail from "./music-detail";
import React from "react";
import {Outlet} from "react-router-dom";
import EditForm from "./edit-form";
import {useAppSelector} from "../hooks/hooks";
import DeleteDialogBox from "./DeleteDialogBox";


const Layout = ()=>{

  return (
    <div
      className={
        css`
          display: grid;
          grid-template-columns: 70px 2fr 1fr;
          place-items: center;
          gap: 10px;
          height: 100%;
          background-color: #1a1a1a;
          color: white;
          position: relative;
        `
      }
    >
      <Sidebar />
      <Outlet />
      <MusicDetail />

      <EditForm />

      <DeleteDialogBox />

    </div>
  )
}

export default Layout;