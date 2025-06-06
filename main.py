@namespace
class SpriteKind:
    character = SpriteKind.create()
# Classes
# Global Variables
# Constants
# Functions
def Character_choice():
    for value in tiles.get_tiles_by_type(assets.tile("""
        character 1
        """)):
        Character1 = sprites.create(assets.image("""
            
            """), SpriteKind.character)
        tiles.place_on_tile(Character1, value)
def levels():
    pass