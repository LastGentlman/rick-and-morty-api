import React from 'react';
import styles from './Home.module.css';
import SearchBar from '../components/SearchBar'

export default function Home() {

  return (
    <div className={styles.container}>
      <h1>WALCOME</h1>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem dolore nostrum tempore cum? Unde atque eaque dicta, excepturi facilis ullam minus odit nihil accusamus ea sequi, voluptatibus modi id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias earum cumque possimus, quae odio blanditiis, sit velit incidunt eius a architecto soluta cupiditate cum nobis reiciendis deleniti obcaecati pariatur.
      </div>
      <SearchBar />
    </div>
  )
};