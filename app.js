// set up all the global variables
const toolboxWidth = document.querySelector('section.toolbox').offsetWidth
let canvas = null
let bgColor = '#fbf8f3'
let selectedTool = 'pen'

function setup() {
    // set up the canvas
    canvas = createCanvas(windowWidth - toolboxWidth, windowHeight)
    canvas.parent(select('section.canvas'))
    background(bgColor)
}

function draw() {
	// check if mouse button is pressed and mouse is hovering over canvas section
  if (mouseIsPressed && mouseX <= windowWidth - toolboxWidth) {
    // draw on the canvas with the selected painting tool function
    window[selectedTool]()
  }
}