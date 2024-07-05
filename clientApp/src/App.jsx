import { useState } from "react";
import Form from "./pages/Form";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
}

export default App;
