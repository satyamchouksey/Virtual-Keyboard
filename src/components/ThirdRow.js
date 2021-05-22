import React, { useState, useEffect } from "react";
import "./CommonRow.css";

const ThirdRow = ({
  settypedContent,
  capsLock,
  shift,
  handleChangeCaps,
  charRandomList,
  handleChangeRandom
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
    if (entry.toUpperCase() === "CAPS LOCK")
      handleChangeCaps();
    else if (entry.toUpperCase() === "RETURN")
      settypedContent((prev) => prev+'\n');
    else
      settypedContent((prev) => prev + entry);
    handleChangeRandom();
  };
  useEffect(() => {
    const createButton = () => {
    let buttonContent = [];
    buttonContent.push({
      primary: "caps lock",
      type: "commonButton capsButton",
    });
    let tempList = charRandomList.slice(26, 37).map((buttonObj) => {
      return {
        primary: buttonObj.primary,
        secondary: buttonObj.secondary,
        type: buttonObj.type,
      };
    });
  
    buttonContent = [...buttonContent, ...tempList];
    buttonContent.push({
      primary: "return",
      type: "commonButton returnButton"
    });
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
export default ThirdRow;
