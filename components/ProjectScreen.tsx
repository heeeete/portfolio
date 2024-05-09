import { forwardRef, useEffect, useState, useRef } from "react";
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

const PongWorld = () => {
	const images: { url: string }[] = [
		{ url: "/login.png" },
		{ url: "/home.png" },
		{ url: "/game.png" },
		{ url: "/chat.png" },
		{ url: "/mypage.png" },
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
					<p>#FE - 2</p>
					<p>#BE - 2</p>
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
				PongWorld 프로젝트는 외부 라이브러리 없이 VanillaJS를 이용해 SPA
				방식으로 개발한 실시간 PingPong 게임 플랫폼입니다.
			</p>
			<br />
			<div>
				<h3>✔︎&nbsp;실시간 웹페이지 구현</h3>
				<br />
				<h3>
					✔︎&nbsp;<PurpleText>"Websocket"</PurpleText>을 이용한 실시간 멀티 게임
					구현
				</h3>
				<br />

				<h3>
					✔︎&nbsp;<PurpleText>HTML history API</PurpleText>를 이용해 SPA 페이지
					구현
				</h3>
				<br />
				<h3>
					✔︎&nbsp;<PurpleText>DOM을 클래스로 추상화</PurpleText>하여 가독성과
					유지보수 향상
				</h3>
				<br />
				<h3>
					✔︎&nbsp;<PurpleText>requestAnimationFrame()</PurpleText>을 사용하여
					부드러운 애니메이션 구현
				</h3>
				<br />
				<h3>✔︎&nbsp;다양한 뷰포트 지원</h3>
				<br />
			</div>
			<div>
				<h2>역할</h2>
				<p>
					<strong>✔︎&nbsp;SPA구현</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;실시간 게임</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;실시간 채팅</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;로그인</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;마이페이지</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;모달구현</strong>
				</p>
			</div>
			<br />
			<div>
				<h2>개선 / 문제해결 사례 1 - 애니메이션 최적화</h2>
				<h3>&nbsp;문제</h3>
				<p>&nbsp;&nbsp;-탁구채를 60FPS으로 움직이면 버벅거리는 현상 발생</p>
				<br />
				<h3>&nbsp;원인</h3>
				<p>
					&nbsp;&nbsp;-setInterval : 기존에 아래와 같이 60FPS설정을
					setInterval()로 구현을 했다. 이 방법은 JavaScript 이벤트 루프 내에서
					비동기적으로 실행되며 정확한 타이머주기를 보장하지 않는다. 지연이
					누적되다 보면 프레임 드랍이 생긴다.
				</p>
				<Image
					src={"/pongWorldCode1.png"}
					alt="code1"
					width={100}
					height={100}
					style={{
						width: "100%",
						height: "100%",
						maxWidth: "1200px",
					}}
				/>
				<br />
				<p>
					&nbsp;&nbsp;-리렌더링 : 탁구채의 위치를 변경할때 top, botton, left,
					right 등 position CSS 속성를 사용한다. 해당 속성은 다른 엘리먼트에
					영향을 끼치기 때문에 리플로우, 리페인트가 발생하게 된다. 탁구채가
					60프레임으로 움직이는데 1초에 60번씩 새로 화면을 그리게 되면서 환경에
					따라 버벅이는 현상이 생긴다.
				</p>
				<br />
				<h3>&nbsp;해결</h3>
				<p>
					&nbsp;&nbsp;-<strong>setInterval()</strong>대신{" "}
					<strong>requestAnimationFrame()</strong>을 사용 : 브라우저가 렌더링 될
					타이밍에 맞춰서 미리 함수를 예약을 해서 렌더링 주기에 맞는 부르더운
					애니메이션을 구현 할 수 있다.
				</p>
				<p>
					&nbsp;&nbsp;-<strong>position</strong>말고 <strong>transform</strong>
					속성을 이용 : 개발자 도구로 position과 translate를 각각 사용해서
					성능을 확인해보면 position은 레이아웃 변경과 더불어 리페인트,
					리플로우가 많이 일어난 것을 확인 할 수 있다. 그에 반해 translate는
					레이아웃 변경 없이 깔끔한 상태를 볼 수 있다. <br />
					&nbsp;그리고 translate는 GPU를 사용하는데 position은 연산이 많아져도
					CPU로만 연산을 수행해서 과부하가 올 수 있지만 translate는 연산을 할때
					GPU를 사용한다 GPU는 그래픽 처리에 특화된 하드웨어로, 병렬 처리 능력이
					뛰어나 많은 양의 계산을 빠르게 처리할 수 있다.
				</p>
				<div className="row-img">
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							textAlign: "center",
						}}
					>
						<Image
							src={"/position-img.png"}
							alt="code"
							width={100}
							height={100}
							style={{
								width: "100%",
								height: "100%",
								maxWidth: "600px",
							}}
						/>
						position
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							textAlign: "center",
						}}
					>
						<Image
							src={"/translate-img.png"}
							alt="code"
							width={100}
							height={100}
							style={{
								width: "100%",
								height: "100%",
								maxWidth: "600px",
							}}
						/>
						translate
					</div>
				</div>
				<h3>&nbsp;성과</h3>
				<p>
					&nbsp;&nbsp;-프레임 드랍 발생 빈도가 크게 감소하여, 게임의 FPS가 평균
					59fps로 유지되며, 최저 FPS가 58fps로 이전 15fps에서 크게
					개선되었습니다.
				</p>
				<Image
					src={"/a.png"}
					alt="code"
					width={300}
					height={300}
					style={{ width: "100%", height: "100%", maxWidth: "600px" }}
				/>
			</div>
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
					flex-wrap: wrap;
				}
				.hash2,
				.hash1 {
					display: flex;
					flex-wrap: wrap;
					white-space: nowrap;
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
				.row-img {
					display: flex;
					flex-direction: row;
					justify-content: center;
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
				</div>
				<div className="hash2">
					<p>#Animation</p>
					<p>#Clock</p>
					<p>#SideProject</p>
				</div>
			</div>
			<br />
			<p>
				&nbsp;기존 시계의 형태를 유지하면서도 창의적이고 재미있는 방식으로
				시간을 표현하는 웹을 개발하였습니다. 이 프로젝트는 애니메이션과 CSS를
				섬세하게 활용하여 시각적으로 재미있는 사용자 경험을 제공하는 것을 목표로
				하였습니다.
			</p>
			<div className="ticktock-iframe-container">
				<iframe
					className="ticktock-iframe"
					src="https://heeeete.github.io/tick-tock/"
				></iframe>
			</div>
			<div>
				<h3>✔︎&nbsp;다양한 국가 지원</h3>
				<p>
					&nbsp;&nbsp;-다양한 국가에서의 사용을 고려하여{" "}
					<PurpleText>moment-timezone</PurpleText> 라이브러리를 통해 다양한
					시간대를 지원하도록 구현하였습니다.
				</p>
				<br />
				<h3>✔︎&nbsp;다양한 뷰포트 지원</h3>
				<p>
					&nbsp;&nbsp;-<PurpleText>vw, vh</PurpleText>단위를 활용하여 뷰포트
					크기에 기반한 유연한 레이아웃을 구현
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
		{ url: "/mamory3-1.png" },
		{ url: "/mamory4.png" },
		{ url: "/mamory5.png" },
		{ url: "/mamory6.png" },
		{ url: "/mamory7.png" },
		{ url: "/mamory8.png" },
		{ url: "/mamory9.png" },
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
				을 해소하기 위해 마모리를 개발했습니다.{" "}
				<PurpleText>
					이 앱은 다이어리, 할 일 목록 그리고 영화, 책 리뷰와 같이 다양한 기능을
					하나의 플랫폼
				</PurpleText>
				에서 제공함으로써 사용자가 하나의 앱으로 일상 기록을 편리하게 할 수 있게
				합니다.
			</p>
			<p>
				&nbsp;해당 프로젝트는 두명이서 진행을 했고, frontEnd 두 명이서 서버
				구현을 동시에 진행하였습니다.
			</p>
			<br />
			<div>
				<h3>✔︎&nbsp;다양한 국가 지원</h3>
				<p>
					&nbsp;&nbsp;-다양한 국가에서의 사용을 고려하여{" "}
					<PurpleText>moment-timezone</PurpleText> 라이브러리를 통해 다양한
					시간대를 지원하도록 구현
				</p>
				<br />
				<h3>✔︎&nbsp;다양한 뷰포트 지원</h3>
				<p>
					&nbsp;&nbsp;-vw, vh단위를 활용하여 뷰포트 크기에 기반한 유연한
					레이아웃을 구현
				</p>
				<br />
				<h3>✔︎&nbsp;IOS, Android 동시 개발</h3>
				<br />
				<h3>✔︎&nbsp;다양한 테마 지원</h3>
				<p>
					&nbsp;&nbsp;-<PurpleText>useContext Hook</PurpleText>을 사용하여 테마
					기능 구현
				</p>
			</div>
			<br />
			<div>
				<h2>역할</h2>
				<p>
					<strong>✔︎&nbsp;Todo 알람 기능</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;영화, 책 리뷰 기능</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;로그인 유지 기능</strong>
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
					<p>#IOS</p>
					<p>#Android</p>
					<p>#SideProject</p>
				</div>
			</div>
			<br />
			<div className="slider">
				<ImageSlider images={images} />
			</div>
			<br />
			<p>
				&nbsp;
				<PurpleText>
					일상을 기록하는 데 여러 앱을 사용해야 하는 불편함
				</PurpleText>
				을 해소하기 위해 마모리를 개발했습니다.{" "}
				<PurpleText>
					이 앱은 다이어리, 할 일 목록 그리고 영화, 책 리뷰와 같이 다양한 기능을
					하나의 플랫폼
				</PurpleText>
				에서 제공함으로써 사용자가 하나의 앱으로 일상 기록을 편리하게 할 수 있게
				합니다.
			</p>
			<p>
				&nbsp;해당 프로젝트는 두명이서 진행을 했고, frontEnd 두 명이서 서버
				구현을 동시에 진행하였습니다.
			</p>
			<br />
			<div>
				<h3>✔︎&nbsp;다양한 국가 지원</h3>
				<p>
					&nbsp;&nbsp;-다양한 국가에서의 사용을 고려하여{" "}
					<PurpleText>moment-timezone</PurpleText> 라이브러리를 통해 다양한
					시간대를 지원하도록 구현
				</p>
				<br />
				<h3>✔︎&nbsp;다양한 뷰포트 지원</h3>
				<p>
					&nbsp;&nbsp;-vw, vh단위를 활용하여 뷰포트 크기에 기반한 유연한
					레이아웃을 구현
				</p>
				<br />
				<h3>✔︎&nbsp;IOS, Android 동시 개발</h3>
				<br />
				<h3>✔︎&nbsp;다양한 테마 지원</h3>
				<p>
					&nbsp;&nbsp;-<PurpleText>useContext Hook</PurpleText>을 사용하여 테마
					기능 구현
				</p>
			</div>
			<br />
			<div>
				<h2>역할</h2>
				<p>
					<strong>✔︎&nbsp;Todo 알람 기능</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;영화, 책 리뷰 기능</strong>
				</p>
				<p>
					<strong>✔︎&nbsp;로그인 유지 기능</strong>
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
