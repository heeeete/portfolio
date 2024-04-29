import { useEffect, useRef, useState, forwardRef, ElementType } from "react";
import Image from "next/legacy/image";
import starBack from "../public/starBack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DownArrow from "./DownArrow";
import MaskButton from "./MaskButton";
import ObserverItem from "./ObserverItem";

const AboutScreen = forwardRef<
	HTMLDivElement,
	{ visibleItems: Set<string>; skillRef: React.RefObject<HTMLDivElement> }
>((props, ref) => {
	const { visibleItems, skillRef } = props;
	const starRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const firstFront = document.querySelector(".flip .front");
		if (firstFront) {
			firstFront.classList.add("no-style");
		}
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(({ target, isIntersecting }) => {
					if (isIntersecting) {
						const element2 = document.querySelector(".text-2") as HTMLElement;
						const element3 = document.querySelector(".text-3") as HTMLElement;
						const element4 = document.querySelector(".text-4") as HTMLElement;
						const element5 = document.querySelector(".text-5") as HTMLElement;
						const element6 = document.querySelector(".text-6") as HTMLElement;
						const element7 = document.querySelector(".text-7") as HTMLElement;
						const element8 = document.querySelector(".text-8") as HTMLElement;

						target.classList.add("typing-ani");
						element2?.classList.add("typing-ani");
						element3?.classList.add("typing-ani");
						element4?.classList.add("typing-ani");
						element5?.classList.add("typing-ani");
						element6?.classList.add("typing-ani");
						element7?.classList.add("typing-ani");
						element8?.classList.add("typing-ani");

						setTimeout(() => {
							if (element6) {
								element8.style.borderRight = "3px solid white";
							}
						}, 5000);
						observer.unobserve(target);
					}
				});
			},
			{ threshold: 0.9 }
		);

		const element = document.querySelector(".text-1") as HTMLElement;
		if (element) observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return (
		<section className="about-container" ref={ref}>
			<header className="about-title">
				<ObserverItem key={0} visible={visibleItems.has(`ID-0`)}>
					<h1 className="header responsive-text" data-id="ID-0">
						ABOUT
					</h1>
				</ObserverItem>
			</header>
			<article className="about-content">
				<article className="about-text">
					<div className="typing-ani">
						<p className="text-1 responsive-text">
							더 나은 사용자 경험을 위해 끊임없이 도전하는 프론트엔드 개발자{" "}
							<b className="name-text">박희태</b>입니다.
						</p>
					</div>
					<div className="typing-ani">
						<p className={`text-2 responsive-text`}>저는</p>
					</div>
					<div className="typing-ani">
						<p className={`text-3 responsive-text`}>
							⚪️ 사용자 경험을 최우선으로 합니다.
						</p>
					</div>
					<div className="typing-ani">
						<p className={`text-4 responsive-text`}>
							⚪️ 공부한 것을 정리하고 공유하는 것을 좋아해 블로그를 운영하고
							있습니다.
						</p>
					</div>
					<div className="typing-ani">
						<p className={`text-5 responsive-text`}>
							⚪️ 다양한 애니메이션을 활용하는 것을 좋아합니다.
						</p>
					</div>
					<div className="typing-ani">
						<p className={`text-6 responsive-text`}>
							⚪️ WebSocket을 활용해 실시간 서비스를 만든 경험이 있습니다.
						</p>
					</div>
					<div className="typing-ani">
						<p className={`text-7 responsive-text`}>
							⚪️ 원활한 소통을 통해 작업물의 완성도를 높입니다.
						</p>
					</div>
					<div className="typing-ani">
						<p className={`text-8 responsive-text`}>
							⚪️ 42서울 에서 동료와의 코드 리뷰를 통해 협업 능력을 키웠습니다.
						</p>
					</div>
				</article>
				<section className="about-card">
					<ObserverItem key={1} visible={visibleItems.has(`ID-1`)}>
						<div className="item" data-id={`ID-1`}>
							<div className="flip">
								<div className="front first">
									<p className="info">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1em"
											height="1em"
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M17 3h-3v3h-4V3H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5 5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4 8H8v-1c0-1.33 2.67-2 4-2s4 .67 4 2zM13 5h-2V1h2zm3 14H8v-1h8zm-4 2H8v-1h4z"
											/>
										</svg>
									</p>
								</div>
								<div className="back back1">
									<div className="info-back-img">
										<FontAwesomeIcon icon={faUser} />
									</div>
									<p className="responsive-text">
										name:{" "}
										<span
											className="responsive-text"
											style={{
												fontFamily: "Koreail-Light",
											}}
										>
											박희태
										</span>
									</p>
									<p className="responsive-text">
										phone:{" "}
										<a className="tel responsive-text" href="tel:010-2994-9783">
											010-2994-9783
										</a>
									</p>
									<p className="responsive-text">
										email:{" "}
										<a
											className="mail responsive-text"
											href="mailto:mkoiui98@gmail.com"
										>
											mkoiui98@gmail.com
										</a>
									</p>
									<p className="responsive-text">birth date: 98.11.26</p>
								</div>
							</div>
						</div>
					</ObserverItem>
					<ObserverItem key={2} visible={visibleItems.has(`ID-2`)}>
						<div className="item" data-id={`ID-2`}>
							<div className="flip">
								<div className="front second github">
									<FontAwesomeIcon
										icon={faGithub}
										style={{ width: "55%", height: "auto" }}
									/>
								</div>
								<div className={`back back2`}>
									<MaskButton
										value="Github"
										link="https://github.com/heeeete"
									/>
								</div>
							</div>
						</div>
					</ObserverItem>
					<ObserverItem key={3} visible={visibleItems.has(`ID-3`)}>
						<div className="item" data-id={`ID-3`}>
							<div className="flip">
								<div className="front">
									<p className="tistory responsive-text">BLOG</p>
								</div>
								<div className="back back2">
									<MaskButton
										value="Tistory"
										link="https://gaebarsaebal.tistory.com/"
									/>
								</div>
							</div>
						</div>
					</ObserverItem>
				</section>
			</article>
			<div className="Arrow">
				<DownArrow ArrowColor="white" targetRef={skillRef} />
			</div>

			<style jsx>
				{`
					.about-container {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 100dvw;
						height: 100dvh;
						padding-top: 80px;
						position: relative;
						overflow: hidden;
					}

					.about-title {
						position: relative;
						width: 100dvw;
						display: flex;
						justify-content: center;
					}

					.header {
						font-size: 4em;
					}

					.about-content {
						position: relative;
						display: flex;
						align-items: center;
						width: 100dvw;
						z-index: 2;
					}

					.about-text {
						font-family: Koreail-Light;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						font-size: 1.5dvw;
						width: 70%;
						white-space: nowrap;
						z-index: 2;
					}

					.text-1,
					.text-2,
					.text-3,
					.text-4,
					.text-5,
					.text-6,
					.text-7,
					.text-8 {
						width: 0;
						overflow: hidden;
						padding: 5px 0;
					}

					.text-1.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
					}

					.text-2.typing-ani {
						animation: typing 0.2s steps(2) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 2s;
					}
					.text-3.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 2.3s;
					}
					.text-4.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 2.6s;
					}
					.text-5.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 2.9s;
					}
					.text-6.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 3.2s;
					}
					.text-7.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 3.5s;
					}
					.text-8.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 3.8s;
					}

					@keyframes typing {
						from {
							width: 0;
						}
						to {
							width: 100%;
						}
					}

					.name-text {
						font-family: Koreail-Bold;
						font-size: 2dvw;
					}

					.about-card {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 17rem;
					}
					.item {
						padding: 10px;
						width: 17rem;
						aspect-ratio: 10/6;
						margin: 1.5vh 0;
						perspective: 1000px;
						transition: 0.5s;
					}
					.flip {
						position: relative;
						transition: 0.5s;
						width: 100%;
						height: 100%;
						transform-style: preserve-3d;
						border-radius: 10px;
					}
					.front,
					.back {
						position: absolute;
						width: 100%;
						height: 100%;
						backface-visibility: hidden;
						border-radius: 10px;
					}

					.info-back-img {
						display: flex;
						justify-content: center;
					}

					.front {
						display: flex;
						justify-content: center;
						align-items: center;
						overflow: hidden;
					}
					.back {
						display: flex;
						padding: 5px 10px;
						flex-direction: column;
						transform: rotateY(180deg);
					}
					.back1 {
						justify-content: center;
					}
					.back2 {
						align-items: center;
						justify-content: center;
						font-size: 1.3em;
					}
					.back > * {
						margin: 3px 0;
					}
					.item:hover .flip,
					.flip:hover {
						transform: rotateY(180deg);
					}

					.tistory-box {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.tistory {
						display: flex;
						font-size: 75px;
						font-weight: bolder;
					}
					.info {
						font-size: 7rem;
					}

					.tel,
					.mail {
						text-decoration-line: none;
						&:hover {
							color: rgb(223, 154, 25);
						}
					}

					h1 {
						margin-bottom: 5vh;
					}

					@keyframes blink-cursos {
						50% {
							border-color: transparent;
						}
					}

					.Arrow {
						position: absolute;
						bottom: 5vh;
					}

					@media all and (max-width: 768px) {
						.header {
							font-size: 2em;
						}
						.Arrow {
							right: 5dvw;
						}
						.about-content {
							flex-direction: column;
						}
						.about-text {
							font-size: 2dvw;
						}
						.name-text {
							font-size: 3dvw;
						}
						.item {
							width: 10rem;
						}
						.tistory,
						.info {
							font-size: 3rem;
						}
						.back2 {
							font-size: 1rem;
						}
						.back1 {
							font-size: 10px;
						}
					}
				`}
			</style>
		</section>
	);
});

export default AboutScreen;
