//?Considering mobile first we'd want to organise this into side menu that only appears when clicked. Likely need a div to implement, and an icon. check group project for tip on how to do

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopicPosts from "../pages/TopicPosts";
import NoSuchTopicPage from "../pages/NoSuchTopicPage";
import Posts from "../pages/Posts";
import HomePage from "../pages/Home";
import Form from "../pages/Form";
// make catergories Headers.

export default function Nav() {
  return (
    <>
      <Link to="/1">Sport</Link>
      {"  - "}
      {/* //!investigate ability to get these from database and map onto nav from data-points */}
      <Link to="/2">Travel</Link> {" - "} <Link to="/3">Weather</Link>
      {"     - "}
      <Link to="/4">Food</Link>
      {"  - "}
      <Link to="/5">Movies & TV</Link>
      {"  - "}
      <Link to="/6">Music</Link>
      <div>
        <Link to="/getposts"> View All</Link>
        {"-"}
        <Link to="/form">Leave Post</Link>
        {"-"}
        <Link to="/addcat">New Topic</Link>
        {"-"}
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
