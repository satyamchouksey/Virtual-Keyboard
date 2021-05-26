import React, { useState, useEffect } from "react";
import "./CommonRow.css";

const FifthRow = ({
  settypedContent
}) => {
  const [content, setcontent] = useState([]);
 const eventHandler = (button) => {
    settypedContent((prev) => {
      return prev + " ";
    });
 };
  useEffect(() => {
    const createButton = () => {
      let buttonContent = [
        {
          primary: "",
          type: "commonButton spaceButton",
        },
      ];
      const rowButtons = buttonContent.map((button) => {
        return (
          <div
            onClick={(event) => eventHandler(button)}
            className={button.type}
          >
            {button.primary ? <span>{button.primary}</span> : ""}
          </div>
        );
      });
      setcontent(rowButtons);
    };
    createButton();
  }, [eventHandler]);
  return <div className="RowContainer">{content}</div>;
};
export default FifthRow;
