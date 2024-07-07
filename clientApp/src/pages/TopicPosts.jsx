//? we want to get relevant topic data and display here
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./TopicPosts.css";
export default function TopicPosts() {
  //?need to do a paaram check and fetch relevant data then display

  let location = useLocation();
  const [postData, setPostData] = useState([]);

  // console.log(location.pathname);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        `https://assignment-week7-server.onrender.com${location.pathname}` ||
          `http://localhost:4545${location.pathname}`
      );
      const ourData = await response.json();
      setPostData(ourData);
    }

    fetchPosts();
  }, [location]);

  const [data, setData] = useState([]);
  //?Reusing this method but useEffct might not be needed
  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch("http://localhost:4545/getcategories");
      const fetchedData = await response.json();
      setData(fetchedData);
    }

    fetchMessages();
  }, [location]);

  const pathName = location.pathname;
  const pathId = pathName.substring(1, 2);
  const pathIndex = parseInt(pathId) - 1;
  const topicOBJ = data[pathIndex];
  const topicName = topicOBJ.category_name;

  return (
    <>
      <h1>{topicName}</h1>
      {postData.map((entry) => (
        <div key={entry.post_id} className="post-box">
          <div>
            <h3>User: {entry.username} </h3>
          </div>
          <h4>{entry.post_text}</h4>
        </div>
      ))}
    </>
  );
}
