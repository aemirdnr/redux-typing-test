import React from "react";
import { useSelector } from "react-redux";
import Styles from "../styles.module.sass";

function Content() {
  const words = useSelector((state) => state.typing.words);

  //Controling if the text contain whitespace
  const containsWhitespace = (str) => {
    return /\s/.test(str);
  };

  const catchKey = (e) => {
    // Submit the answer
    if (containsWhitespace(e.target.value)) {
      e.target.value = "";
    } else {
      console.log("Waiting to submit...");
    }
  };

  return (
    <>
      <div className="d-flex flex-column bg-light rounded gap-3 mt-3">
        <div className={Styles.typing_box}>
          <div className={Styles.typing_content}>
            {words.map((words, index) => (
              <span key={index}>{words.english}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column bg-dark rounded gap-3 py-3 mt-3">
        <div className="d-flex justify-content-center gap-3">
          <input className="w-75" type="text" onChange={catchKey} />
          <button className="btn border text-light">Restart</button>
        </div>
      </div>
    </>
  );
}

export default Content;
