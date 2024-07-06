//? we want to get relevant topic data and display here
import { useState } from "react";
import { useEffect } from "react";
export default function TopicPosts() {
  //?need to do a paaram check and fetch relevant data then display
  const nameForCategory = window.location.pathname;
  console.log(nameForCategory);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`http://localhost:7878${nameForCategory}`);
      const ourData = await response.json();
      setData(ourData);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <h1> yo</h1>
      {data.map((entry) => (
        <div key={entry.id} className="post-box">
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
