# Creative Drawing Instrument Building With P5js

[Fernando Ramallo](https://fernandoramallo.github.io/2019/)

[Flickgame](https://www.flickgame.org/)

[Sok-stroies by Sokpop](https://sok-stories.com/?WUFF)

[Pen, Memory](https://pen-memory.herokuapp.com/) 

[some more games]


## [Creative Instruments](https://www.merriam-webster.com/dictionary/instrument)
![useage of the word instrument over time](src/instrument.png)

### What Is A Creative Instrument? 





## [P5.js](https://p5js.org/download/)

[https://p5js.org/](https://p5js.org/)

[Online Editor](https://editor.p5js.org/)



<!-- talk about scope?????? -->
### [functions](https://p5js.org/reference/#/p5/function)
a set of statements that performs a task or calculates a value. To use a function you must <b>define</b> it somewhere in the <b>scope</b> from which you wish to <b>call</b> it. 

#### scope
the current context of execution. 
Global and local

#### defining a function 
```javascript 
function welcome(){
	console.log("welcome to my drawing instrument!")
}
```
#### calling a function
```javascript 
welcome()
```

### [setup](https://p5js.org/reference/#/p5/setup)

#### setup function is called once when the program starts.
```javascript
function setup(){
	createCanvas(500,500)
	background(0);
}
```

### [draw](https://p5js.org/reference/#/p5/draw)
#### draw function continuously executes the lines of code contained inside its block until the program is stopped. 
```javascript
function draw(){
	circle(250,250,40)
}
```

### declare variable
```javascript 
let d = random(400)
```

### [if Statemenets](https://p5js.org/reference/#/p5/if-else)
#### if statement executes the code if a specified condition is ture. 
```javascript 
		if (){

		} else {

		}
```



### [mouseIsPressed](https://p5js.org/reference/#/p5/mouseIsPressed)
#### is a boolean value, is TRUE when mouse is pressed, and false when mouse is released

```javascript

```

### [input](https://p5js.org/reference/#/p5/input)




## code Refrences

#### [circle](https://p5js.org/reference/#/p5/circle)
#### [random](https://p5js.org/reference/#/p5/random)
#### [frameRate](https://p5js.org/reference/#/p5/frameRate)
#### [mouseX](https://p5js.org/reference/#/p5/mouseX), [mouseY](https://p5js.org/reference/#/p5/mouseY)