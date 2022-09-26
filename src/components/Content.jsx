import React from "react";
import Styles from "../styles.module.sass";

function Content() {
  return (
    <>
      <div className="d-flex flex-column bg-light rounded gap-3  mt-3">
        <div className={Styles.typing_box}>
          <div className={Styles.typing_content}>
            <span className={Styles.highlighted}>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.correct}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.wrong}>Test</span>
            <span className={Styles.correct}>Test</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column bg-dark rounded gap-3 py-3 mt-3">
        <div className="d-flex justify-content-center gap-3">
          <input className="w-75" type="text" />
          <button className="btn border text-light">Restart</button>
        </div>
      </div>
    </>
  );
}

export default Content;
