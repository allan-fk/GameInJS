var jeu = {
    scene : null,
    world : world,
    player : player,
    controls : null,
    controlConfig : controlConfig,
}

function preload(){
    jeu.scene = this;
    jeu.scene.load.image('map','assets/map/tilesheet.png');
    jeu.scene.load.tilemapTiledJSON('mapJSON', 'assets/map/map_json.json')
    jeu.scene.load.atlas('player', 'assets/images/playerSprites.png', 'assets/json/player_Atlas.json')
}

function create(){
    /* MAP */
    jeu.world.initialiserWorld();
    /* PLAYER  / PLAYER ANIME */
    jeu.player.initialiserPlayer();
    jeu.player.generatePlayerAnimations();
    // jeu.player.aPlayer.anims.play("playerWalk");
    /* CURSOR MOVE */
    jeu.controlConfig.initCursor()
    //jeu.controls = new Phaser.Cameras.Controls.FixedKeyControl(jeu.controlConfig.values());
    jeu.world.gererColisions();
    jeu.world.gererCamera();

}

function update(time, delta){
    //jeu.controls.update(delta);
    jeu.player.gererDeplacement()
}