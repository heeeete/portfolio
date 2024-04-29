import { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import Seo from "../../components/Seo";
import FirstScreen from "../../components/FirstScreen";
import AboutScreen from "../../components/AboutScreen";
import SkillScreen from "../../components/SkillScreen";

const randomColor = () => {
	return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
		Math.random() * 256
	)}, ${Math.floor(Math.random() * 256)})`;
};

export default function Home() {
	const [visibleItems, setVisibleItems] = useState(new Set<string>());
	const firstRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const skillRef = useRef<HTMLDivElement | null>(null);
	const starRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(({ target, isIntersecting }) => {
					const id: string | null = target.getAttribute("data-id");

					if (isIntersecting) {
						// 요소가 뷰포트에 들어왔는지 확인
						// visibleItems 상태를 업데이트하여 요소의 id 추가
						if (id) setVisibleItems((prevItems) => new Set(prevItems).add(id));
					} else {
						// visibleItems 상태를 업데이트하여 요소의 id 제거
						setVisibleItems((prevItems) => {
							const newItems = new Set(prevItems);
							if (id) newItems.delete(id);
							return newItems;
						});
					}
				});
			},
			{
				threshold: 0.9,
			}
		);

		document.querySelectorAll(".item, .header, .observer").forEach((item) => {
			observer.observe(item);
		});

		// 컴포넌트가 언마운트 될 때 관찰을 중단
		return () => observer.disconnect();
	}, []);

	//------------------------------------------------------------------
	//---------------------- make start --------------------------------
	//------------------------------------------------------------------
	useEffect(() => {
		const makeStars = () => {
			const starContainer = starRef.current;
			if (starContainer) {
				starContainer.innerHTML = "";
				for (let i = 0; i < 50; i++) {
					// let x: any = Math.random() * starContainer.clientWidth;
					// let y: any = Math.random() * starContainer.clientHeight;
					const x: any = Math.random() * window.innerWidth;
					const y: any = Math.random() * window.innerHeight;
					const size: any = Math.random() * 13;
					const time: any = Math.random() * 7 + 3;
					const moveX = Math.random() * 200 - 100;
					const moveY = Math.random() * 200 - 100;
					const keyframes = `
					@keyframes star-move${i} {
					  0%, 100% { transform: translate(0px, 0px); }
					  50% { transform: translate(${moveX}px, ${moveY}px); }
					}
				  `;

					const styleSheet = document.styleSheets[0];
					styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

					const star = document.createElement("div");
					star.className = "star";
					star.style.display = "flex";
					star.style.position = "fixed";
					star.style.left = `${x}px`;
					star.style.top = `${y}px`;
					star.style.width = `${size}px`;
					star.style.height = `${size}px`;
					star.style.backgroundColor = randomColor();
					star.style.borderRadius = "50%";
					star.style.filter = "blur(1px)";
					star.style.animation = `star-move${i} ${time}s ease infinite`;
					star.style.zIndex = "1";
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
		<>
			<div className="container">
				<div className="background-stars" ref={starRef}></div>
				<NavBar aboutRef={aboutRef} firstRef={firstRef} skillRef={skillRef} />
				<FirstScreen aboutRef={aboutRef} ref={firstRef} />
				<AboutScreen
					visibleItems={visibleItems}
					skillRef={skillRef}
					ref={aboutRef}
				/>
				<SkillScreen visibleItems={visibleItems} ref={skillRef} />
			</div>
			<style jsx>
				{`
					.container {
					}
					.background-stars {
						position: absolute;
						width: 100%;
						height: 100%;
					}
				`}
			</style>
		</>
	);
}
