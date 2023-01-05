import React, { useState } from "react";
import { SiAcer } from "react-icons/si";
import { SlCup } from "react-icons/sl";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.headerComponent}>
      <SlCup />
      <p>Bed & Breakfast</p>
    </div>
  );
}
