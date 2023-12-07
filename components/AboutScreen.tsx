import { useEffect, useRef, useState, forwardRef } from "react";
import Image from "next/legacy/image";
import starBack from "../public/starBack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Orbit } from "next/font/google";

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
		transition: "opacity 0.5s ease, transform 1s ease",
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

	return (
		<div className="container" ref={ref}>
			<div className="background-stars">
				<Image src={starBack} layout="fill" />
			</div>
			<Item key={0} visible={visibleItems.has(`ID-0`)}>
				<h1 className="header" data-id="ID-0">
					ABOUT
				</h1>
			</Item>
			<Item key={1} visible={visibleItems.has(`ID-1`)}>
				<div className="item" data-id={`ID-1`}>
					<div className="flip">
						<div className="front">
							<FontAwesomeIcon
								icon={faAddressCard}
								color="grey"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="back">
							<p>asd</p>
							<p>qwe</p>
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
						<div className="back">
							<FontAwesomeIcon icon={faGithub} style={{}} />
							<Link href={"https://github.com/heeeete"}>asd</Link>
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
						<div className="back">상세정보</div>
					</div>
				</div>
			</Item>

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
					.card {
						background-color: blue;
					}
					.item {
						padding: 10px;
						width: 17rem;
						aspect-ratio: 10/6;
						margin-bottom: 3vh;
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
					}
					.front.no-style {
						background-color: transparent;
					}
					.front {
						background-color: rgba(255, 255, 255, 0.486);
						display: flex;
						justify-content: center;
						align-items: center;
						overflow: hidden;
					}
					.back {
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: rgba(255, 255, 255, 0.486);
						transform: rotateY(180deg);
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

					.tistory {
						font-size: 100px;
						font-weight: 900;
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
				`}
			</style>
		</div>
	);
});

export default AboutScreen;
