
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
			
			// Calculate horizontal distance
			const vx = Math.cos(angle) * speed;
			// Calculate vertical motion: initial upward velocity + gravity fall (9.8 * 5²/2)
			const vy = -Math.sin(angle) * speed + 9.8 * 500 * 5; // gravity acceleration
			
			p.style.setProperty("--vx", `${vx}px`);
			p.style.setProperty("--vy", `${vy}px`);
			document.body.appendChild(p);
		}
	}
}

const confetti = new Confetti();