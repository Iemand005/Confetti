
class Confetti {

	spawn() {
		const particle = document.createElement("div");
		particle.className = "confetti";
	}
}

const confetti = new Confetti();