import React, { useState } from "react";

import add from "/Home/FAQ/add.svg";
import remove from "/Home/FAQ/remove.svg";
const FAQCard = (props) => {
  const [Opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened(!Opened);
  };

  return (
    <div className="FAQCard" id="FAQCard">
      <div className="Question-Container" onClick={handleOpened}>
        <h2 className="Question">{props.Q}</h2>
        <div className="Image-Container">
          {Opened ? <img src={remove} alt="" /> : <img src={add} alt="" />}
        </div>
      </div>
      {Opened && (
        <div className="Answer-Container">
          <p>{props.A}</p>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
