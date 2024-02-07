import React from 'react';
import './App.css';
import { css } from "@emotion/css";
import Sidebar from "./components/sidebar";
import MusicList from "./components/music-list";
import MusicDetail from "./components/music-detail";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/layout";
import AddMusic from "./components/add-music";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route element={<Layout />} path={"/"} >
            <Route index element={<MusicList />}/>
            <Route element={<AddMusic />} path={"add"} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
