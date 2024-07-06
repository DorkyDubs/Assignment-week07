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
      <Link to="/category/sport">Sport</Link>
      {"  - "}
      {/* //!investigate ability to get these from database and map onto nav from data-points */}
      <Link to="/category/travel">Travel</Link> {" - "}{" "}
      <Link to="/category/weather">Weather</Link>
      {"     - "}
      <Link to="/category/food">Food</Link>
      {"  - "}
      <Link to="/category/movies & television">Movies & TV</Link>
      {"  - "}
      <Link to="/category/music">Music</Link>
      <div>
        <Link to="/getposts"> View All</Link>
        {"-"}
        <Link to="/form">Leave Post</Link>
        {"-"}
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/category/sport" element={<TopicPosts />} />{" "}
        {/*//? try share a page, make individual if not */}
        <Route path="/category/travel" element={<TopicPosts />} />
        <Route path="/category/weather" element={<TopicPosts />} />
        <Route path="/category/food" element={<TopicPosts />} />
        <Route path="/category/movies & television" element={<TopicPosts />} />
        {/* //!might need to snakeCase ^ this here and in database and routes */}
        <Route path="/category/music" element={<TopicPosts />} />
        <Route path="/category/*" element={<NoSuchTopicPage />} />
        <Route path="/getposts" element={<Posts />} />
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
