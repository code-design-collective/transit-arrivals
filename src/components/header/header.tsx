import { component$ } from "@builder.io/qwik";

import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <h1>Transit Arrivals</h1>
    </header>
  );
});
