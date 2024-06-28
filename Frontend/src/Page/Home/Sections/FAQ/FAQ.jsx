import React from "react";

import "./FAQ.css";
import Title from "../../../../Component/Title/Title";
import FAQCard from "./Card/FAQCard";

const FAQ = () => {
  return (
    <div className="FAQ" id="FAQ">
      <Title
        title="Frequently Asked Question"
        subtitle="All the most frequent questions we have received."
      />
      <div className="Container FAQ">
        <FAQCard
          Q="How do you keep track of all visitors attending?"
          A="We have a dashboard in which the organizer are able to view how many user have confirm their attendance and how many users didn't confirm their attendace yet. Our dashboard also provides and overview of how many adult,children and senior population that are attending to the event."
        />
        <FAQCard
          Q="Can your service save me money?"
          A="Definitely! In our organizer dashboard, you can set the amount of spent on food per head. The system will automatically calculate the total amount needed depending on the amount of Visitors confirming their attendance. The System will also display an estimated value for the vistiors who hasn't confimr yet."
        />
        <FAQCard
          Q="Do i have to choose my plan first?"
          A="No! For First time user, we will automatically set the plan to Basic. However, user can anytime subscribe to the more premium package once the account has been fully set up."
        />
      </div>
    </div>
  );
};

export default FAQ;
