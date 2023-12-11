import back from "../public/back.jpg";
import Image from "next/legacy/image";
import DownArrow from "./DownArrow";
import { useEffect, forwardRef, RefObject } from "react";
import exp from "constants";

const FirstScreen = forwardRef<
	HTMLDivElement,
	{ aboutRef: RefObject<HTMLDivElement> }
>((props, ref) => {
	const { aboutRef } = props;

	useEffect(() => {
		const makeStars = () => {
			const starContainer = document.querySelector(".stars-container");
			if (starContainer) {
				starContainer.innerHTML = "";
				for (let i = 0; i < 100; i++) {
					let x: any = Math.random() * window.innerWidth;
					let y: any = Math.random() * window.innerHeight;
					let size: any = Math.random() * 6;
					let time: any = Math.random() * 10;
					const star = document.createElement("div");
					star.className = "star";
					star.style.display = "flex";
					star.style.position = "absolute";
					star.style.left = `${x}px`;
					star.style.top = `${y}px`;
					star.style.width = `${size}px`;
					star.style.height = `${size}px`;
					star.style.backgroundColor = "white";
					star.style.borderRadius = "50%";
					star.style.filter = "blur(1.5px)";
					star.style.animation = `blink ${time}s  ease infinite`;
					starContainer.appendChild(star);
				}
			}
		};
		makeStars();

		window.addEventListener("resize", makeStars);
		return () => {
			removeEventListener("resize", makeStars);
		};
	}, []);

	return (
		<div className="container" ref={ref}>
			<div className="stars-container" />
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
				<DownArrow ArrowColor="white" targetRef={aboutRef} />
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
					display: flex;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 230vw;
					height: 230vh;
					overflow: hidden;
					z-index: -1;
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
					opacity: 0.7;
					animation: blink 2s ease infinite;
					animation-delay: 4s;
				}
				@keyframes blink {
					0% {
						opacity: 1;
					}
					10% {
						opacity: 0.7;
					}
					20%{
						opacity: 0.3;
					}
					30% {
						opacity: 0.6;
					}
					50% {
						opacity: 0.8;
					}
					60% {
						opacity: 0.6;
					}
					90% {
						opacity: 0.4;
					}
					100% {
						opacity: 0.5;
					}
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
					text-align: center;
				}
				.arrow-div {
					position: absolute;
					bottom: 5vh;
					opacity: 0;
					animation: fadeInArrow 3s ease-out 3s forwards;
					transition: 0.5s;
				}
				button:hover::before {
					transform: scale(1.1);
					box-shadow: 0 0 15px #ffee10;
				}
				button:hover {
					color #ffee10;
					box-shadow: 0px 0px 5px #ffee10;
					text-shadow: box-shadow: 0px 0px 5px #ffee10;
				}
			`}</style>
		</div>
	);
});

export default FirstScreen;
