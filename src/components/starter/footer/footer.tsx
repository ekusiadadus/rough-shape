import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <a
        href="https://twitter.com/ekusiadadus"
        target="_blank"
        class={styles.anchor}
      >
        by @ekusiadadus a.k.a ⛄ 絶望ドメイン ⛄
        <span class={styles.spacer}>|</span>
        <span>{serverTime.value.date}</span>
      </a>
    </footer>
  );
});
