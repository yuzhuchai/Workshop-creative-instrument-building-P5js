let sliderR
function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB)
  
	sliderColor = createSlider(0,255)
  text('color:', 0, 10)
  sliderColor.position(10,10)
 
	sliderD = createSlider(3,10)
  text('size', 0, 60)
  sliderD.position(10,60)

  welcome()
  
  
}

function draw() {
  noStroke()
  let pickColor = sliderColor.value()

  let size = sliderD.value()
  size += random(10)
  fill(pickColor,100,100,0.5)
  if (mouseIsPressed){
		circle(mouseX, mouseY, size)
	} 
}

function welcome() {
  console.log('welcome to my tool')
}