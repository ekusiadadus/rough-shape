import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./board.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const kifu = useSignal("position startpos moves 7g7f 3c3d 8h2b+ 3a2b");
  return (
    <div class="container center">
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/shogi-player@1.0.1"
      ></script>
      <shogi-player-wc
        sp_body={kifu.value}
        sp_turn="3"
        sp_controller="true"
        sp_slider="true"
      ></shogi-player-wc>
    </div>
  );
});
