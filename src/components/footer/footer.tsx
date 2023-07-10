import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { getCurrentYear } from "../../utils/date";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <a
          href="https://github.com/Code-and-Design-Collective"
          target="_blank"
          class={styles.anchor}
        >
          <span>Made with ♡ by Code and Design Collective</span>
          <span class={styles.spacer}>|</span>
          <span>{getCurrentYear()}</span>
        </a>
      </div>
    </footer>
  );
});
