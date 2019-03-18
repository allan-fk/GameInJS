var player = {
    aPlayer : null,
    isJumping : null,

    initialiserPlayer : function(){
        this.aPlayer = jeu.scene.physics.add.sprite(200,200,"player", "adventurer_stand");
        this.aPlayer.setCollideWorldBounds(true);
    },
    generatePlayerAnimations : function(){
        jeu.scene.anims.create ({
            key : "playerWalk",
            frames : game.anims.generateFrameNames("player", {prefix:'adventurer_walk', start:1, end:2}),
            frameRate : 15,
            repeat : -1
        });
        jeu.scene.anims.create ({
            key : "playerIdle",
            frames : [{key : 'player', frame : 'adventurer_stand'}, {key : 'player', frame : 'adventurer_idle'}],
            frameRate : 3,
            repeat : -1
        });
    },

    gererDeplacement : function(){
        const touche = jeu.controlConfig.cursor
        if(touche.left.isDown){
            this.aPlayer.setVelocityX(-300);
            this.aPlayer.anims.play("playerWalk", true);
            this.aPlayer.setFlip(true, false);
        } else if (touche.right.isDown){
            this.aPlayer.setVelocityX(+300);
            this.aPlayer.anims.play("playerWalk", true);
            this.aPlayer.setFlip(false, false);
        } else {
            this.aPlayer.setVelocityX(0);
            this.aPlayer.anims.play("playerIdle", true);
            if (touche.down.isDown) {
                this.aPlayer.setTexture('player', 'adventurer_duck'); 
            }
        }  if (touche.up.isDown && this.aPlayer.body.onFloor()){
            this.aPlayer.setVelocityY(-700);
        } if (this.aPlayer.body.onFloor()) {
            this.isJumping = false;
        } else {
            this.isJumping = true;
        }
        if(this.isJumping){
            this.aPlayer.setTexture('player', 'adventurer_jump');
        }
    } 
}
