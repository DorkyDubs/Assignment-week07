//this is form compo
import { useState } from "react";
import "./Form.css";
import { useEffect } from "react";
export default function Form() {
  // we need state to save the formData
  // ?formData = {
  //  ?   key:value,
  //  ?   key:value
  // ?}
  const [formValues, setFormValues] = useState({
    username: "",
    post_text: "",
    category_id: "",
  });

  //! dont need useEffecthere , maybe something else

  // a handlesubmitfunc
  // fucntion handleSubmit (){
  //     //? somethign to handle default behaviour of form

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formValues);
    fetch(
      "http://localhost:https://assignment-week7-server.onrender.com/posts" ||
        "http://localhost:5454/getcategories5454/posts",
      {
        //! //?
        //? https://assignment-week7-server.onrender.com/posts
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      }
    );
    setFormValues({
      username: "",
      post_text: "",
      category_id: "",
    });
  }

  //     //? also something that fetches the POST end point

  //? a function to handle change of User input

  function handleInputChange(event) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  const [data, setData] = useState([]);
  //?Reusing this method but useEffct might not be needed
  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(
        "http://localhost:https://assignment-week7-server.onrender.com/getcategories" ||
          "http://localhost:5454/getcategories5454/getcategories"
      );
      const fetchedData = await response.json();
      setData(fetchedData);
    }

    // "https://assignment-week7-server.onrender.com/getcategories" ||
    //       "http://localhost:5454/getcategories"  //? template for struct

    fetchMessages();
  }, []);
  //we need to add the values from the initial state
  //nned to sset the properties for the new bject.
  // they key is the taregrt name, value is the target value

  //     {/* //need to have form here with 2 events, on to submit and one to track changes
  // //! remember to be consistent with how you name the name attirbute. the name attirbute in the input should be the same as the database column where you are storing the data */}

  return (
    <>
      <form className="form-box" onSubmit={handleSubmit}>
        {/* <div> */}

        {/* </div>
        <div> */}
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          //! now being passed as part of the object
          value={formValues.username}
          onChange={handleInputChange}
          //!connects  handler to  onChange event
          //maybe later
        />
        {/* </div> */}
        <label htmlFor="categorySelect">Category: </label>
        <select
          required
          // type="options"
          id="category"
          name="category_id"
          value={formValues.category_id}
          onChange={handleInputChange}
        >
          <option value=""> Please select</option>
          {data.map((cat) => (
            <option value={cat.id} key={cat.id} className="option-box">
              {cat.category_name}
            </option>
          ))}
        </select>
        <label htmlFor="post_text">
          <h3>Post:</h3>
        </label>
        <textarea
          type="text"
          id="post_text"
          className="post-text"
          name="post_text"
          value={formValues.post_text}
          onChange={handleInputChange}
        />
        <div>
          <button type="submit">Share</button>
        </div>
      </form>
      <p>Thank you {formValues.username}</p>
    </>
  ); //end of return
} //end of Form function
