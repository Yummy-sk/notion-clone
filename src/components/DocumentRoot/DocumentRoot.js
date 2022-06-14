import documentImg from '../../public/images/greeting.png';

export function DocumentRoot({ $target }) {
	const generateHTML = () => {
		return `<img class="greeting-img" src=${documentImg} alt="greeting-img"/>`;
	};

	this.render = () => {
		$target.innerHTML = generateHTML();
	};
}
