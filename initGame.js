var config = {
    type : Phaser.AUTO,
    backgroundColor : '#7FDBFF',
    width : '100%',
    height : '100%',
    scene : {
        preload : preload,
        create : create,
        update : update,
    },
    physics : {
        default : "arcade",
        arcade : {
            gravity : {
                y : 1800
            }
        }
    }
}

const game = new Phaser.Game(config);