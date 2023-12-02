import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

type Arrow = {
	ArrowColor: string;
};

export default function DownArrow({ ArrowColor }: Arrow) {
	return (
		<>
			<button>
				<FontAwesomeIcon icon={faArrowDown} size={"2xl"} />
			</button>
			<style jsx>{`
				button {
					background-color: transparent;
					border: 1px solid ${ArrowColor};
					color: ${ArrowColor};
					border-radius: 100%;
					width: 40px;
					height: 40px;
					cursor: pointer;
					animation: sdb 3s infinite;
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
			`}</style>
		</>
	);
}
