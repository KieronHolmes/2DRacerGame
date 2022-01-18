import {Player} from '../Objects/Player';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

export class Game extends Phaser.Scene {
  /**
   * Player Instance
   * @private
   */
  private player: Player;

  /**
   * Phaser Track Layer
   *
   * @private
   */
  private trackLayer;

  /**
   * Phaser Background Layer
   *
   * @private
   */
  private backgroundLayer;

  /**
   * Phaser Current Level Number
   * @private
   */
  private level_number: integer;

  /**
   * Phaser Max Level Number
   *
   * @private
   */
  private readonly maxLevel: integer;

  init(data) {
    /**
     * Fetches the current level from parameters.
     */
    this.level_number = data.level_number;
  }
  constructor() {
    super(sceneConfig);
    /**
     * Sets the maximum level configured in the Tilemap.
     */
    this.maxLevel = 6;
  }
  preload() {

  }
  create() {
     const level = this.make.tilemap({key: `Level${this.level_number}`});
     const tileset = level.addTilesetImage('SpriteSheet', 'SpriteSheet');

    /**
     * Create Background Layer.
     */
    this.backgroundLayer = level.createLayer('Background', tileset);

    /**
     * Gets Player spawn point.
     */
    const spawnPoint = level.findObject(`Objects`, obj => obj.name === "SpawnPoint");

    /**
     * Determine Player Orientation
     */
    let playerAngle = 0;
    if (spawnPoint.properties[0].value === true) {
      playerAngle = 180;
    } else if (spawnPoint.properties[1].value === true) {
      playerAngle = 270;
    } else if (spawnPoint.properties[2].value === true) {
      playerAngle = 90;
    }

    console.log(playerAngle);

    /**
     * Create Track Layer and use Matter.JS for Collision Polygons.
     */
    this.trackLayer = level.createLayer(`Track`, tileset);
    this.trackLayer.setCollisionByProperty({collides:true});
    this.matter.world.convertTilemapLayer(this.trackLayer);

    /**
     * Create a new Player instance.
     */
    this.player = new Player(this,spawnPoint.x,spawnPoint.y,'car', playerAngle);

    /**
     * Display the current level.
     */
    this.add.text(0, 0, `Level ${this.level_number}`).setColor('#000000').setFontSize(24).setFontStyle('bold');
  }
  update() {
    /**
     * Run the player update sequence every frame.
     */
    this.player.update();

    /**
     * Get details of the tile the player is currently standing on.
     */
    const currentTile = this.trackLayer.getTileAtWorldXY(this.player.x, this.player.y);
    /**
     * Detects whether the player is on a tile with the "finishesGame" parameter set to true.
     * If the current level is the maximum, then a message is logged to console and game ends, otherwise, increments a level.
     */
    if(currentTile.properties.finishesGame == true) {
      if(this.level_number === this.maxLevel) {
        console.log("Maximum playable level");
        this.scene.stop();
      }
      else {
        const nextLevel = this.level_number + 1;
        this.scene.start('Game',{level_number: nextLevel});
      }
    }
  }
}
