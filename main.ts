namespace SpriteKind {
    export const character = SpriteKind.create()
}

//  Classes
class CharacterSprite extends sprites.ExtendableSprite {
    constructor(image: Image, kind: number, character: number) {
        super(image, kind)
    }
    
}

//  Global Variables
//  Constants
// Arrays
let list = [assets.image`character1`, assets.image`character2`, assets.image`character3`, assets.image`character4`, assets.image`character5`, assets.image`character6`]
//  Functions
function Character_choice() {
    let Character1: Sprite;
    let character2: Sprite;
    let character3: Sprite;
    let character4: Sprite;
    let character5: Sprite;
    let character6: Sprite;
    let hero: Sprite;
    game.splash("Choose a character")
    tiles.setCurrentTilemap(tilemap`character choice`)
    for (let value of tiles.getTilesByType(assets.tile`character 1`)) {
        Character1 = sprites.create(list[0], SpriteKind.character)
        Character1.sayText(":)")
        tiles.placeOnTile(Character1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value1 of tiles.getTilesByType(assets.tile`character 2`)) {
        character2 = sprites.create(list[1], SpriteKind.character)
        character2.sayText(":)")
        tiles.placeOnTile(character2, value1)
        tiles.setTileAt(value1, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`character 3`)) {
        character3 = sprites.create(list[2], SpriteKind.character)
        character3.sayText(":)")
        tiles.placeOnTile(character3, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`character4`)) {
        character4 = sprites.create(list[3], SpriteKind.character)
        character4.sayText(":)")
        tiles.placeOnTile(character4, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`character 5`)) {
        character5 = sprites.create(list[4], SpriteKind.character)
        character5.sayText(":)")
        tiles.placeOnTile(character5, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`character 6`)) {
        character6 = sprites.create(list[5], SpriteKind.character)
        character6.sayText(":)")
        tiles.placeOnTile(character6, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`soul start`)) {
        hero = sprites.create(assets.image`soul`, SpriteKind.Player)
        controller.moveSprite(hero)
        scene.cameraFollowSprite(hero)
        tiles.placeOnTile(hero, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
    }
}

function levels() {
    Character_choice()
}

// EventHandler
// Main
levels()
