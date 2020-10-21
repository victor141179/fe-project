import React, { Component } from "react";
import Axios from "axios";

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
    console.log(this.props);
    return (
      <main>
        {articles.map((article) => {
          return <section key={article.article_id}>{article.title}</section>;
        })}
      </main>
    );
  }
}
export default ArticleList;
