// Libraries
import React from "react";
import { Route, Routes } from "react-router-dom";
// Component
import { Layout } from "./assets/Components/Layout/Layout";
import { Home } from "./assets/Components/Home/Home";
// Pages
import { Albums } from "./assets/Pages/Albums/Albums";
import { Comments } from "./assets/Pages/Comments/Comments";
import { Photos } from "./assets/Pages/Photos/Photos";
import { Posts } from "./assets/Pages/Posts/Posts";
import { ToDos } from "./assets/Pages/ToDos/ToDos";
import { Users } from "./assets/Pages/Users/Users";
// CSS
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<ToDos />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

// npm i react-router-dom axios redux react-redux redux-thunk react-loading-indicators
