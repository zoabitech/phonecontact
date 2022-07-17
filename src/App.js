import React from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
