//while
function useWhile(x, n) {
	var tong = 0;
	var i = 1;
	while (i <= n) {
		tong = tong + Math.pow(i, x);
		console.log(`${tong}`);
		i++;
	}
}

//do-while
function useDoWhile(x, n) {
	var tong = 0;
	var i = 1;
	do {
		tong = tong + Math.pow(i, x);
		console.log(`${tong}`);
		i++;
	} while (i <= n);
}

//for
function useFor(x, n) {
	var tong = 0;
	for (var i = 1; i <= n; i++) {
		tong = tong + Math.pow(i, x);
		console.log(`${tong}`);
	}
}

useFor(2, 6);
