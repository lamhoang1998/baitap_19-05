//while
function useWhile() {
	var n = 1;
	var tong = 0;
	while (n < 10000) {
		tong = tong + n;
		if (tong > 10000) {
			console.log(`${n} la so can tim`);
			break;
		}
		n++;
	}
}

//do-while
function useDoWhile() {
	var n = 1;
	var tong = 0;
	do {
		tong = tong + n;
		if (tong > 10000) {
			console.log(`${n} la so can tim`);
			break;
		}
		n++;
	} while (n < 10000);
}

//for
function useFor() {
	var tong = 0;
	for (n = 1; n < 10000; n++) {
		tong = tong + n;
		if (tong > 10000) {
			console.log(`${n} la so can tim`);
			break;
		}
	}
}

useFor();
