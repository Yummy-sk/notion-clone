export function DocumentRoot({ $target }) {
	const generateHTML = () => {
		return `<img class="greeting-img" src="../../public/images/greeting.png" alt="greeting-img"/>`;
	};

	this.render = () => {
		$target.innerHTML = generateHTML();
	};
}
