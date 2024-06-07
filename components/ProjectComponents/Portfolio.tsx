import Image from "next/image";
import Link from "next/link";
import PurpleText from "../ColorTextComponents/PurpleText";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ImageSlider = dynamic(() => import("simple-image-carousel"), {
	ssr: false,
});

const images = [
	{ url: "https://heeeete.github.io/portfolio/portfolio/project1.png" },
	{ url: "https://heeeete.github.io/portfolio/portfolio/project2.png" },
	{ url: "https://heeeete.github.io/portfolio/portfolio/project3.png" },
	{ url: "https://heeeete.github.io/portfolio/portfolio/project4.png" },
	{ url: "https://heeeete.github.io/portfolio/portfolio/project4-1.png" },
];

const Portfolio = () => {
	const [statusProject, setStatusProject] = useState<boolean>(false);

	const toggleOverlay = () => {
		setStatusProject(!statusProject);
		if (!statusProject) window.history.pushState({}, "");
		else window.history.back();
		document.body.classList.toggle("full-screen");
	};

	useEffect(() => {
		const handlePopState = () => {
			setStatusProject(false);
		};

		window.addEventListener("popstate", handlePopState);

		return () => {
			window.removeEventListener("popstate", handlePopState);
		};
	}, []);

	return (
		<>
			2023.03
			<br />
			<br />
			<div className="project-header">
				<h1>
					<Image
						src={"https://heeeete.github.io/portfolio/portfolio/me.png"}
						width={40}
						height={40}
						alt="me"
					/>
					&nbsp;Portfolio
				</h1>
				<div className="project-link">
					<a href="https://github.com/heeeete/Mamory" target="_blank">
						Github
					</a>
				</div>
			</div>
			<br />
			<div className="stack-container">
				<div className="hash1">
					<p>#Next.js</p>
					<p>#TypeScript</p>
				</div>
				<div className="hash2">
					<p>#SideProject</p>
				</div>
			</div>
			<br />
			<div className="image-slider-container">
				<ImageSlider images={images} />
			</div>
			<br />
			<p style={{ fontSize: "16px" }}>
				&nbsp;저 자신을 표현할 수 있는 웹 사이트가 필요하다고 생각하여,
				포트폴리오 용도로 만든 웹 사이트입니다. 동시에{" "}
				<PurpleText>Next.js</PurpleText>와 <PurpleText>TypeScript</PurpleText>{" "}
				학습을 위해 해당 언어와 프레임워크를 사용하였습니다.
				<br />
				<br />
				&nbsp;프로젝트를 진행하면서 <PurpleText>npm 패키지</PurpleText>에 관심이
				생겨 지금 화면에 보이는{" "}
				<Link
					href={"https://www.npmjs.com/package/simple-image-carousel"}
					target="_blank"
				>
					image-slider
				</Link>
				를 구현하여 배포하였습니다.
				<br />
				<br />
			</p>
			<br />
			<div className="project-minimal-content">
				<h3 style={{ fontSize: "20px" }}>
					<br />
					&nbsp;●&nbsp;<PurpleText>Image Slider</PurpleText> 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>IntersectionObserver API</PurpleText>를
					사용하여 스크롤 애니메이션을 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>Debounce</PurpleText>를 구현하여 리렌더링
					최적화
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>CSS</PurpleText> 기반으로{" "}
					<PurpleText>다크 모드</PurpleText>를 구현하고 해당 테마를 저장
					<br />
					<br />
				</h3>
			</div>
			<br />
			<div className="see-more-container" onClick={toggleOverlay}>
				See More
				<p style={{ fontSize: "10px", textAlign: "center" }}>click</p>
			</div>
			{statusProject ? (
				<div className="more-project-container ">
					<div className="cancel-btn" onClick={toggleOverlay}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2rem"
							height="2rem"
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M19 5L5 19M5 5l14 14"
								color="currentColor"
							/>
						</svg>
					</div>
					<iframe
						src="https://heeeete.github.io/portfolio/portfolio/portfolio.html"
						width={"100%"}
						height={"100%"}
						style={{ border: "none" }}
					></iframe>
				</div>
			) : (
				""
			)}
			<style jsx>{`
				h1 {
					font-size: 2rem;
					margin-bottom: 10px;
				}
				h2 {
					font-size: 1.3rem;

					border-bottom: 1px solid black;
					white-space: nowrap;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}
				.see-more-container {
					color: #b23eff;
					cursor: pointer;
				}
				.more-project-container {
					position: fixed;
					width: 100dvw;
					height: 100dvh;
					background-color: white;
					top: 0;
					left: 0;
					z-index: 3000;
					overflow: hidden;
				}
				.cancel-btn {
					position: absolute;
					right: 15px;
				}
			`}</style>
		</>
	);
};

export default Portfolio;
