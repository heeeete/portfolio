import { useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import FirstScreen from "../../components/FirstScreen";
import AboutScreen from "../../components/AboutScreen";
import SkillScreen from "../../components/SkillScreen";
import ProjectScreen from "../../components/ProjectScreen";
import debounce from "../../utils/debounce";

const randomColor = () => {
	return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
		Math.random() * 256
	)}, ${Math.floor(Math.random() * 256)})`;
};

const isMobileDevice = () => {
	return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);
};

export default function Home() {
	const [visibleItems, setVisibleItems] = useState(new Set<string>());
	const firstRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const skillRef = useRef<HTMLDivElement | null>(null);
	const starRef = useRef<HTMLDivElement | null>(null);
	const projectRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// 추가된 부분: 스크롤에 따른 레이어 이동
		const onScroll = () => {
			const scrolledY = window.scrollY;
			if (scrolledY > 0) {
				document.documentElement.style.setProperty(
					"--scroll",
					`${scrolledY}px`
				);
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(({ target, isIntersecting }) => {
					const id: string | null = target.getAttribute("data-id");

					if (isIntersecting) {
						if (id) setVisibleItems((prevItems) => new Set(prevItems).add(id));
					} else {
						setVisibleItems((prevItems) => {
							const newItems = new Set(prevItems);
							if (id) newItems.delete(id);
							return newItems;
						});
					}
				});
			},
			{
				threshold: 0.3,
			}
		);

		document.querySelectorAll(".item, .title, .observer").forEach((item) => {
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
					const x: Number = Math.random() * window.innerWidth;
					const y: Number = Math.random() * window.innerHeight;
					const size: Number = Math.random() * 13;
					const time: Number = Math.random() * 7 + 3;
					const delayTime: Number = Math.random() * 3;
					const moveX = Math.random() * 300 - 100;
					const moveY = Math.random() * 300 - 100;
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
					star.style.animation = `star-move${i} ${time}s ${delayTime}s ease infinite`;
					star.style.zIndex = "-1";
					starContainer.appendChild(star);
				}
			}
		};

		const debounceMakeStarts = debounce(makeStars, 500);
		makeStars();

		if (!isMobileDevice())
			window.addEventListener("resize", debounceMakeStarts);
		return () => {
			if (!isMobileDevice()) removeEventListener("resize", debounceMakeStarts);
		};
	}, []);

	return (
		<>
			<div className="container">
				<div className="background-stars" ref={starRef}></div>
				<NavBar
					aboutRef={aboutRef}
					firstRef={firstRef}
					skillRef={skillRef}
					projectRef={projectRef}
				/>
				<FirstScreen aboutRef={aboutRef} ref={firstRef} />
				<AboutScreen
					visibleItems={visibleItems}
					skillRef={skillRef}
					ref={aboutRef}
				/>
				<SkillScreen
					visibleItems={visibleItems}
					projectRef={projectRef}
					ref={skillRef}
				/>
				<ProjectScreen visibleItems={visibleItems} ref={projectRef} />
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
