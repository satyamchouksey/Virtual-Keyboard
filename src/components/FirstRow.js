import React,{useState, useEffect} from "react";
import './CommonRow.css'

const FirstRow = ({
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
    if (entry.toUpperCase() === "DELETE") {
      settypedContent((prev) => {
        return prev.slice(0, -1);
      });
    } else settypedContent((prev) => prev + entry);
    handleChangeRandom();
  };
  useEffect(() => {
    const createButton = () => {
      let buttonContent = charRandomList.slice(0, 13).map(buttonObj => {
        return {
          primary: buttonObj.primary,
          secondary: buttonObj.secondary,
          type: buttonObj.type
        };
      })
      buttonContent.push({
          primary: "delete",
          type: "commonButton deleteButton",
        })
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

export default FirstRow;
