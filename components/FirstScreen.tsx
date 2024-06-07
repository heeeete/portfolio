import Image from "next/image";
import DownArrow from "./DownArrow";
import { useState, useEffect, forwardRef, RefObject } from "react";

const FirstScreen = forwardRef<
	HTMLDivElement,
	{ aboutRef: RefObject<HTMLDivElement> }
>((props, ref) => {
	const { aboutRef } = props;

	useEffect(() => {
		const halfScreenWidth = screen.width / 1.92;
		const imageContainer = document.querySelectorAll(".image-container");
		const mediaQurey = window.matchMedia(
			`screen and (max-width: ${halfScreenWidth}px)`
		);

		const handleImageContainer = () => {
			if (mediaQurey.matches)
				imageContainer.forEach((e) => {
					const htmlE = e as HTMLElement;
					htmlE.style.width = `${screen.width * 1.2}px`;
				});
			else
				imageContainer.forEach((e) => {
					const htmlE = e as HTMLElement;
					htmlE.style.width = "230vw";
				});
		};
		mediaQurey.addEventListener("change", handleImageContainer);
		handleImageContainer();

		return () => {
			mediaQurey.removeEventListener("change", handleImageContainer);
		};
	}, []);

	return (
		<section className="container" ref={ref}>
			<div className="image-container">
				<div className="full-image-container">
					<Image
						src={"https://heeeete.github.io/portfolio/back.jpg"}
						blurDataURL="https://heeeete.github.io/portfolio/back.jpg"
						alt="background"
						priority={true}
						style={{ objectFit: "cover" }}
						fill
						sizes="100vw"
						placeholder="blur"
					/>
				</div>
			</div>
			<div className="image-container">
				<div className="secoend-image-container">
					<Image
						src={"https://heeeete.github.io/portfolio/back.jpg"}
						blurDataURL="https://heeeete.github.io/portfolio/back.jpg"
						alt="background"
						priority={true}
						style={{ objectFit: "cover" }}
						fill
						sizes="100vw"
						placeholder="blur"
					></Image>
				</div>
			</div>
			<div className="image-container">
				<div className="circle-image-container">
					<Image
						src={"https://heeeete.github.io/portfolio/back.jpg"}
						blurDataURL="https://heeeete.github.io/portfolio/back.jpg"
						alt="circular part"
						priority={true}
						style={{ objectFit: "cover" }}
						fill
						sizes="100vw"
						placeholder="blur"
					/>
				</div>
			</div>
			<div className="text">FRONT-END-PORTFOLIO</div>
			<div className="arrow-div">
				<DownArrow ArrowColor="white" targetRef={aboutRef} />
			</div>

			<style jsx>{`
				.container {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100dvw;
					height: 100vh;
					position: relative;
					overflow: hidden;
					padding-top: 70px;
					z-index: 2;

				}
				.image-container {
					display: flex;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 230dvw;
					height: 230vh;
					overflow: hidden;
					z-index: 0;
					transition: 1s;
				}

				.image-container.half-size {
					width: 2200px;
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
					font-size: 40px;
					text-align: center;
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
					font-size: 5dvw;
					font-weight: bold;
					text-align: center;
				}
				.arrow-div {
					position: absolute;
					bottom: 5vh;
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
		</section>
	);
});

export default FirstScreen;
