import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="qwik">
          <img src="/ChatGPT_logo.svg.webp" alt="GPT" width="40" height="40" />
        </a>
      </div>
      <div class={styles.title}>
        <h1>ChatGPT戦</h1>
        <h2>Shogi vs ChatGPT</h2>
      </div>
    </header>
  );
});
