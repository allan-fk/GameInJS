var controlConfig = {
    cursor : null,

    initCursor : function() {
        this.cursor = jeu.scene.input.keyboard.createCursorKeys();
    },

    values : function() {
        var returnValues = {
                camera : jeu.scene.cameras.main,
                left : this.cursor.left,
                right : this.cursor.right,
                up : this.cursor.up,
                down : this.cursor.down,
                speed : 0.5
        }
        return returnValues;
    }
}