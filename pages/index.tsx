import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
// import LandingPage from "../components/LandingPage/LandingPage";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
   const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta
          name="description"
          content="A Todo app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
};

export default Home;
