import React from "react";
const EditExpensePage = props => {
  console.log(props);
  return <div>edit page {props.match.params.id}</div>;
};

export default EditExpensePage;
