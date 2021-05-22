import React, { useState, useEffect } from "react";
import "./CommonRow.css";

const FourthRow = ({
  settypedContent,
  capsLock,
  shift,
  handleChangeShift,
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
    if (entry.toUpperCase() === "SHIFT") {
      handleChangeShift();
    } else settypedContent((prev) => prev + entry);
    handleChangeRandom();
  };
  useEffect(() => {
    const createButton = () => {
      let buttonContent = [];
      buttonContent.push({
        primary: "shift",
        type: "commonButton shiftButton",
      });
      let tempList = charRandomList.slice(37, 47).map((buttonObj) => {
        return {
          primary: buttonObj.primary,
          secondary: buttonObj.secondary,
          type: buttonObj.type,
        };
      });

      buttonContent = [...buttonContent, ...tempList];
      buttonContent.push({
        primary: "shift",
        type: "commonButton shiftButton",
      });
      const rowButtons = buttonContent.map((button) => {
        return (
          <div onClick={() => eventHandler(button)} className={button.type}>
            {button.secondary ? <span>{button.secondary}</span> : ""}
            {button.primary ? <span>{button.primary}</span> : ""}
          </div>
        );
      });
      setcontent(rowButtons);
    };
    createButton();
  }, [capsLock, shift, charRandomList, eventHandler]);
  return <div className="RowContainer">{content}</div>;
};
export default FourthRow;
