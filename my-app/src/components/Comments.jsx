import React, { Component } from "react";
import Axios from "axios";

class Comments extends Component {
  state = {
    comments: [],
    sort_by: "created_at",
    newSortValue: "",
  };
  componentDidMount() {
    Axios.get(
      `https://vn-news-app.herokuapp.com/api/articles/${this.props.article_id}/comments?sort_by=${this.state.sort_by}`
    ).then((res) => {
      const commentsInfo = res.data.comments;
      this.setState({ comments: commentsInfo });
      // comments key given a value of the retrieved commentInformation
    });
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.state.sort_by !== previousState.sort_by) {
      Axios.get(
        `https://vn-news-app.herokuapp.com/api/articles/${this.props.article_id}/comments?sort_by=${this.state.sort_by}`
      ).then((res) => {
        const commentsInfo = res.data.comments;
        this.setState({ comments: commentsInfo });
      });
    }
  }
  handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    this.setState({ sort_by: value });
  };
  changeSort = (event) => {
    const { newSortValue } = this.state;
    this.setState({ sort_by: newSortValue });
  };
  render() {
    const { comments } = this.state;
    console.log(this.state);
    return (
      <section>
        <label for="sort_by">chose sort method:</label>
        <select name="sort_by" id="sort_by" onChange={this.handleChange}>
          <option value="created_at">created_at</option>
          <option value="votes">votes</option>
          <option value="comment_count">comment_count</option>
        </select>
        <button onClick={() => this.changeSort()}>sort</button>

        {comments.map((comment) => {
          // const { comment_id, body, author_id } = comment;
          return (
            <li>
              <p>{comment.comment_id}</p>
              <p>{comment.body}</p>
              <p>{comment.author_id}</p>
              <p>{comment.created_at}</p>
            </li>
          );
        })}
      </section>
    );
  }
}

export default Comments;
