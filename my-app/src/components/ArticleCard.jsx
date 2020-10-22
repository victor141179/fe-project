import React from "react";
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  console.log(props);
  return (
    <Link to={`article/${props.article_id}`}>
      <section>{props.article_title}</section>
    </Link>
  );
};

export default ArticleCard;
