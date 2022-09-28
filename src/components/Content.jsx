import Styles from "../styles.module.sass";
import { useSelector, useDispatch } from "react-redux";
import { setStatus } from "../redux/typingSlice";
import { useEffect, useState } from "react";

function Content() {
  const dispatch = useDispatch();
  let [listCount, setListCount] = useState(0);
  const words = useSelector((state) => state.typing.words);
  const count = useSelector((state) => state.typing.count);

  useEffect(() => {
    dispatch(setStatus({ id: words[listCount].id, status: "pending" }));
  }, [listCount]);

  //Controling if the text contain whitespace
  const containsWhitespace = (str) => {
    return /\s/.test(str);
  };

  const catchKey = (e) => {
    // Submit the answer
    if (containsWhitespace(e.target.value)) {
      catchHandle(e);
      e.target.value = "";
    }
  };

  const catchHandle = (e) => {
    let answer = e.target.value.replace(/\s/g, "");

    if (listCount !== count) {
      if (words[listCount].english === answer) {
        dispatch(setStatus({ id: words[listCount].id, status: "correct" }));
      } else {
        dispatch(setStatus({ id: words[listCount].id, status: "incorrect" }));
      }
      setListCount(listCount + 1);
    } else {
      //Reset the wordlist
      setListCount(0);
      //  time set 60 again
      //  new words
    }
  };

  return (
    <>
      <div className="d-flex flex-column bg-light rounded gap-3 mt-3">
        <div className={Styles.typing_box}>
          <div className={Styles.typing_content}>
            {words.map((words, index) => (
              <span
                className={
                  words.status === "pending"
                    ? Styles.highlighted
                    : words.status === "correct"
                    ? Styles.correct
                    : words.status === "incorrect"
                    ? Styles.incorrect
                    : ""
                }
                key={index}
              >
                {words.english}
              </span>
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
