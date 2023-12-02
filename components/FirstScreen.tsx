import back from "../public/back.jpg";
import Image from "next/legacy/image";
import DownArrow from "./DownArrow";

export default function FirstScreen() {
	return (
		<div className="container">
			<div className="image-container">
				<div className="full-image-container">
					<Image src={back} alt="background" layout="fill" quality={100} />
				</div>
			</div>
			<div className="image-container">
				<div className="secoend-image-container">
					<Image
						src={back}
						alt="background"
						layout="fill"
						quality={100}
					></Image>
				</div>
			</div>
			<div className="image-container">
				<div className="circle-image-container">
					<Image src={back} alt="circular part" layout="fill" quality={100} />
				</div>
			</div>
			<div className="text">
				<p>FRONTEND</p>
				<p>PORTFOLIO</p>
			</div>
			<div className="arrow-div">
				<DownArrow ArrowColor="white" />
			</div>

			<style jsx>{`
				.container {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100vw;
					height: 100vh;
					position: relative;
					overflow: hidden;
					padding-top: 70px;
				}
				.image-container {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 230vw;
					height: 230vh;
					overflow: hidden;
					z-index: -100;
				}
				.full-image-container,
				.circle-image-container,
				.secoend-image-container {
					position: absolute;
					width: 100%;
					height: 100%;
				}
				.full-image-container {
					animation: rotateReverse 3s 1 cubic-bezier(0.56, 0.005, 0.38, 1);
					animation-delay: 0.5s;
				}
				.secoend-image-container {
					clip-path: circle(20% at center);
					animation: rotate 3s 1 cubic-bezier(0.56, 0.005, 0.38, 1);
					animation-delay: 1s;
				}
				.circle-image-container {
					clip-path: circle(9% at center);
					animation: rotateReverse 3s 1 cubic-bezier(0.56, 0.005, 0.38, 1);
				}
				.text {
					opacity: 0;
					animation: fadeIn 2s ease-out 3s forwards;
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 0.7;
					}
				}
				@keyframes fadeInArrow {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				@keyframes rotate {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				@keyframes rotateReverse {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(-360deg);
					}
				}
				div {
					color: white;
				}
				p {
					font-size: 5vw;
					font-weight: bold;
				}
				.arrow-div {
					position: absolute;
					bottom: 5vh;
					opacity: 0;
					animation: fadeInArrow 3s ease-out 3s forwards;
				}
			`}</style>
		</div>
	);
}
