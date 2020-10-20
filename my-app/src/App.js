import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/Topic";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="/" />
        <TopicList path="/topics/:topic-slug" />
      </Router>
    </div>
  );
}

export default App;
