import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.home_icon}>
          <img src="img/note-list.svg" alt="intro-pic" />
        </div>
        <div className={styles.home_header}>
          <h1>
            Welcome to <span>My Todo</span>
          </h1>
          <p>
            My todo helps you to stay organized and perform your tasks much
            faster
          </p>
        </div>
        <div className={styles.home_button}>
          <div onClick={() => router.push("/todo")}>
            <button>Start</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
