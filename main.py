@namespace
class SpriteKind:
    character = SpriteKind.create()
# Classes
class CharacterSprite(sprites.ExtendableSprite):
    character: number = 0
    def __init__(self, image: Image, kind: number, characterr: number):
        super().__init__(image, kind)
        self.character = characterr - 1    
        
# Global Variables
hero: Sprite = None
current_level=0
# Constants
#Arrays
list = [assets.image("""character1"""), assets.image("""character2"""), assets.image("""character3"""), assets.image("""character4"""), assets.image("""character5"""), assets.image("""character6""")]
# Functions
def Character_choice():
    game.splash("Choose a character")
    tiles.set_current_tilemap(tilemap("""character choice"""))
    scene.set_background_color(9)
    global hero
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
    if current_level== 0:
        Character_choice()
    if current_level == 1: 
        sprites.destroy_all_sprites_of_kind(SpriteKind.character)
        scene.set_background_color(0)
        tiles.set_current_tilemap(tilemap("""transition"""))
    if current_level == 2:
        if hero.image== list[0]:
            dream1()
        elif hero.image == list[1]:
            dream2()
        elif hero.image == list[2]:
            dream3()
        elif hero.image == list [3]:
            dream4()
        elif hero.image == list [4]:
            dream5()
        elif hero.image == list [5]:
            dream6()
    if current_level == 3:
        pass
def dream1():
    tiles.set_current_tilemap(tilemap("""level"""))
    game.splash("You are in Hope's dream")
    game.splash("She is in a nightmare about school")
    game.splash("You must escape the school in order to escape the dream!")
    game.splash("good luck!")
def dream2():
    gravity= 380
    current_level=0
    jumpspeed=-178
    playerspeed= 80
    playerspeedy= 0
    scene.set_background_color(9)
    tiles.set_current_tilemap(tilemap("""dream2"""))
    for value3 in tiles.get_tiles_by_type(assets.tile("""2playerstart""")):
            controller.move_sprite(hero, playerspeed, playerspeedy)
            hero.ay= gravity
            scene.camera_follow_sprite(hero)
            tiles.place_on_tile(hero, value3)
            tiles.set_tile_at(value3, assets.tile("""transparency16"""))
    def on_event_pressed():
        numberofjumps= 0
        if hero.vy==0:
            hero.vy= jumpspeed
            numberofjumps += 1
    controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed)
    def on_overlap_tile2(sprite, location):
        sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    scene.on_overlap_tile(SpriteKind.player, assets.tile("""2nextlevel"""), on_overlap_tile2)
    def on_overlap_tile3(sprite, location):
        pass
    scene.on_overlap_tile(SpriteKind.player, assets.tile("""falling"""), on_overlap_tile3)
def dream3():
    tiles.set_current_tilemap(tilemap("""dream3"""))
def dream4():
    tiles.set_current_tilemap(tilemap("""dream4"""))
def dream5():
    tiles.set_current_tilemap(tilemap("""dream5"""))
def dream6():
    tiles.set_current_tilemap(tilemap("""dream6"""))
#EventHandler
def on_overlap(player: sprite, character: CharacterSprite):   
    player.set_image(list[character.character])
sprites.on_overlap(SpriteKind.player, SpriteKind.character, on_overlap)
def on_overlap_tile(sprite, location):
    global current_level
    current_level += 1
    levels()
scene.on_overlap_tile(SpriteKind.player, assets.tile("""start game"""), on_overlap_tile)
def on_overlap_tile1(sprite, location):
    global current_level
    current_level += 1
    levels()
scene.on_overlap_tile(SpriteKind.player, assets.tile("""Transition"""), on_overlap_tile1)
#Main
levels()