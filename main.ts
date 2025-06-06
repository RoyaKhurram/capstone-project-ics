namespace SpriteKind {
    export const character = SpriteKind.create()
}

//  Classes
//  Global Variables
//  Constants
//  Functions
function Character_choice() {
    let Character1: Sprite;
    for (let value of tiles.getTilesByType(assets.tile`
        character 1
        `)) {
        Character1 = sprites.create(assets.image`
            
            `, SpriteKind.character)
        tiles.placeOnTile(Character1, value)
    }
}

function levels() {
    
}

