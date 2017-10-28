//Based on user input, determine where the player's location is. Output is new position and player stature.
//WASD controls(modifies x and y), space and x (modify z position, crouch and stand)
//start at origin, unless passed an initial position 
//mouse movements?

function movementTracker(str, arr) {
	if(!arr) {
		arr = [0, 0, 0];
	}
	var position = arr;
	var x = position[0];
	for(var i = 0; i < str.length; i++) {
		switch(str[i].toUpperCase()) {
			case 'W':
				position[1] += 1;
				break;
			case 'A':
				position[0] -= 1;
				break;
			case 'S':
				position[1] -= 1;
				break;
			case 'D':
				position[0] += 1;
				break;
			case ' ':
				position[2] += 1;
				break;
			case 'X':
				position[2] -= 1;
				break;
			default:
				break;
		}
	}
	switch(position[2] > 0) {
		case false:
			position[2] = "on the ground";
			break;
		default:
			position[2] = "flying";
			break;
	}
	return position;
}

var string1 = "wAsd";
var string2 = "wwssadadx x";
var string3 = "wwwwwwwwwwddddddd           ";

console.log(movementTracker(string1));
console.log(movementTracker(string2));
console.log(movementTracker(string3));