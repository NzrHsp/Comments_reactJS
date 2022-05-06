import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <span>Are you sure?</span>
          <br />
          <strong>Or you arent?</strong>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail text="Hola!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail text="Bonjour!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail text="Hello!" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
