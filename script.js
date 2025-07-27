//your JS code here. If required.
// Get the element with the id "line"
const line = document.getElementById('line');

// Variable to track the current rotation angle
let angle = 0;

// Function to update the rotation of the line
function rotateLine() {
    angle += 2;  // Increase angle by 2 degrees
    if (angle >= 360) {
        angle = 0;  // Reset the angle after a full rotation (optional)
    }
    
    // Apply the rotation to the line using transform
    line.style.transform = `rotate(${angle}deg)`;
}

// Use setInterval to call rotateLine every 20 milliseconds
setInterval(rotateLine, 20);
