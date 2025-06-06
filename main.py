@namespace
class SpriteKind:
    character = SpriteKind.create()
# Classes
class CharacterSprite(sprites.ExtendableSprite):
    def __init__(self, image: Image, kind: number, characterr: number):
        super().__init__(image, kind)
        character = characterr - 1
# Global Variables
# Constants
#Arrays
list = [assets.image("""character1"""), assets.image("""character2"""), assets.image("""character3"""), assets.image("""character4"""), assets.image("""character5"""), assets.image("""character6""")]
# Functions
def Character_choice():
    game.splash("Choose a character")
    tiles.set_current_tilemap(tilemap("""character choice"""))
    for value in tiles.get_tiles_by_type(assets.tile("""character 1""")):
        Character1: CharacterSprite = CharacterSprite(list[0], SpriteKind.character, 1)
        Character1.say_text(":)")
        tiles.place_on_tile(Character1, value)
        tiles.set_tile_at(value, assets.tile("""transparency16"""))
    for value1 in tiles.get_tiles_by_type(assets.tile("""character 2""")):
        character2 : CharacterSprite= CharacterSprite(list[1], SpriteKind.character, 2)
        character2.say_text(":)")
        tiles.place_on_tile(character2, value1)  
        tiles.set_tile_at(value1, assets.tile("""transparency16"""))
    for value2 in tiles.get_tiles_by_type(assets.tile("""character 3""")):
        character3 : CharacterSprite= CharacterSprite(list[2], SpriteKind.character, 3)
        character3.say_text(":)")
        tiles.place_on_tile(character3, value2)
        tiles.set_tile_at(value2, assets.tile("""transparency16"""))
    for value3 in tiles.get_tiles_by_type(assets.tile("""character4""")):
        character4: CharacterSprite= CharacterSprite(list[3], SpriteKind.character, 4)
        character4.say_text(":)")
        tiles.place_on_tile(character4, value3)
        tiles.set_tile_at(value3, assets.tile("""transparency16"""))
    for value4 in tiles.get_tiles_by_type(assets.tile("""character 5""")):
        character5: CharacterSprite= CharacterSprite(list[4], SpriteKind.character, 5)
        character5.say_text(":)")
        tiles.place_on_tile(character5, value4)
        tiles.set_tile_at(value4, assets.tile("""transparency16"""))
    for value5 in tiles.get_tiles_by_type(assets.tile("""character 6""")):
        character6: CharacterSprite= CharacterSprite(list[5], SpriteKind.character, 6)
        character6.say_text(":)")
        tiles.place_on_tile(character6, value5)
        tiles.set_tile_at(value5, assets.tile("""transparency16"""))
    for value6 in tiles.get_tiles_by_type(assets.tile("""soul start""")):
        hero= sprites.create(assets.image("""soul"""), SpriteKind.player)
        controller.move_sprite(hero)
        scene.camera_follow_sprite(hero)
        tiles.place_on_tile(hero, value6)
        tiles.set_tile_at(value6, assets.tile("""transparency16"""))
def levels():
    Character_choice()
#EventHandler

#Main
levels()