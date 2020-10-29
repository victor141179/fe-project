import React, { Component } from "react";
import axios from "axios";
import Comments from "./Comments";

class SingleArticle extends Component {
  state = {
    articleInfo: {},
  };
  componentDidMount() {
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

    return (
      <main>
        <h2>{articleInfo.title}</h2>
        <p>{articleInfo.body}</p>
        <p>{articleInfo.created_at}</p>
        <p>{articleInfo.votes} votes</p>
        <p>{articleInfo.topic}</p>
        <p>{articleInfo.author}</p>
        <p>{articleInfo.commentCount}</p>
        <Comments article_id={this.props.article_id} />
      </main>
    );
  }
}
export default SingleArticle;
