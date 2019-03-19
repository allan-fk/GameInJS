var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer : null,


    initialiserWorld : function(){
    this.tilemap = jeu.scene.make.tilemap({key: 'mapJSON'});
    this.tileset = this.tilemap.addTilesetImage('Tilset_map', 'map');
    this.downLayer = this.tilemap.createStaticLayer('bot', this.tileset,0,0);
    this.worldLayer = this.tilemap.createStaticLayer('world', this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer('top', this.tileset,0,0);
    this.overlapLayer = this.tilemap.createDynamicLayer('overlap', this.tileset,0,0);

    this.worldLayer.setCollisionByProperty({Collides : true});

    jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels);
    },

    gererColisions : function() {
        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer);
    },

    gererCamera : function(){
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels)
    }
}