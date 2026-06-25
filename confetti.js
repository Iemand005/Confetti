
class Confetti {

	spawn() {
		const particle = document.createElement("div");
		particle.className = "confetti";
		document.body.appendChild(particle);
	}

	kaboom(x, y) {
		for (let i = 0; i < 100; i++) {
			const p = document.createElement("div");
			p.className = "confetti";

			const angle = (-70 + Math.random() * 140) * Math.PI / 180;
			const speed = 200 + Math.random() * 400;

			p.style.left = `${x}px`;
			p.style.top = `${y}px`;

			p.style.setProperty("--vx", `${Math.cos(angle) * speed}px`);
			p.style.setProperty("--vy", `${-Math.sin(angle) * speed}px`);

			document.body.appendChild(p);
		}
	}
}

const confetti = new Confetti();