type Arrow = {
	ArrowColor: string;
	targetRef: React.RefObject<HTMLDivElement>;
};

export default function DownArrow({ ArrowColor, targetRef }: Arrow) {
	const scrollToTarget = () => {
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<>
			<div>
				<button onClick={scrollToTarget}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<g fill="none">
							<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
							<path
								fill="currentColor"
								d="m11 17.243l-3.95-3.95a1 1 0 1 0-1.414 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0-1.414-1.414L13 17.243V4a1 1 0 1 0-2 0z"
							/>
						</g>
					</svg>
				</button>
			</div>
			<style jsx>{`
				div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				button {
					background-color: transparent;
					border: 2px solid ${ArrowColor};
					color: ${ArrowColor};
					border-radius: 100%;
					width: 100%;
					height: 100%;
					cursor: pointer;
					animation: sdb 3s infinite;
					transition: 0.5s;
				}
				@keyframes sdb {
					0%,
					100% {
						box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.469);
					}
					50% {
						box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
					}

					100% {
						box-shadow: 0 0 0 70px rgba(255, 255, 255, 0);
					}
				}

				div {
					width: 40px;
					height: 40px;
					border-radius: 50%;
					transition: 0.5s;
				}
				div:hover,
				button:hover {
					border: 0px;
					color: #ffee10;
					animation: hoverAni 2s linear infinite;
				}

				@keyframes hoverAni {
					0%,
					100% {
						box-shadow: 0 5px 2px #ffee10;
					}
					25% {
						box-shadow: 0 0 10px 1px #ffee10;
					}
					50% {
						box-shadow: 0 0 40px 1px #ffee10;
					}
					75% {
						box-shadow: 0 0 10px 1px #ffee10;
					}
				}
			`}</style>
		</>
	);
}
