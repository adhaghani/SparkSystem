import React, { useEffect, useState } from "react";

import Title from "../../../../Component/Title/Title";

import ReviewCard from "./ReviewCard/ReviewCard";
import "./Review.css";

import Data from "./Data.json";

const Review = () => {
  return (
    <div className="Review" id="Review">
      <Title
        title="Our Review"
        subtitle="Listen to what our customer has to say."
      />
      <div className="Container Review">
        <div className="Section-Review">
          {Data.map((item) => {
            return <ReviewCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
