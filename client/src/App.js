import React from "react";
import Header from "./Components/Header";
import BookingsContainer from "./Containers/BookingsContainer";
import "./App.css";

function App() {

  return (
    <div className="app">
      <Header/>
      <BookingsContainer className="container"/>
    </div>
  );
};

export default App;
