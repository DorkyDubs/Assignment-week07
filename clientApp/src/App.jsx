import { useState } from "react";
import Form from "./pages/Form";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import TopicPosts from "./pages/TopicPosts";
import NoSuchTopicPage from "./pages/NoSuchTopicPage";
import Posts from "./pages/Posts";
import AddCat from "./pages/AddCat";
HomePage;
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/1" element={<TopicPosts />} />{" "}
        {/*//? try share a page, make individual if not */}
        <Route path="/2" element={<TopicPosts />} />
        <Route path="/3" element={<TopicPosts />} />
        <Route path="4" element={<TopicPosts />} />
        <Route path="/5" element={<TopicPosts />} />
        {/* //!might need to snakeCase ^ this here and in database and routes */}
        <Route path="/6" element={<TopicPosts />} />
        <Route path="/*" element={<NoSuchTopicPage />} />
        <Route path="/getposts" element={<Posts />} />
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/addcat" element={<AddCat />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
