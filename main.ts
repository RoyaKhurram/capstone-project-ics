namespace SpriteKind {
    export const character = SpriteKind.create()
}

//  Classes
class CharacterSprite extends sprites.ExtendableSprite {
    static character: number
    private ___character_is_set: boolean
    private ___character: number
    get character(): number {
        return this.___character_is_set ? this.___character : CharacterSprite.character
    }
    set character(value: number) {
        this.___character_is_set = true
        this.___character = value
    }
    
    public static __initCharacterSprite() {
        CharacterSprite.character = 0
    }
    
    constructor(image: Image, kind: number, characterr: number) {
        super(image, kind)
        this.character = characterr - 1
    }
    
}

CharacterSprite.__initCharacterSprite()

//  Global Variables
let hero : Sprite = null
//  Constants
// Arrays
let list = [assets.image`character1`, assets.image`character2`, assets.image`character3`, assets.image`character4`, assets.image`character5`, assets.image`character6`]
//  Functions
function Character_choice() {
    let Character1: CharacterSprite;
    let character2: CharacterSprite;
    let character3: CharacterSprite;
    let character4: CharacterSprite;
    let character5: CharacterSprite;
    let character6: CharacterSprite;
    game.splash("Choose a character")
    tiles.setCurrentTilemap(tilemap`character choice`)
    
    for (let value of tiles.getTilesByType(assets.tile`character 1`)) {
        Character1 = new CharacterSprite(list[0], SpriteKind.character, 1)
        Character1.sayText(":)")
        tiles.placeOnTile(Character1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value1 of tiles.getTilesByType(assets.tile`character 2`)) {
        character2 = new CharacterSprite(list[1], SpriteKind.character, 2)
        character2.sayText(":)")
        tiles.placeOnTile(character2, value1)
        tiles.setTileAt(value1, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`character 3`)) {
        character3 = new CharacterSprite(list[2], SpriteKind.character, 3)
        character3.sayText(":)")
        tiles.placeOnTile(character3, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`character4`)) {
        character4 = new CharacterSprite(list[3], SpriteKind.character, 4)
        character4.sayText(":)")
        tiles.placeOnTile(character4, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`character 5`)) {
        character5 = new CharacterSprite(list[4], SpriteKind.character, 5)
        character5.sayText(":)")
        tiles.placeOnTile(character5, value4)
        tiles.setTileAt(value4, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`character 6`)) {
        character6 = new CharacterSprite(list[5], SpriteKind.character, 6)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.character, function on_overlap(player: Sprite, character: CharacterSprite) {
    player.setImage(list[character.character])
})
// Main
levels()
