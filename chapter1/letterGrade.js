// Page 24
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an
// integer representing a score from 0 to 100. Those getting 90+ get an 'A', 80-89 'B', 70-79 'C',
// 60-69 is a 'D', and lower than 60 receive 'F'. For example, given 88, you should log "Score: 88.
// Grade: B". Given the score 61, log the score "Score: 61. Grade: D".

function letterGrade(score) {
	var grade;
	if (score >= 0 && score <= 100) {	
		if (score < 60) {
			grade = "F";
		} else if(score < 70) {
			grade = "D";
		} else if(score < 80) {
			grade = "C";
		} else if(score < 90) {
			grade = "B";
		} else if(score < 100) {
			grade = "A";
		}
	console.log("Score: " + score + ". Grade: " + grade);
	} else if(score >= 100) {
		console.log("Woah, you got a score of " + score + "!? You're such an overachiever. Your grade is an A.");
	} else {
		console.log("Either you did so poorly in this class you managed to get a score less than 0, or I've accidentally logged your grade as something other than a number!");
	}
}

letterGrade(61);
letterGrade(88);
letterGrade(125);
letterGrade("beer");