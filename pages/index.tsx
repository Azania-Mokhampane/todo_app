import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
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
      <LandingPage />
    </div>
  );
};

export default Home;
