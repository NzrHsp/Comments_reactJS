import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        name={faker.name.findName()}
        date={Intl.DateTimeFormat(faker.locale).format(faker.date.recent())}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        name={faker.name.findName()}
        date={Intl.DateTimeFormat(faker.locale).format(faker.date.recent())}
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        name={faker.name.findName()}
        date={Intl.DateTimeFormat(faker.locale).format(faker.date.recent())}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
