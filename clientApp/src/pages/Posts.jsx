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
  console.log(data);
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

//   useEffect(
//   // we need a function to get the posts.

//   fetch("http://localhost:7878/posts", {
//     //! //?
//     //? https://assignment-week7-server.onrender.com/posts
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(result),
//   });
//   const userPost = await response.json();
// );
//   //function is async and uses fetch
//   // once data fetched set state variable to be the posts data

//   //? can have function in useEffect or have speerate fucntion outside to get posts and call function in useEffect hook

//   return (
//     <>
//       {/* in return want a list of posts */}
//       Posts
//     </>
//   );
// }
