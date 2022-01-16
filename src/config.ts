import Phaser from "phaser";
import Scenes from "./Scenes";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: "Phaser Starter Kit",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    parent: "phaser-game",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        height: 960,
        width: 640,
    },
    scene: Scenes,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        },
    },
}