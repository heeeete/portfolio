export default function MaskButton({
	value,
	link,
}: {
	value: string;
	link: string;
}) {
	const openSite = () => {
		window.open(link);
	};
	return (
		<div className="link-btn">
			<span className="mas">{value}</span>
			<div className="mas2" onClick={openSite}>
				{value}
			</div>

			<style jsx>{`
				.link-btn {
					position: relative;
				}
				.mas2 {
					-webkit-animation: mask-ani 0.7s steps(22) forwards;
					animation: mask-ani 0.7s steps(22) forwards;

					-webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
					-webkit-mask-size: 2300% 100%;
					mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
					mask-size: 2300% 100%;
				}
				.mas2:hover {
					-webkit-animation: hover-mask-ani 0.7s steps(22) forwards;
					animation: hover-mask-ani 0.7s steps(22) forwards;
				}
				.link-btn > * {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					padding: 0.5em 2em;
					border-radius: 5px;
					transition: 0.5s;
					cursor: pointer;
				}

				@keyframes mask-ani {
					0% {
						-webkit-mask-position: 100% 0;
						mask-position: 100% 0;
					}

					100% {
						-webkit-mask-position: 0 0;
						mask-position: 0 0;
					}
				}

				@keyframes hover-mask-ani {
					from {
						-webkit-mask-position: 0 0;
						mask-position: 0 0;
					}

					to {
						-webkit-mask-position: 100% 0;
						mask-position: 100% 0;
					}
				}
			`}</style>
		</div>
	);
}
