import * as Phaser from "phaser";
import {GameConfig} from "./config";

class Game extends Phaser.Game {
  constructor () {
    super(GameConfig);
  }
}

export const game = new Game();

window.addEventListener("resize", () => {
  game.scale.refresh();
});
