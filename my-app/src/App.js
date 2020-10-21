import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { Router } from "@reach/router";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topics/:topic_slug" />
      </Router>
    </div>
  );
}

export default App;
