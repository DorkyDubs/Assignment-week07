import { useEffect } from "react";
import { useState } from "react";

export default function AddCat() {
  const [formValues, setFormValues] = useState({
    catName: "",
  });

  function handleInputChange(event) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formValues);
    fetch(
      "https://assignment-week7-server.onrender.com/addcats" ||
        "http://localhost:5454/addcats",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      }
    );
    setFormValues({
      catName: "",
    });
  }
  return (
    <>
      <h3>Have something to say but no place to put it?</h3>
      <form className="cat-box" onSubmit={handleSubmit}>
        <label htmlFor="catName">Add New Category: </label>
        <input
          type="text"
          id="catName"
          name="catName"
          value={formValues.catName}
          onChange={handleInputChange}
        />{" "}
        <button type="submit">Share</button>{" "}
      </form>
    </>
  );
}
