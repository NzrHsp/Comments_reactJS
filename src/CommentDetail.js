import React from "react";

import { faker } from "@faker-js/faker";

console.dir(faker);

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="user" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <div className="metadata">
          <span className="date">
            {Intl.DateTimeFormat(faker.locale).format(faker.date.recent())}
          </span>
        </div>
        <div className="text">How artistic!</div>
      </div>
    </div>
  );
};
export default CommentDetail;
