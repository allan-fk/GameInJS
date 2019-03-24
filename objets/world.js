var world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer : null,
    positionDebut : null,
    score : 0,
    scoreText : null,


    initialiserWorld : function(){
    this.tilemap = jeu.scene.make.tilemap({key: 'mapJSON'});
    this.tileset = this.tilemap.addTilesetImage('Tilset_map', 'map');
    this.downLayer = this.tilemap.createStaticLayer('bot', this.tileset,0,0);
    this.worldLayer = this.tilemap.createStaticLayer('world', this.tileset,0,0);
    this.topLayer = this.tilemap.createStaticLayer('top', this.tileset,0,0);
    this.overlapLayer = this.tilemap.createDynamicLayer('overlap', this.tileset,0,0);

    this.positionDebut = this.tilemap.findObject('objet', obj => obj.name === "depart");
    this.worldLayer.setCollisionByProperty({Collides : true});

    jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels);

    var policeTitre = {
        fontSize : "20px",
        color : "#ffffff",
        fontFamily: '"Press Start 2P"',
    }
    this.scoreText = jeu.scene.add.text(16, 16, "Score : 0", policeTitre).setShadow(1, 1, 'rgba(0,0,0,0.5)', 3);
    this.scoreText.setScrollFactor(0);

    this.overlapLayer.setTileIndexCallback(50,this.collectGemme,this);
    this.overlapLayer.setTileIndexCallback(53,this.collectGemme,this);
    },

    gererColisions : function() {
        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer);
        jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer);
    },

    gererCamera : function(){
        jeu.scene.cameras.main.startFollow(jeu.player.aPlayer);
        jeu.scene.cameras.main.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels)
    },
    collectGemme : function(player, tile){
        this.genererParticules(tile.getCenterX(), tile.getCenterY());
        this.addScoreGemme(tile.properties.items);
        this.scoreText.setText("Score : " + this.score)

        this.overlapLayer.removeTileAt(tile.x, tile.y).destroy();
        // this.score += 10;
    },
    addScoreGemme : function(items){
        if(items === 'gemBronze'){
            this.score += 1;
        } else if(items ==='gemBleu'){
            this.score += 2;
        }
        console.log("Score :" + this.score);
    },
    genererParticules : function(posX, posY){
        var particules = jeu.scene.add.particles('spark');
        
        var confParticules = {
            x : posX,
            y : posY,
            speed : 1000,
            lifeSpan : {min : 10, max : 1},
            scale : {start : 0.01, end : 0.1},
            blendMode : "ADD"

        }
        var emitter = particules.createEmitter(confParticules);
        /*emitter.setPosition(posX,posY);
        emitter.setScale(0.05);
        emitter.setSpeed(500);
        emitter.setBlendMode(Phaser.BlendModes.ADD);*/
        jeu.scene.time.delayedCall(250, function() {
            particules.destroy();
        })
    }
}