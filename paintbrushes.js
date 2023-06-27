function pen() {
	// set the color and weight of the stroke 
  stroke(0, 0, 0, 255)
	strokeWeight(2)
  
	// draw a line from current mouse point to previous mouse point
  line(mouseX, mouseY, pmouseX, pmouseY)
}

function marker() {
	// set the color and brush style
  fill(255, 200, 103, 40)
  noStroke()
  
	// draw a circle at the current mouse point, with diameter of 50 pixels
  circle(mouseX, mouseY, 50)
}

function beads() {
  // set the color and brush style
  fill(185, 83, 213, 180)
  noStroke()

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2
  const midY = (mouseY + pmouseY) / 2

  // draw a circle at the midpoint, with distance as its diameter
  circle(midX, midY, distance)
}

function rainbowBeads() {
	// find the hue, which is a number from 0 to 360
	const hue = (frameCount * 10) % 360
  
	// set the color and brush style
	const hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`)
	fill(hsbaColor)
	noStroke()

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2
  const midY = (mouseY + pmouseY) / 2

  // draw a circle at the midpoint, with distance as its diameter
  circle(midX, midY, distance)
}

function wiggle() {
  // set the color and brush style
  stroke(255, 120, 0, 255)
  strokeWeight(2)
  noFill()

  // find the distance between the current and previous mouse points
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY)

  // find the midpoint between the current and previous mouse points
  const midX = (mouseX + pmouseX) / 2
  const midY = (mouseY + pmouseY) / 2

  // find the angle of the direction the mouse is moving in
  const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)

  // find which way to flip the arc
  const flip = (frameCount % 2) * PI

  // draw the arc as a half circle 
  arc(midX, midY, distance, distance, angle + flip, angle + PI + flip)
}

function toothpick() {
  // set the color and brush style
  fill(60, 180, 0, 150)
  noStroke()

  // move the origin (0,0) to the current mouse point
  translate(mouseX, mouseY)

  // find the angle of the direction the mouse is moving in
  // then rotate the canvas by that angle
  const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)
  rotate(angle)

  // set minumum width and height of the toothpick-shaped ellipse
	const minSize = 4
	
	// find the distance between current mouse point and previous mouse point
	const distance = dist(mouseX, mouseY, pmouseX, pmouseY)
	
	// draw the toothpick-shaped ellipse
	ellipse(0, 0, distance * 2 + minSize, minSize)
}

function fountainPen() {
  // set the color and brush style
  stroke(0, 0, 0, 255)
  strokeWeight(1)
	const width = 5

  // set the number of times we lerp the line in the for loop
  const lerps = 16

	// repeat the slanted line with lerping
  for (let i = 0; i <= lerps - 1; i++) {

		// find the lerped x and y coordinates between the mouse points
    const x = lerp(mouseX, pmouseX, i / lerps)
    const y = lerp(mouseY, pmouseY, i / lerps)

		// draw a slanted line
    line(x - width, y - width, x + width, y + width)
  }
}

function splatter() {
  // set the color and brush style
  stroke(frameCount % 255, 180, 255, 160)
  strokeWeight(4)

  // set the number of times we lerp the point in the for loop
  const lerps = 8

	// repeat the point with lerping
  for (let i = 0; i < lerps; i++) {

		// find lerped x and y coordinates of the point
    const x = lerp(mouseX, pmouseX, i / lerps + lerps)
    const y = lerp(mouseY, pmouseY, i / lerps + lerps)

		// draw a point
    point(x, y)
  }
}

function hatching() {
  // set the color and brush style
  stroke(15, 15, 255, 220)
  strokeWeight(1)

  // calculate the speed of the mouse
  let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

  // make a vector by inverting X and Y values
  const vector = createVector(mouseY - pmouseY, mouseX - pmouseX)
  
  // set the vector magnitude (the line length) based on the mouse speed
  vector.setMag(speed / 2)
  
  // set the number of times we lerp the line
  const lerps = 3

  // repeat the line with lerping
  for (let i = 0; i < lerps; i++) {

		// find the lerped X and Y coordinates
    const x = lerp(mouseX, pmouseX, i / lerps)
    const y = lerp(mouseY, pmouseY, i / lerps)

		// draw a line
    line(x - vector.x, y - vector.y, x + vector.x, y + vector.y)
  }
}

function sprayPaint() {
	// set the color and brush style
  stroke(0, 0, 0, 255)
  strokeWeight(1)

	// find the speed of the mouse movement
  const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

	// set minimum radius and spray density of spraypaint brush
	const minRadius = 10
	const sprayDensity = 80
  
  // find radius of the spray paint brush and radius squared
  const r = speed + minRadius
  const rSquared = r * r

	// set the number of times we lerp the points in the for loop
	const lerps = 10

  // repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {
    
    // find the lerped X and Y coordinates
    const lerpX = lerp(mouseX, pmouseX, i / lerps)
    const lerpY = lerp(mouseY, pmouseY, i / lerps)
    
    // draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {

      // pick a random position within the circle
      const randX = random(-r, r)
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX)

      // draw the random point
      point(lerpX + randX, lerpY + randY)
    }
  }
}