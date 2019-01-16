# Penrosy

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
  
 ## MVPs 
 
   - Basic visuals and an interactive interface
   - User can drag, rotate, and place shapes
   - User can clear canvas
   - Page describes Penrose tiles 
   
 


