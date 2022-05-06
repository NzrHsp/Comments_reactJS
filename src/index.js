import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail text="Hola!" />
      <CommentDetail text="Bonjour!" />
      <CommentDetail text="Hello!" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
