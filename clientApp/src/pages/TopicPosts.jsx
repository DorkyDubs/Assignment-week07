//? we want to get relevant topic data and display here
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function TopicPosts() {
  //?need to do a paaram check and fetch relevant data then display

  let location = useLocation();
  const [data, setData] = useState([]);
  // console.log(location.pathname);
  useEffect(() => {
    // const thisThing = ;
    // setUrlNo(thisThing);
    // console.log(urlNo);
    async function fetchPosts() {
      const response = await fetch(
        `http://localhost:https://assignment-week7-server.onrender.com${location.pathname}` ||
          `http://localhost:5454/getcategories5454${location.pathname}`
      );
      const ourData = await response.json();
      setData(ourData);
    }

    fetchPosts();
  }, [location]);

  return (
    <>
      <h1> yo</h1>
      {data.map((entry) => (
        <div key={entry.post_id} className="post-box">
          <div>
            <h3>
              {entry.username} Subject: {entry.category_name}
            </h3>
          </div>
          <h4>{entry.post_text}</h4>
        </div>
      ))}
    </>
  );
}
