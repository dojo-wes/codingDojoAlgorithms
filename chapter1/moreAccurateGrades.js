// Page 24
// For an additional challenge, add '-' signs to scores in the bottom two percent of A, B, C, and D scores,
// and '+' signs to the top two percent of B, C and D scores (sorry, Mr.Cerise never gives an A+). Given
// 88, console.log "Score: 88. Grade: B+". Given 61 log "Score: 61. Grade: D-". 

function accLetterGrade(score) {
	var grade;
	if(score >= 0 && score <= 100) {
		if(score < 60) {
			grade = "F";
		} else if(score < 70) {
			if(score <= 62) {
				grade = "D-";
			} else if(score < 70) {
				grade = "D+";
			} else {
				grade = "D";
			}
		} else if(score < 80) {
			if(score <= 72) {
				grade = "C-";
			} else if(score < 80) {
				grade = "C+";
			} else {
				grade = "C";
			}
		} else if(score < 90) {
			if(score <= 82) {
				grade = "B-";
			} else if(score < 90) {
				grade = "B+";
			} else {
				grade = "B";
			}
		} else if(score < 100) {
			if(score <= 92) {
				grade = "A-";
			} else {
				grade = "A";
			}
		}
		console.log("Score: " + score + ". Grade: " + grade);
	} else if(score >= 100) {
		console.log("Woah, you got a score of " + score + "!? You're such an overachiever. Still no A+");
	} else {
		console.log("Either you did so poorly in this class you managed to get a score less than 0, or I've accidentally logged your grade as something other than a number!");
	}
}

accLetterGrade(61);
accLetterGrade(88);
accLetterGrade(125);
accLetterGrade("beer");