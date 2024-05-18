var inputEl = document.getElementById("number");
var btnEl = document.getElementById("print-number");
var containerEl = document.getElementById("container-number");
//while
function useWhile() {
	var inputValue = +inputEl.value;
	containerEl.innerHTML = "";
	var soCanKiemtra = 1;
	while (soCanKiemtra <= inputValue) {
		var soNguyenTo = true;
		var dieuKien = 2;
		if (soCanKiemtra <= 2) {
			containerEl.innerHTML += `<span>${soCanKiemtra} </span>`;
		} else {
			while (dieuKien <= soCanKiemtra - 1) {
				if (soCanKiemtra % dieuKien === 0) {
					soNguyenTo = false;
					break;
				}
				dieuKien++;
			}
			if (soNguyenTo) {
				containerEl.innerHTML += `<span>${soCanKiemtra} </span>`;
			}
		}
		soCanKiemtra++;
	}
}

//do-while
function useDoWhile() {
	var inputValue = +inputEl.value;
	containerEl.innerHTML = "";
	var soCanKiemtra = 1;
	do {
		var soNguyenTo = true;
		var dieuKien = 2;
		if (soCanKiemtra <= 2) {
			containerEl.innerHTML += `<span>${soCanKiemtra} </span>`;
		} else {
			do {
				if (soCanKiemtra % dieuKien === 0) {
					soNguyenTo = false;
					break;
				}
				dieuKien++;
			} while (dieuKien <= soCanKiemtra - 1);
			if (soNguyenTo) {
				containerEl.innerHTML += `<span>${soCanKiemtra} </span>`;
			}
		}
		soCanKiemtra++;
	} while (soCanKiemtra <= inputValue);
}

//for
function useFor() {
	var inputValue = +inputEl.value;
	containerEl.innerHTML = "";
	for (var soCanKiemtra = 1; soCanKiemtra <= inputValue; soCanKiemtra++) {
		var soNguyenTo = true;
		if (soCanKiemtra <= 2) {
			containerEl.innerHTML += `<span>${soCanKiemtra} </span>`;
		} else {
			for (var dieuKien = 2; dieuKien <= soCanKiemtra - 1; dieuKien++) {
				if (soCanKiemtra % dieuKien === 0) {
					soNguyenTo = false;
					break;
				}
			}
			if (soNguyenTo) {
				containerEl.innerHTML += `<span>${soCanKiemtra} </span>`;
			}
		}
	}
}

btnEl.onclick = function () {
	useFor();
};
