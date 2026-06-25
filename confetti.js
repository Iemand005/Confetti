
class Confetti {

	spawn() {
		const particle = document.createElement("div");
		particle.className = "confetti";
		document.body.appendChild(particle);
	}
}

const confetti = new Confetti();