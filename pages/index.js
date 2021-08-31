import Head from 'next/head';
import Router from 'next/router';

import firebase from '../firebase.js';
import { getAuth } from "firebase/auth";

import Splash from '../components/splash/Splash.jsx';

import styles from '../styles/Home.module.css'
import {Heading} from "@chakra-ui/react";

export default function Home() {
  return (
    <div className = {styles.container}>
      <Head>
        <title>Gamut</title>
        <link rel = "icon" href = "/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Splash/>
      </main>
    </div>
  )
}