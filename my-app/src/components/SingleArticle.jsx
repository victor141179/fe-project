import React, { Component } from "react";
import axios from "axios";

class SingleArticle extends Component {
  state = {
    articleInfo: {},
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get(
        `https://vn-news-app.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data }) => {
        this.setState({ articleInfo: data.article });
      });
  }

  render() {
    const { articleInfo } = this.state;
    console.log(articleInfo);
    return (
      <main>
        <h2>{articleInfo.title}</h2>
        <p>{articleInfo.body}</p>
        <p>{articleInfo.created_at}</p>
        <p>{articleInfo.votes} votes</p>
        <p>{articleInfo.topic}</p>
        <p>{articleInfo.author}</p>
        <p>{articleInfo.commentCount}</p>
      </main>
    );
  }
}
export default SingleArticle;
