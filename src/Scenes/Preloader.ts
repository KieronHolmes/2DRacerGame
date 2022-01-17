const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Preloader",
};

export class Preloader extends Phaser.Scene {
  private height: number;
  private width: number;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.height = this.game.canvas.height;
    this.width = this.game.canvas.width;

    this.add.sprite(0, 0, 'background').setOrigin(0, 0);
    this.add.image(this.width / 2, this.width / 4, "logo");

    const loading_img = this.add.sprite(this.width/2, (this.height/2) + 100, 'loading-background').setOrigin(0.5, 0.5);
    const progress = this.add.graphics();
    this.load.on('progress', function(value) {
      progress.clear();
      progress.fillStyle(0xffde00, 1);
      progress.fillRect(loading_img.x-(loading_img.width*0.5)+20, loading_img.y-(loading_img.height*0.5)+10, 540 * value, 25);
    });

    // Load other assets here
    this.load.multiatlas('SpriteSheet', 'Assets/Map/SpriteSheet.json', 'Assets/Map');
    this.load.tilemapTiledJSON('tilemap','Assets/Map/Racetrack-02.json');
    this.load.image('car','Assets/Map/car_red_small_2.png');

  }

  public create() {
    this.scene.start('Game',{level: 1});
  }
}
