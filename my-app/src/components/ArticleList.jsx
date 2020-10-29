import React, { Component } from "react";
import Axios from "axios";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    Axios.get("https://vn-news-app.herokuapp.com/api/articles").then(
      ({ data: { articles } }) => {
        this.setState({ articles });
      }
    );
  }
  render() {
    const { articles } = this.state;
    const listTitle = "ALL";

    return (
      <main>
        <h3>{listTitle} articles</h3>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    );
  }
}
export default ArticleList;
