//Page 16
//Print multiples of 6 up to 60,000, using a WHILE

function multOf6() {
	i = 0;
	while(i <= 60000) {
		if(i % 6 === 0) {
			console.log(i);
		}
		i++;
	}
}

multOf6();