//here fetch post from server which is getting post from the db

import { useEffect } from "react";
import { useState } from "react";

export default function Posts() {
  const [data, setData] = useState([]);
  //?need state to save values of post and we need useEffect to fetch the data
  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(
        "https://assignment-week7-server.onrender.com/getposts" ||
          "http://localhost:4545/getposts"
      );
      const ourData = await response.json();
      setData(ourData);
      console.log(ourData);
    }

    fetchMessages();
  }, []);

  return (
    <>
      {data.map((entry) => (
        <div key={entry.post_id} className="post-box">
          <div>
            <h4>{entry.category_name}</h4>
            <div>
              <h4>User: {entry.username} </h4>
            </div>
          </div>
          <h3 classname="all-post">{entry.post_text}</h3>
        </div>
      ))}
    </>
  );
}
