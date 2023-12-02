import { useEffect, useRef, useState } from "react";
import Image from "next/legacy/image";
import starBack from "../public/starBack.png";

function Item({
	children,
	visible,
}: {
	children: React.ReactNode;
	visible: boolean;
}) {
	return (
		<div>
			<div
				style={{
					opacity: visible ? 1 : 0,
					transform: visible ? "translateY(0)" : "translateY(30px)",
					transition: "opacity 0.5s ease, transform 1s ease",
				}}
			>
				{children}
			</div>
		</div>
	);
}

export default function AboutScreen() {
	const [visibleItems, setVisibleItems] = useState(new Set());

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
						// 8. visibleItems 상태를 업데이트하여 요소의 id 제거
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
		document.querySelectorAll(".item").forEach((item) => {
			observer.observe(item);
		});

		// 컴포넌트가 언마운트 될 때 관찰을 중단
		return () => observer.disconnect();
	}, []);

	return (
		<div className="container">
			<div className="image-container">
				<Image
					src={starBack}
					alt="starBackground"
					quality={100}
					layout="fill"
				/>
			</div>
			{Array.from({ length: 4 }, (_, index) => index).map((index) => (
				<Item key={index} visible={visibleItems.has(`item-${index}`)}>
					<div
						className="item"
						data-id={`item-${index}`}
						style={{
							width: 200,
							height: 200,
							background: index % 2 === 0 ? "red" : "blue",
						}}
					></div>
				</Item>
			))}

			<style jsx>
				{`
					.container {
						width: 100vw;
						height: 100vh;
						padding-top: 80px;
						position: relative;
						overflow: hidden;
					}
					.image-container {
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 230vw;
						height: 230vh;
						position: absolute;
						animation: space-rotate 500s linear infinite;
						z-index: -100;
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
}
