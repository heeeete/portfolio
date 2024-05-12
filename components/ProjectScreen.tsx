import { forwardRef, useEffect, useState, useRef, MouseEvent } from "react";
import ObserverItem from "./ObserverItem";
import { useRouter } from "next/router";
import React, { memo } from "react";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

const PurpleText = ({ children }: { children: React.ReactNode }) => {
	return (
		<span>
			<strong>{children}</strong>
			<style jsx>
				{`
					span {
						color: purple;
					}
				`}
			</style>
		</span>
	);
};

const RedText = ({ children }: { children: React.ReactNode }) => {
	return (
		<span>
			{children}
			<style jsx>
				{`
					span {
						color: #b60000;
					}
				`}
			</style>
		</span>
	);
};

const PongWorld = () => {
	const images: { url: string }[] = [
		{ url: "/pongWorld/pongWorld1.png" },
		{ url: "/pongWorld/pongWorld2.png" },
		{ url: "/pongWorld/pongWorld3.png" },
		{ url: "/pongWorld/pongWorld4.png" },
		{ url: "/pongWorld/pongWorld5.png" },
		{ url: "/pongWorld/pongWorld6.png" },
	];

	return (
		<>
			2024.02 - 2024.04
			<br />
			<br />
			<div className="project-header">
				<h1>🏓 PongWorld</h1>
				<div className="project-link">
					<a
						href="https://github.com/Tscen-Rangers/ft_transcendence"
						target="_blank"
					>
						Github / Video
					</a>
				</div>
			</div>
			<br />
			<div className="stack-container">
				<div className="hash1">
					<p>#Vanilla.js</p>
					<p>#Django</p>
					<p>#FE - 2</p>
					<p>#BE - 2</p>
					<p>#FULL - 1</p>
				</div>
				<div className="hash2">
					<p>#SPA</p>
					<p>#GAME</p>
					<p>#WebSocket</p>
				</div>
			</div>
			<br />
			<ImageSlider images={images} />
			<br />
			<p>
				&nbsp;<PurpleText>PongWorld</PurpleText> 프로젝트는 외부 라이브러리 없이{" "}
				<PurpleText> VanillaJS</PurpleText>를 이용해{" "}
				<PurpleText>SPA</PurpleText> 방식으로 개발한{" "}
				<PurpleText>실시간 PingPong 게임 플랫폼</PurpleText>
				입니다.
				<br />
				<br />
				&nbsp;게임의 성능 최적화를 위해 <PurpleText> CSS</PurpleText>의{" "}
				<PurpleText>position</PurpleText> 속성과{" "}
				<PurpleText>translate</PurpleText> 속성을 비교 분석하였고, 이를 통해
				쾌적한 게임을 만들 수 있었습니다.
				<br />
				<br />
				&nbsp;서버와 양방향 통신을 하기위해 처음으로{" "}
				<PurpleText>WebSocket</PurpleText>을 사용해 보았습니다. 비동기적 특성과
				복잡한 이벤트 처리에 어려움을 겪었지만, 성공적으로 실시간 웹 사이트를
				만들 수 있었습니다. <PurpleText>WebSocket</PurpleText>을 사용해 본
				것만으로도 의미가 있었지만 성공적으로 프로젝트를 마무리했다는 점에서
				더욱 의미가 있습니다.
				<br />
				<br />
			</p>
			<br />
			<div className="project-minimal-content">
				<h3>
					<br />
					&nbsp;●&nbsp;<PurpleText>Websocket</PurpleText>을 이용한 실시간 웹
					페이지 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>REST API</PurpleText>를 이용해 서버와 통신을
					해 유저 정보 업데이트
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>HTML history API</PurpleText>를 이용해 SPA
					페이지 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>DOM을 클래스로 추상화</PurpleText>하여
					가독성과 유지보수 향상
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>requestAnimationFrame()</PurpleText>을
					사용하여 부드러운 애니메이션 구현
					<br />
					<br />
					&nbsp;●&nbsp;특정 디바이스에 국한되지 않는 반응형 지원
					<br />
					<br />
				</h3>
			</div>
			<br />
			<br />
			<div className="project-summary-content">
				<div className="project-summary-inner-content">
					<h2>✔&nbsp;역할</h2>
					<p>
						<strong>&nbsp;SPA 구현</strong>
					</p>
					<p>
						<strong>&nbsp;실시간 게임 기능</strong>
					</p>
					<p>
						<strong>&nbsp;실시간 채팅 기능</strong>
					</p>
					<p>
						<strong>&nbsp;로그인 기능</strong>
					</p>
					<p>
						<strong>&nbsp;마이페이지 기능</strong>
					</p>
					<p>
						<strong>&nbsp;모달 기능</strong>
					</p>
				</div>
				<div>
					<h2>✔&nbsp;주요 기능</h2>
					<p>
						<strong>&nbsp;실시간 핑퐁 게임</strong>
					</p>
					<p>
						<strong>&nbsp;토너먼트 게임</strong>
					</p>
					<p>
						<strong>&nbsp;실시간 채팅</strong>
					</p>
					<p>
						<strong>&nbsp;친구 관리(차단, 친구 추가, 삭제)</strong>
					</p>
					<p>
						<strong>&nbsp;마이페이지 </strong>
					</p>
				</div>
			</div>
			<br />
			<div className="see-more-container">
				<a
					className="see-more-btn"
					target="_blank"
					href="https://stirring-viscount-3c3.notion.site/PongWorld-861eba7704424857b092618f34701fe2?pvs=4"
				>
					See More
					<p style={{ fontSize: "10px", textAlign: "center" }}>click</p>
				</a>
			</div>
			<style jsx>{`
				h1 {
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					width: 50%;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}
			`}</style>
		</>
	);
};

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
					<p>#TypeScript</p>
				</div>
				<div className="hash2">
					<p>#Animation</p>
					<p>#Clock</p>
					<p>#SideProject</p>
				</div>
			</div>
			<div className="ticktock-iframe-container">
				<iframe
					className="ticktock-iframe"
					src="https://heeeete.github.io/tick-tock/"
				></iframe>
			</div>
			<p>
				&nbsp;기존 시계의 형태를 유지하면서도 창의적이고 재미있는 방식으로
				시간을 표현하는 웹을 개발하였습니다.
				<br />
				<br />
				&nbsp;이 프로젝트는 <PurpleText>CSS</PurpleText>와{" "}
				<PurpleText>JavaScript</PurpleText> 실력을 향상시키고자 혼자 시작한
				사이드 프로젝트입니다. 평소 <PurpleText>UI</PurpleText>와{" "}
				<PurpleText>UX</PurpleText>에 큰 관심이 있어, 시각적으로 재미있는 사용자
				경험을 제공하는 것을 목표로 삼았습니다.
				<br />
				<br />
			</p>
			<br />
			<div className="project-minimal-content">
				<h3>
					<br />
					&nbsp;●&nbsp;<PurpleText>moment-timezone</PurpleText> 라이브러리를
					통해 다양한 시간대를 지원하도록 구현하였습니다.
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>vw, vh</PurpleText>단위를 활용하여 뷰포트
					크기에 기반한 유연한 레이아웃을 구현
					<br />
					<br />
				</h3>
			</div>
			<br />
			<div className="see-more-container">
				<a
					className="see-more-btn"
					target="_blank"
					href="https://stirring-viscount-3c3.notion.site/Mamory-fae6726a638f4445a6446db435688c5e?pvs=4"
				>
					See More
					<p style={{ fontSize: "10px", textAlign: "center" }}>click</p>
				</a>
			</div>
			<style jsx>{`
				h1 {
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					width: 50%;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
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
		{ url: "/mamory/mamory1.png" },
		{ url: "/mamory/mamory2.png" },
		{ url: "/mamory/mamory3.png" },
		{ url: "/mamory/mamory3-1.png" },
		{ url: "/mamory/mamory4.png" },
		{ url: "/mamory/mamory5.png" },
		{ url: "/mamory/mamory6.png" },
		{ url: "/mamory/mamory7.png" },
		{ url: "/mamory/mamory8.png" },
		{ url: "/mamory/mamory9.png" },
	];

	return (
		<>
			2023.05 - 2023.11
			<br />
			<br />
			<div className="project-header">
				<h1>
					<Image
						src={"/mamory/mamory.png"}
						width={30}
						height={30}
						alt="mamory-icon"
					/>
					&nbsp;Mamory
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
					<p>#React Native</p>
					<p>#FE - 2</p>
				</div>
				<div className="hash2">
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
				&nbsp;
				<PurpleText>
					일상을 기록하는 데 여러 앱을 사용해야 하는 불편함
				</PurpleText>
				을 해소하기 위해 마모리를 개발했습니다. 해당 프로젝트는{" "}
				<PurpleText>frontEnd</PurpleText> 두 명이서 진행을 했습니다.{" "}
				<PurpleText>backEnd</PurpleText>가 없어서 직접 데이터베이스를 만들어보고{" "}
				<PurpleText>AWS S3 스토리지</PurpleText>를 사용해 보면서 많은 경험을 할
				수 있었습니다.
				<br />
				<br />
				&nbsp;<PurpleText>React Native</PurpleText>의{" "}
				<PurpleText>useState, useContext, useEffect</PurpleText> 등 다양한
				<PurpleText> Hook</PurpleText>을 사용해 볼 수 있었습니다. 또한, 사용자의
				기기에 알람을 보내기 위해{" "}
				<PurpleText>react-native-permissions</PurpleText> 와
				<PurpleText> react-native-push-notification</PurpleText> 라이브러리를
				사용했습니다.
			</p>
			<br />
			<div className="project-minimal-content">
				<h3>
					<br />
					&nbsp;●&nbsp;<PurpleText>useContext, AsyncStorage</PurpleText>을
					사용하여 테마 기능 구현
					<br />
					<br />
					&nbsp;●&nbsp;IOS, Android 동시 개발
					<br />
					<br />
				</h3>
			</div>
			<br />
			<div className="project-summary-content">
				<div className="project-summary-inner-content">
					<h2>✔&nbsp;역할</h2>
					<p>
						<strong>&nbsp;Todo 알람 기능</strong>
						<br />
						<strong>&nbsp;영화, 책 리뷰 기능</strong>
						<br />
						<strong>&nbsp;로그인 유지 기능</strong>
						<br />
						<strong>&nbsp;테마 기능</strong>
					</p>
				</div>
				<div>
					<h2>✔&nbsp;주요 기능</h2>
					<p>
						<strong>&nbsp;다이어리</strong>
						<br />
						<strong>&nbsp;할 일 목록</strong>
						<br />
						<strong>&nbsp;영화/책 리뷰</strong>
						<br />
						<strong>&nbsp;마이페이지</strong>
						<br />
						<strong>&nbsp;한 달간의 감정 비율 확인</strong>
					</p>
				</div>
			</div>
			<br />
			<div className="see-more-container">
				<a
					className="see-more-btn"
					target="_blank"
					href="https://stirring-viscount-3c3.notion.site/Mamory-fae6726a638f4445a6446db435688c5e?pvs=4"
				>
					See More
					<p style={{ fontSize: "10px", textAlign: "center" }}>click</p>
				</a>
			</div>
			<style jsx>{`
				h1 {
					display: flex;
					align-items: center;
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					width: 50%;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}

				.slider {
					display: flex;
					justify-content: center;
				}
			`}</style>
		</>
	);
};

const Portfolio = () => {
	const images = [
		{ url: "/portfolio/project1.png" },
		{ url: "/portfolio/project2.png" },
		{ url: "/portfolio/project3.png" },
		{ url: "/portfolio/project4.png" },
		{ url: "/portfolio/project4-1.png" },
	];

	return (
		<>
			2023.03
			<br />
			<br />
			<div className="project-header">
				<h1>
					<Image src={"/portfolio/me.png"} width={40} height={40} alt="me" />
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
			<ImageSlider images={images} />
			<br />
			<p>
				&nbsp;저를 표현할 수 있는 웹 사이트가 필요하다고 생각하여, 포트폴리오
				용도로 만든 웹 사이트입니다. 동시에 Next.js와 TypeScript 학습을 위해
				Next.js와 TypeScript를 사용하여 제작하였습니다.
				<br />
				<br />
				&nbsp;많은 양의 애니메이션을 넣다 보니 성능 문제를 많이 겪었습니다.
				Debounce 함수를 구현하여 이밴트 호출 횟수 최적화하였습니다.
			</p>
			<br />
			<div className="project-minimal-content">
				<h3>
					<br />
					&nbsp;●&nbsp;<PurpleText>Image Slider</PurpleText> 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>IntersectionObserver API</PurpleText>를
					사용하여 요소가 자연스럽게 나타나는 애니메이션 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>Debounce</PurpleText>를 구현하여 리렌더링
					최적화
					<br />
					<br />
				</h3>
			</div>
			<br />
			<div className="see-more-container">
				<a
					className="see-more-btn"
					target="_blank"
					href="https://stirring-viscount-3c3.notion.site/Mamory-fae6726a638f4445a6446db435688c5e?pvs=4"
				>
					See More
					<p style={{ fontSize: "10px", textAlign: "center" }}>click</p>
				</a>
			</div>
			<style jsx>{`
				h1 {
					display: flex;
					align-items: center;
					font-size: 2rem;
				}
				h2 {
					font-size: 1.5rem;
					width: 50%;
					border-bottom: 1px solid black;
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}
			`}</style>
		</>
	);
};

const ProjectContainer = memo(() => {
	const [project, setProject] = useState<string>("https://pongworld");
	const projectContentRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const onClickFullScreen = (e: React.MouseEvent) => {
		const $container = e.currentTarget.closest(
			".project-container"
		) as HTMLElement;
		$container.classList.toggle("full-screen");
		document.body.classList.toggle("full-screen");
		if (projectContentRef) projectContentRef.current?.scrollIntoView();
	};

	const onClickTab = (projectName: string, event: MouseEvent) => {
		if (projectContentRef) projectContentRef.current?.scrollTo(0, 0);
		setProject("https://" + projectName);
		const currentActive = document.querySelector(".tab-menu .active");
		if (currentActive) currentActive.classList.remove("active");
		const target = event.target as HTMLElement;
		target.classList.add("active");
	};

	const onClickReload = () => {
		router.reload();
	};

	const RenderProject = () => {
		if (project === "https://pongworld") return PongWorld();
		else if (project === "https://ticktock") return TickTock();
		else if (project === "https://portfolio") return Portfolio();
		else if (project === "https://mamory") return Mamory();
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
				<div className="project" onClick={(e) => onClickTab("portfolio", e)}>
					Portfolio
				</div>
				<div className="project" onClick={(e) => onClickTab("mamory", e)}>
					Mamory
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
			<div className="project-content" ref={projectContentRef}>
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
