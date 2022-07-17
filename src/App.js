import React from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
