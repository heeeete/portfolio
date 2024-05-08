import { forwardRef, useEffect, useState, useRef } from "react";
import ObserverItem from "./ObserverItem";
import { useRouter } from "next/router";
import React, { memo } from "react";
import Portfolio from "./projects/Portfolio";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import PongWorld from "./PongWorld";

const TickTock = () => {
	return (
		<>
			2024.02
			<br />
			<br />
			<div className="project-header">
				<h1>🕓 TickTock</h1>
				<div className="project-link">
					<a href="https://github.com/heeeete/tick-tock" target="_blank">
						Github
					</a>
					<a href="https://heeeete.github.io/tick-tock/" target="_blank">
						WebSite
					</a>
				</div>
			</div>
			<br />
			<div className="stack-container">
				<div className="hash1">
					<p>#React</p>
				</div>
				<div className="hash2">
					<p>#Animation</p>
					<p>#Clock</p>
					<p>#SideProject</p>
				</div>
			</div>
			<br />
			<p>
				기존 시계의 형태를 유지하면서도 창의적이고 재미있는 방식으로 시간을
				표현하는 웹을 개발하였습니다. 이 프로젝트는 애니메이션과 CSS를 섬세하게
				활용하여 시각적으로 재미있는 사용자 경험을 제공하는 것을 목표로
				하였습니다.
			</p>
			<div className="ticktock-iframe-container">
				<iframe
					className="ticktock-iframe"
					src="https://heeeete.github.io/tick-tock/"
				></iframe>
			</div>
			<div>
				<h2>&nbsp;구현</h2>
				<h3>&nbsp;다양한 국가 지원</h3>
				<p>
					&nbsp;&nbsp;-다양한 국가에서의 사용을 고려하여{" "}
					<strong>moment-timezone</strong> 라이브러리를 통해 다양한 시간대를
					지원하도록 구현하였습니다.
				</p>
				<br />
				<h3>&nbsp;다양한 뷰포트 지원</h3>
				<p>
					&nbsp;&nbsp;-vw, vh단위를 활용하여 뷰포트 크기에 기반한 유연한
					레이아웃을 구현
				</p>
			</div>
			<br />
			<style jsx>{`
				h1 {
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}
				.stack-container {
					display: flex;
					justify-content: space-between;
				}
				.hash2,
				.hash1 {
					display: flex;
				}
				.hash1 > *,
				.hash2 > * {
					margin-right: 10px;
					padding: 7px;
					border-radius: 30px;
					background-color: #57006d3a;
					color: white;
				}
				.hash1 > * {
					background-color: #d3000099;
				}
				.ticktock-iframe-container {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
				}
				.ticktock-iframe {
					width: 80%;
					height: 80%;
					border-radius: 10px;
				}
			`}</style>
		</>
	);
};

const Mamory = () => {
	const images = [
		{ url: "/mamory1.png" },
		{ url: "/mamory2.png" },
		{ url: "/mamory3.png" },
		{ url: "/mamory4.png" },
		{ url: "/mamory5.png" },
		{ url: "/mamory6.png" },
		{ url: "/mamory7.png" },
	];

	return (
		<>
			2023.05 - 2023.11
			<br />
			<br />
			<div className="project-header">
				<h1>📒 Mamory</h1>
				<div className="project-link">
					<a href="https://github.com/heeeete/Mamory" target="_blank">
						Github
					</a>
				</div>
			</div>
			<br />
			<div className="stack-container">
				<div className="hash1">
					<p>#React Native</p>
					<p>#FE - 2</p>
				</div>
				<div className="hash2">
					<p>#React Native</p>
					<p>#IOS</p>
					<p>#Android</p>
					<p>#SideProject</p>
				</div>
			</div>
			<br />
			<div className="slider">
				<ImageSlider width={300} images={images} />
			</div>
			<br />
			<p>
				&nbsp;일상을 기록하는 데 여러 앱을 사용해야 하는 불편함을 해소하기 위해
				마모리를 개발했습니다. 이 앱은 다이어리, 할 일 목록 그리고 영화, 책
				리뷰와 같이 다양한 기능을 하나의 플랫폼에서 제공함으로써 사용자가 하나의
				앱으로 일상 기록을 편리하게 할 수 있게 합니다.
			</p>
			<p>
				&nbsp;해당 프로젝트는 두명이서 진행을 했고, frontEnd 두 명이서 서버
				구현을 동시에 진행하였습니다.
			</p>
			<br />
			<div>
				<h2>역할</h2>
				<p>&nbsp;-Todo 알람 기능</p>
				<p>&nbsp;-영화, 책 리뷰 기능</p>
				<p>&nbsp;-로그인 유지 기능</p>
			</div>
			<br />
			<div>
				<h2>구현</h2>
				<h3>&nbsp;다양한 국가 지원</h3>
				<p>
					&nbsp;&nbsp;-다양한 국가에서의 사용을 고려하여{" "}
					<strong>moment-timezone</strong> 라이브러리를 통해 다양한 시간대를
					지원하도록 구현하였습니다.
				</p>
				<br />
				<h3>&nbsp;다양한 뷰포트 지원</h3>
				<p>
					&nbsp;&nbsp;-vw, vh단위를 활용하여 뷰포트 크기에 기반한 유연한
					레이아웃을 구현
				</p>
			</div>
			<br />
			<style jsx>{`
				h1 {
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}
				.stack-container {
					display: flex;
					justify-content: space-between;
				}
				.hash2,
				.hash1 {
					display: flex;
				}
				.hash1 > *,
				.hash2 > * {
					margin-right: 10px;
					padding: 7px;
					border-radius: 30px;
					background-color: #57006d3a;
					color: white;
				}
				.hash1 > * {
					background-color: #d3000099;
				}
				.slider {
					display: flex;
					justify-content: center;
				}
				.img,
				.imgContain {
					width: 100%;
					height: 100%;
				}
				.imgContain {
					object-fit: contain;
				}
			`}</style>
		</>
	);
};

const ProjectContainer = memo(() => {
	const [project, setProject] = useState<string>("https://pongworld");
	const router = useRouter();
	let $projectContainer: any;

	useEffect(() => {
		$projectContainer = document.querySelector(
			".project-container"
		) as HTMLElement;
	}, []);

	const onClickFullScreen = (e: React.MouseEvent) => {
		const $container = e.currentTarget.closest(
			".project-container"
		) as HTMLElement;
		$container.classList.toggle("full-screen");
		document.body.classList.toggle("full-screen");
		if ($projectContainer) $projectContainer.scrollIntoView();
	};

	const onClickTab = (projectName: string, event: any) => {
		setProject("https://" + projectName);
		const currentActive = document.querySelector(".tab-menu .active");
		if (currentActive) {
			currentActive.classList.remove("active");
		}
		event.target.classList.add("active");
	};

	const onClickReload = () => {
		router.reload();
	};

	const RenderProject = () => {
		if (project === "https://pongworld") return PongWorld();
		else if (project === "https://ticktock") return TickTock();
		else if (project === "https://mamory") return Mamory();
		else if (project === "https://portfolio") return Portfolio();
	};

	return (
		<div className="project-container item" data-id="project-container">
			<div className="nav-menu">
				<div className="nav-menu-btn"></div>
				<div className="nav-menu-btn second"></div>
				<div className="nav-menu-btn third" onClick={onClickFullScreen}></div>
			</div>
			<div className="tab-menu">
				<div
					className="project active"
					onClick={(e) => onClickTab("pongworld", e)}
				>
					PongWorld
				</div>
				<div className="project" onClick={(e) => onClickTab("ticktock", e)}>
					Tick-Tock
				</div>
				<div className="project" onClick={(e) => onClickTab("mamory", e)}>
					Mamory
				</div>
				<div className="project" onClick={(e) => onClickTab("portfolio", e)}>
					Portfolio
				</div>
			</div>
			<div className="url-container">
				<span className="reload-svg" onClick={onClickReload}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<g
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						>
							<path d="M19.933 13.041a8 8 0 1 1-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747" />
							<path d="M20 4v5h-5" />
						</g>
					</svg>
				</span>
				<input
					className="url-input"
					type="text"
					value={project}
					onChange={(e) => setProject(e.target.value)}
				/>
			</div>
			<div className="project-content">
				<RenderProject />
			</div>
			<style jsx>{`
				.project-container {
					display: flex;
					flex-direction: column;
					width: 60dvw;
					height: 80dvh;
					border-radius: 10px;
					background-color: #c2c2c2;
					transition: 0.5s;
					overflow: hidden;
					border: 1px solid lightgrey;

					&.full-screen {
						display: flex;
						width: 100dvw;
						height: 100dvh;
						position: fixed;
						top: 0;
						left: 0;
						z-index: 1000;
					}
				}
				.project-content {
					overflow: auto;
					width: 100%;
					height: 100%;
					padding: 20px;
				}
				.project-content::-webkit-scrollbar {
					width: 10px;
				}
				.project-content::-webkit-scrollbar-track {
					background-color: white;
				}
				.project-content::-webkit-scrollbar-thumb {
					background-color: #57006d5f;
					border-radius: 6px;
				}

				.nav-menu {
					display: flex;
					width: 100%;
					 {
						/* border-top-left-radius: 10px; */
					}
					 {
						/* border-top-right-radius: 10px; */
					}
					background-color: #505050;
				}
				.nav-menu-btn {
					margin: 5px;
					width: 12px;
					height: 12px;
					border-radius: 50%;
					background-color: rgb(237, 106, 94);
				}
				.nav-menu-btn.second {
					background-color: rgb(245, 191, 79);
				}
				.nav-menu-btn.third {
					cursor: pointer;
					background-color: rgb(98, 197, 84);
				}

				.tab-menu {
					background-color: #606060;
					display: flex;
				}
				.tab-menu > * {
					transition: 0.3s;
					cursor: pointer;
					padding: 8px;
					border-radius: 10px;
					width: 100px;
					text-align: center;
					&:hover {
						background-color: #c6c6c623;
					}
					&.active {
						border-radius: 0px;
						border-top-left-radius: 10px;
						border-top-right-radius: 10px;
						background-color: white;
					}
				}
				.reload-svg {
					cursor: pointer;
					width: 30px;
					height: 30px;
					transition: 0.5s;
					margin-right: 5px;

					&:hover {
						transform: rotateZ(90deg);
					}
				}
				.url-container {
					display: flex;
					align-items: center;
					background-color: white;
					padding: 5px;
				}
				.url-input {
					font-size: 1.2rem;
					background-color: #cfcfcf;
					border-radius: 30px;
					width: 100%;
					padding: 7px;
					cursor: text;
				}
			`}</style>
		</div>
	);
});

const ProjectScreen = forwardRef<HTMLDivElement, { visibleItems: Set<string> }>(
	(props, ref) => {
		const { visibleItems } = props;

		return (
			<section className="container" ref={ref}>
				<header className="title-container">
					<ObserverItem
						key={"project-header"}
						visible={visibleItems.has("project-header")}
					>
						<h1
							className="observer title responsive-text"
							data-id="project-header"
						>
							Project
						</h1>
					</ObserverItem>
				</header>
				<article>
					<ProjectContainer />
				</article>
				<style jsx>{`
					.container {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						height: 100dvh;
					}
				`}</style>
			</section>
		);
	}
);

export default ProjectScreen;
