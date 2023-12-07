import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

type Arrow = {
	ArrowColor: string;
	targetRef: React.RefObject<HTMLDivElement>;
};

export default function DownArrow({ ArrowColor, targetRef }: Arrow) {
	const scrollToTarget = () => {
		console.log("debug");
		if (targetRef.current) {
			console.log("debug2");
			targetRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<div>
				<button onClick={scrollToTarget}>
					<FontAwesomeIcon icon={faArrowDown} size={"2xl"} />
				</button>
			</div>
			<style jsx>{`
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
