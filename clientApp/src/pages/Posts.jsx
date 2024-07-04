//here fetch post from server which is getting post from the db

import { useEffect } from "react";

export default function POsts() {
  //?neednstate to save values of post and we need useEffect to fetch the data

  useEffect();
  // we need a function to get the posts.
  //function is async and uses fetch
  // once data fetched set state variable to be the posts data

  //? can have function in useEffect or have speerate fucntion outside to get posts and call function in useEffect hook

  return (
    <>
      {/* in return want a list of posts */}
      POsts
    </>
  );
}
