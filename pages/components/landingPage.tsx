import React from "react";
import styles from "../../styles/Home.module.css";

function LandingPage() {
  return (
    <>
      {/* <h1 className="text-center h-15">Nav Bar</h1> */}
      <div className={styles.home_container}>
        <div className={styles.home_icon}>
          <img src="img/note-list.svg" alt="intro-pic" />
        </div>
        <div>
          <h1>
            Welcome to <span>My Todo</span>
          </h1>
          <p>
            My todo helps you to stay organized and perform your tasks much
            faster
          </p>
        </div>
        <div className={styles.home_button}>
          <button>Start</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
