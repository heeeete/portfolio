import { useEffect, useRef, useState, forwardRef } from "react";
import Image from "next/legacy/image";
import starBack from "../public/starBack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Orbit } from "next/font/google";
import DownArrow from "./DownArrow";
import MaskButton from "./MaskButton";

const orbit = Orbit({ subsets: ["latin"], weight: "400" });

function Item({
	children,
	visible,
}: {
	children: React.ReactNode;
	visible: boolean;
}) {
	const observerStyle = {
		opacity: visible ? 1 : 0,
		transform: visible ? "translateY(0)" : "translateY(30px)",
		transition: "opacity 1s ease, transform 1s ease",
	};

	return <div style={observerStyle}>{children}</div>;
}

const AboutScreen = forwardRef<HTMLDivElement>((_, ref) => {
	const [visibleItems, setVisibleItems] = useState(new Set());

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
						target.classList.add("typing-ani");
						element2?.classList.add("typing-ani");
						observer.unobserve(target);
					}
				});
			},
			{ threshold: 0.9 }
		);

		const element = document.querySelector(".text-1");
		const element2 = document.querySelector(".text-2");
		if (element) observer.observe(element);
		return () => observer.disconnect();
	});

	useEffect(() => {
		// IntersectionObserver 인스턴스 생성
		const observer = new IntersectionObserver(
			(entries) => {
				// 각 관찰 대상의 변화에 대한 콜백 함수
				entries.forEach(({ target, isIntersecting }) => {
					// 각 관찰 대상에 대한 처리
					const id = target.getAttribute("data-id"); // 각 대상의 data-id 속성 값 추출

					if (isIntersecting) {
						// 요소가 뷰포트에 들어왔는지 확인
						// visibleItems 상태를 업데이트하여 요소의 id 추가
						setVisibleItems((prevItems) => new Set(prevItems).add(id));
					} else {
						// visibleItems 상태를 업데이트하여 요소의 id 제거
						setVisibleItems((prevItems) => {
							const newItems = new Set(prevItems);
							newItems.delete(id);
							return newItems;
						});
					}
				});
			},
			{
				threshold: 0.9, // 관찰 기준점 설정 (90% 요소가 보여야 감지)
			}
		);

		// 모든 .item 요소를 관찰 대상으로 추가
		document.querySelectorAll(".item, .header").forEach((item) => {
			observer.observe(item);
		});

		// 컴포넌트가 언마운트 될 때 관찰을 중단
		return () => observer.disconnect();
	}, []);
	const asd = () => {
		window.open("https://www.naver.com/");
	};

	return (
		<div className="container" ref={ref}>
			<div className="background-stars">
				<Image src={starBack} layout="fill" />
			</div>
			<header className="about-title">
				<Item key={0} visible={visibleItems.has(`ID-0`)}>
					<h1 className="header" data-id="ID-0">
						ABOUT
					</h1>
				</Item>
			</header>
			<article className="about-content">
				<article className="about-text">
					<div className="typing-ani">
						<p className={`${orbit.className} text-1`}>안녕하세요.</p>
					</div>
					<div className="typing-ani">
						<p className={`${orbit.className} text-2`}>
							신입 프론트엔드 개발자 <b className="name-text">박희태</b>
							입니다.
						</p>
					</div>
				</article>
				<section className="about-card">
					<Item key={1} visible={visibleItems.has(`ID-1`)}>
						<div className="item" data-id={`ID-1`}>
							<div className="flip">
								<div className="front">
									<FontAwesomeIcon
										icon={faAddressCard}
										color="rgba(255, 255, 255, 0.776)"
										style={{
											height: "auto",
										}}
									/>
								</div>
								<div className="back">
									<p>name: 박희태</p>
									<p>phone: 010-2994-9783</p>
									<p>email: mkoiui98@gmail.com</p>
								</div>
							</div>
						</div>
					</Item>
					<Item key={2} visible={visibleItems.has(`ID-2`)}>
						<div className="item" data-id={`ID-2`}>
							<div className="flip">
								<div className="front">
									<FontAwesomeIcon
										icon={faGithub}
										style={{ width: "70%", height: "auto" }}
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
					</Item>
					<Item key={3} visible={visibleItems.has(`ID-3`)}>
						<div className="item" data-id={`ID-3`}>
							<div className="flip">
								<div className="front">
									<p className="tistory">BLOG</p>
								</div>
								<div className="back">
									<Link
										href={"https://gaebarsaebal.tistory.com/"}
										target="_blank"
										style={{ textDecorationLine: "none", color: "black" }}
									>
										Tistory
									</Link>
								</div>
							</div>
						</div>
					</Item>
				</section>
			</article>

			<style jsx>
				{`
					.container {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 100vw;
						height: 100vh;
						padding-top: 80px;
						position: relative;
						overflow: hidden;
						background-color: rgba(0, 0, 0);
					}
					.background-stars {
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 230%;
						height: 230%;
						position: absolute;
						animation: space-rotate 500s linear infinite;
					}

					.about-title {
						position: relative;
						width: 100vw;
						display: flex;
						justify-content: center;
					}

					.about-content {
						position: relative;
						display: flex;
						align-items: center;
						width: 100vw;
					}

					.typing-ani {
						white-space: nowrap;
					}
					.text-1,
					.text-2 {
						border-right: 3px solid white;
						width: 0;
						overflow: hidden;
					}
					.name-text {
						font-size: 3.4vw;
					}
					.text-1.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
					}
					.text-2.typing-ani {
						animation: typing 1.5s steps(22) forwards,
							blink-cursos 1s step-end infinite;
						animation-delay: 2s;
					}
					.about-text {
						color: white;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						font-size: 3vw;
						width: 70%;
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
					}
					.front,
					.back {
						position: absolute;
						width: 100%;
						height: 100%;
						backface-visibility: hidden;
						border-radius: 10px;
						box-shadow: 0px 0px 15px 5px rgb(255, 255, 255);
						background-color: rgba(255, 255, 255, 0.776);
					}
					.front.no-style {
						background-color: transparent;
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
						width: 70%;
						height: 123%;
						border-radius: 50%;
						background-color: black;
					}
					.back:nth-of-type(1) {
						background-color: red;
					}
					.tistory {
						font-size: 100px;
						font-weight: bolder;
					}

					h1 {
						color: white;
						margin-bottom: 5vh;
					}
					@keyframes space-rotate {
						from {
							transform: translate(-50%, -50%) rotate(0deg);
						}
						to {
							transform: translate(-50%, -50%) rotate(360deg);
						}
					}

					@keyframes typing {
						from {
							width: 0;
						}
						to {
							width: 100%;
						}
					}

					@keyframes blink-cursos {
						50% {
							border-color: transparent;
						}
					}

					@media all and (max-width: 768px) {
						.about-content {
							flex-direction: column;
						}
						.about-text {
							font-size: 5vw;
						}
						.name-text {
							font-size: 6vw;
						}
						.item {
							width: 15rem;
						}
						.tistory {
							font-size: 5.7rem;
						}
					}

					@keyframes ani {
						from {
							-webkit-mask-position: 0 0;
							mask-position: 0 0;
						}

						to {
							-webkit-mask-position: 100% 0;
							mask-position: 100% 0;
						}
					}
				`}
			</style>
		</div>
	);
});

export default AboutScreen;
