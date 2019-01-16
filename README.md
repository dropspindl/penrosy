# Penrosy

<img src='https://i.imgur.com/BDrUeJ0.png' align='center'/>

Penrose tiling apps generally focus solely on the math, ignoring aesthetics completely. Some don't even have any color at all!

Just because Penrose Tiles are mathy, doesn't mean they can't be beautiful too! I created Penrosy to allow people to explore the beauty of Penrose tiles in an open-ended fashion

<img src="https://i.imgur.com/TM4bH1F.png" />


## Penrose Tiles- Background
 

An aperiodic tiling is one that can cover an infinite plane with no gaps, but NEVER REPEAT! It is always different. 
The most famous aperiodic tilings were discovered by Roger Penrose in the 1970s. 
Of the Penrose tile sets, the most common is P2, the kite and dart. 

With the addition of a simple rule that you can't insert a kite into a dart such that you make a rhombus, 
these two shapes can be laid like a mosaic in a never-ending, never-repeating pattern. 

Learn more about Penrose tiles [here](http://nautil.us/issue/13/symmetry/impossible-cookware-and-other-triumphs-of-the-penrose-tile)


## Technologies

  - Javascript 
  - CSS 
  - Canvas (to make tile shape) 
 
  I developed Penrosy using straight Javascript with Canvas in order to strengthen my skills in that language. 
  
## Building the Tiles 
 
 The tiles are drawn using Canvas. It was important for me to get them mathematically correct rather than just using an image or approximate points. 

One difficulty I encountered is that the tiles are drawn using a starting x and y coordinate point. However, I want both the color gradient and the mouse abilities to be focused on the center of the tile, NOT on a specific vertices. This meant that I ended up having to write a decent amount of code to find the center, given the x, y, size, and angle, and to find the x or y coordinate given the center (and size, and angle). Were I to start this project over (or do a lot of refactoring), I would have chosen to make the x and y coordinates the center of the tile, and adjust my formulae for drawing the tiles accordingly. 

Below is coding for the Dart class, where you can see that since my draw function starts at vertices (x, y) I have created functions to get to and from the center. These functions, using different formulae are written on the kite class also, which allows me to call it on any tile. 

<img src='https://i.imgur.com/OCPmqCw.png' />

## Game Loop 

The game is constantly running an animation loop which draws all the tiles in the ALL_TILES array.

When you click the 'Create Kite' or 'Create Dart' button, a new object of that type is created and placed in the array. When you move or modify that tile, it changes that tile's instance variables. 

Clearing the canvas sets the ALL_TILES array length to 0, thus removing all the set tiles. 

# Mouse actions 

There are listeners that check for mouse down, mouse move, and mouse up. 

When you mouse down, the game iterates through the ALL_TILES array to check if the mouse is within 30 pixels of the center of a tile. If so, that tile is pushed into the draggingTile and currentTile arrays (which always have a length of 0 or 1). Also, mousing down adds the mouse move listener. 

Mouse up removes the mouse move listener and resets the draggingTile array to be empty.  

Mouse move looks at the location of the mouse and uses the aforementioned formula to figure out what x and y should be, given the mouse's position as center. It then resets the tile's instance variables of x and y to be that. 

In the code below, you can see my mouse down function. There was a tricky bug here where the place that needed to be clicked to make the function run was above and to the left of the actual shape. This turned out to be because the mouse listener was getting it's coordinates relative to the whole screen, rather than the canvas itself. This was solved with the getMousePos function which return the mouse's position relative to the bounding canvas. 

<img src='https://i.imgur.com/8WuZSR2.png' />




  
 ## MVPs 
 
   - Basic visuals and an interactive interface
   - User can drag, rotate, and place shapes
   - User can clear canvas
   - Page describes Penrose tiles 
   
 


