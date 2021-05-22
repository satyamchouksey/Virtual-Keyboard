import React, { useState, useEffect } from "react";
import "./CommonRow.css";

const SecondRow = ({
  settypedContent,
  capsLock,
  shift,
  charRandomList,
  handleChangeRandom,
}) => {
  const [content, setcontent] = useState([]);
  const eventHandler = (button) => {
    let entry = capsLock
      ? shift && button.secondary
        ? button.secondary.toUpperCase()
        : button.primary.toUpperCase()
      : shift && button.secondary
      ? button.secondary.toLowerCase()
      : button.primary.toLowerCase();

    if (entry.toUpperCase() === "TAB") {
      settypedContent((prev) => {
        return prev + "    ";
      });
    } else settypedContent((prev) => prev + entry);
    handleChangeRandom();
  };
  useEffect(() => {
    const createButton = () => {
      let buttonContent = [];
      buttonContent.push({
        primary: "tab",
        type: "commonButton tabButton",
      });
      let tempList = charRandomList.slice(13, 26).map((buttonObj) => {
        return {
          primary: buttonObj.primary,
          secondary: buttonObj.secondary,
          type: buttonObj.type,
        };
      });
      buttonContent = [...buttonContent, ...tempList]
      const rowButtons = buttonContent.map((button) => {
        return (
          <div
            onClick={(event) => eventHandler(button)}
            className={button.type}
          >
            {button.secondary ? <span>{button.secondary}</span> : ""}
            {button.primary ? <span>{button.primary}</span> : ""}
          </div>
        );
      });
      setcontent(rowButtons);
    };
    
    createButton();
  }, [capsLock, shift, charRandomList]);
  return <div className="RowContainer">{content}</div>;
};

export default SecondRow;
