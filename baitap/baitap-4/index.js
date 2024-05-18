//while
var btnEl = document.getElementById("print");
var containerEl = document.getElementById("container");

function useWhile() {
	containerEl.innerHTML = "";
	var i = 1;

	while (i <= 10) {
		if (i % 2 === 0) {
			containerEl.innerHTML += "<div class='thechan'></div>";
		} else {
			containerEl.innerHTML += "<div class='thele'></div>";
		}
		console.log(i);
		i++;
	}
}

function useDoWhile() {
	containerEl.innerHTML = "";
	var i = 1;
	do {
		if (i % 2 === 0) {
			containerEl.innerHTML += "<div class='thechan'></div>";
		} else {
			containerEl.innerHTML += "<div class='thele'></div>";
		}
		console.log(i);
		i++;
	} while (i <= 10);
}

function useFor() {
	containerEl.innerHTML = "";
	for (var i = 1; i <= 10; i++) {
		if (i % 2 === 0) {
			containerEl.innerHTML += "<div class='thechan'></div>";
			console.log();
		} else {
			containerEl.innerHTML += "<div class='thele'></div>";
		}
	}
}

btnEl.onclick = function () {
	useFor();
};
