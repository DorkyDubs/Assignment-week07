import { Link, Route, Routes } from "react-router-dom";
import TopicPosts from "./TopicPosts";
import { useEffect, useState } from "react";
import "./AllTopics.css";
export default function AllTopics() {
  const [data, setData] = useState([]);
  //?Reusing this method but useEffct might not be needed
  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(
        "https://assignment-week7-server.onrender.com/getcategories" ||
          "http://localhost:4545/getcategories"
      );
      const fetchedData = await response.json();
      setData(fetchedData);
    }

    fetchMessages();
  }, []);

  return (
    <>
      {data.map((entry) => (
        <div key={entry.id} className="topic-box">
          <Link to={`/${entry.id}`} className="topic-link">
            {" "}
            {entry.category_name}
          </Link>
          <Routes>
            <Route path={`/${entry.id}`} element={<TopicPosts />} />
          </Routes>{" "}
        </div>
      ))}
    </>
  );
}
