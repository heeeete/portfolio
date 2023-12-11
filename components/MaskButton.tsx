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
				.mas {
					border: 1px solid black;
					color: black;
				}
				.mas2 {
					background-color: black;
					border: 1px solid black;
					color: white;

					-webkit-animation: ani2 0.7s steps(22) forwards;
					animation: ani2 0.7s steps(22) forwards;

					&:hover {
						-webkit-animation: ani 0.7s steps(22) forwards;
						animation: ani 0.7s steps(22) forwards;
					}
					mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
					-webkit-mask-size: 2300% 100%;
					mask-size: 2300% 100%;
				}
				.link-btn > * {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					padding: 0.5em 2em;
					border-radius: 5px;
					box-shadow: 0 2px 25px rgb(0, 0, 0);
					transition: 0.5s;
					cursor: pointer;
				}

				@-webkit-keyframes ani2 {
					0% {
						-webkit-mask-position: 100% 0;
						mask-position: 100% 0;
					}

					100% {
						-webkit-mask-position: 0 0;
						mask-position: 0 0;
					}
				}

				@keyframes ani2 {
					0% {
						-webkit-mask-position: 100% 0;
						mask-position: 100% 0;
					}

					100% {
						-webkit-mask-position: 0 0;
						mask-position: 0 0;
					}
				}
			`}</style>
		</div>
	);
}
