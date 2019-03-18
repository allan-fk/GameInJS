var config = {
    type : Phaser.AUTO,
    width : '50px',
    height : '50px',
    scene : {
        preload : preload,
        create : create,
        update : update,
    },
    physics : {
        default : "arcade",
        arcade : {
            gravity : {y : 500}
        }
    }
}

const game = new Phaser.Game(config);