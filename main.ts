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
let current_level = 0
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
    scene.setBackgroundColor(9)
    
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
    if (current_level == 0) {
        Character_choice()
    }
    
    if (current_level == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.character)
        scene.setBackgroundColor(0)
        tiles.setCurrentTilemap(tilemap`transition`)
    }
    
    if (current_level == 2) {
        if (hero.image == list[0]) {
            dream1()
        } else if (hero.image == list[1]) {
            dream2()
        } else if (hero.image == list[2]) {
            dream3()
        } else if (hero.image == list[3]) {
            dream4()
        } else if (hero.image == list[4]) {
            dream5()
        } else if (hero.image == list[5]) {
            dream6()
        }
        
    }
    
    if (current_level == 3) {
        
    }
    
}

function dream1() {
    tiles.setCurrentTilemap(tilemap`level`)
    game.splash("You are in Hope's dream")
    game.splash("She is in a nightmare about school")
    game.splash("You must escape the school in order to escape the dream!")
    game.splash("good luck!")
}

function dream2() {
    tiles.setCurrentTilemap(tilemap`dream2`)
}

function dream3() {
    tiles.setCurrentTilemap(tilemap`dream3`)
}

function dream4() {
    tiles.setCurrentTilemap(tilemap`dream4`)
}

function dream5() {
    tiles.setCurrentTilemap(tilemap`dream5`)
}

function dream6() {
    tiles.setCurrentTilemap(tilemap`dream6`)
}

// EventHandler
sprites.onOverlap(SpriteKind.Player, SpriteKind.character, function on_overlap(player: Sprite, character: CharacterSprite) {
    player.setImage(list[character.character])
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`start game`, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    
    current_level += 1
    levels()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Transition`, function on_overlap_tile1(sprite: Sprite, location: tiles.Location) {
    
    current_level += 1
    levels()
})
// Main
levels()
