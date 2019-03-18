var config = {
    type : Phaser.AUTO,
    backgroundColor : '#7FDBFF',
    width : '100px',
    height : '100px',
    scene : {
        preload : preload,
        create : create,
        update : update,
    },
    physics : {
        default : "arcade",
        arcade : {
            gravity : {
                y : 500
            }
        }
    }
}

const game = new Phaser.Game(config);