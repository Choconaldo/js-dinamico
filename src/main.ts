// Image and buttons elements
const imgEl = document.getElementById("lampada") as HTMLImageElement;
const [onButton, offButton] = document.getElementsByTagName("button");

// Random Light break function
function isLightbroken(): boolean | undefined {
	if (brokenLight) {
		return true;
	} else if (Math.floor(Math.random() * 6) + 1 == 1) {
		return true;
	}
}

// Light status
let brokenLight: boolean | undefined;

// Buttons

offButton.setAttribute("disabled", "true");

onButton.addEventListener("click", () => {
	brokenLight = isLightbroken();
	if (!brokenLight) {
		imgEl.src = "./public/on.jpg";
		onButton.setAttribute("disabled", "true");
		offButton.removeAttribute("disabled");
	} else {
		imgEl.src = "./public/broken.jpg";
		offButton.removeAttribute("disabled");
	}
});

offButton.addEventListener("click", () => {
	if (!brokenLight && !isLightbroken()) {
		imgEl.src = "./public/off.jpg";
		offButton.setAttribute("disabled", "true");
		onButton.removeAttribute("disabled");
	}
});
