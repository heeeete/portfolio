import PurpleText from "../ColorTextComponents/PurpleText";
import { useState, useEffect } from "react";

const TickTock = () => {
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
					&nbsp;●&nbsp;<PurpleText>vw, vh</PurpleText> 단위를 활용하여 뷰포트
					크기에 기반한 유연한 레이아웃을 구현
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
						src="https://heeeete.github.io/portfolio/tickTock/tickTock.html"
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
				}
				h3 {
					font-size: 1.2rem;
				}
				a {
					text-decoration: none;
					color: #b23eff;
				}

				.ticktock-iframe-container {
					margin-block: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.ticktock-iframe {
					border: none;
					width: 30dvw;
					height: 30dvw;
					min-width: 300px;
					min-height: 300px;
					border-radius: 50%;
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

export default TickTock;
