import React, { Component } from "react";
import axios from "axios";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    axios
      .get("https://vn-news-app.herokuapp.com/api/topics")
      .then(({ data: { topics } }) => {
        this.setState({ topics });
      });
  }
  render() {
    const { topics } = this.state;
    return (
      <div>
        {topics.map((topic) => {
          return (
            <Link to={`/topics/${topic.slug}`}>
              {" "}
              <button>{topic.slug}</button>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default NavBar;
