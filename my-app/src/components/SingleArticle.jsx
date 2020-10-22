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
    console.log(this.props.article_id);
    const { articleInfo } = this.state;
    return (
      <main>
        <h2>{articleInfo.article_title}</h2>
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
