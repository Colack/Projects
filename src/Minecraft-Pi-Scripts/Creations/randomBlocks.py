import mcpi.minecraft as minecraft
import time
from random import seed
from random import randint

# Create an instance of minecaaftPi

mc = minecraft.Minecraft.create()

# Print Starting Message

mc.postToChat("You hear rumblings from the Sky!")

# Make a flat surface

mc.setBlock(0, 35, 0, 1)
mc.setBlock(1, 35, 0, 1)
mc.setBlock(-1, 35, 0, 1)
mc.setBlock(0, 35, 1, 1)
mc.setBlock(1, 35, 1, 1)
mc.setBlock(-1, 35, 1, 1)
mc.setBlock(-1, 35, -1, 1)
mc.setBlock(1, 35, -1, 1)
mc.setBlock(0, 35, -1, 1)
mc.setBlock(0, 35 -2, 1)

# Wait 60 seconds

time.sleep(60)

mc.player.setPos(0, 36, 0, 1)

# Get player position

pos = mc.player.getPos()
    
x, y, z = mc.player.getPos()

# Place several blocks with wool on them

x = x + 3

# Stone

mc.setBlock(x, y, z, 1)

y = y + 1

# Red Wool

mc.setBlock(x, y, z, 35, 14)

# Get Player Pos

pos = mc.player.getPos()
    
x, y, z = mc.player.getPos()

x = x - 3

# Stone

mc.setBlock(x, y, z, 1)

y = y + 1

# Red Wool

mc.setBlock(x, y, z, 35, 14)

# Create randomBlocks

mc.postToChat("The ground will now become anything!")


i = randint(0, 247)

mc.setBlock(0, 35, 0, i)

mc.setBlock(1, 35, 0, i)

i = randint(0, 247)

mc.setBlock(-1, 35, 0, i)

i = randint(0, 247)

mc.setBlock(0, 35, 1, i)

i = randint(0, 247)

mc.setBlock(1, 35, 1, i)

i = randint(0, 247)

mc.setBlock(-1, 35, 1, i)

i = randint(0, 247)

mc.setBlock(-1, 35, -1, i)

i = randint(0, 247)

mc.setBlock(1, 35, -1, i)

i = randint(0, 247)

mc.setBlock(0, 35, -1, i)

i = randint(0, 247)

mc.setBlock(0, 35 -2, i)

mc.player.setPos(0, 36, 0, 1)

mc.events.clearAll()

mc.postToChat("The Skys have been blessed!")
