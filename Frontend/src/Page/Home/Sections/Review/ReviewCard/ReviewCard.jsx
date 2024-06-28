import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="ReviewCard" id="ReviewCard">
      <div className="name">
        <h4>{props.data.Name}</h4>
      </div>
      <div className="title">
        <p>{props.data.Title}</p>
      </div>
      <div className="review">
        <p>"{props.data.Review}"</p>
      </div>
    </div>
  );
};

export default ReviewCard;
