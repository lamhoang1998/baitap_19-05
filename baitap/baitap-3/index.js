//while
function useWhile(n) {
	var i = 1;
	var giaiThua = 1;
	while (i <= n) {
		giaiThua = giaiThua * i;
		console.log(giaiThua);
		i++;
	}
}

//do-while
function useDoWhile(n) {
	var i = 1;
	var giaiThua = 1;
	do {
		giaiThua = giaiThua * i;
		console.log(giaiThua);
		i++;
	} while (i <= n);
}

//for
function useFor(n) {
	var giaiThua = 1;
	for (var i = 1; i <= n; i++) {
		giaiThua = giaiThua * i;
		console.log(giaiThua);
	}
}

useFor(6);
