import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ImageSlider = dynamic(() => import("simple-image-carousel"), {
	ssr: false,
});

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

const images: { url: string }[] = [
	{ url: "https://heeeete.github.io/portfolio/pongWorld/pongWorld1.png" },
	{ url: "https://heeeete.github.io/portfolio/pongWorld/pongWorld2.png" },
	{ url: "https://heeeete.github.io/portfolio/pongWorld/pongWorld3.png" },
	{ url: "https://heeeete.github.io/portfolio/pongWorld/pongWorld4.png" },
	{ url: "https://heeeete.github.io/portfolio/pongWorld/pongWorld5.png" },
	{ url: "https://heeeete.github.io/portfolio/pongWorld/pongWorld6.png" },
];
const PongWorld = () => {
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
			<div className="image-slider-container">
				<ImageSlider images={images} />
			</div>
			<br />
			<p style={{ fontSize: "16px" }}>
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
				&nbsp;서버와 양방향 통신을 하기 위해 처음으로{" "}
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
				<h3 style={{ fontSize: "20px" }}>
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
					가독성과 유지 보수 향상
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
					<h2 style={{ fontSize: "18px" }}>✔&nbsp;역할</h2>
					<p style={{ fontSize: "16px" }}>
						<strong>&nbsp;SPA 구현</strong>
						<br />
						<strong>&nbsp;실시간 게임 기능</strong>
						<br />
						<strong>&nbsp;실시간 채팅 기능</strong>
						<br />
						<strong>&nbsp;로그인 기능</strong>
						<br />
						<strong>&nbsp;마이페이지 기능</strong>
						<br />
						<strong>&nbsp;모달 기능</strong>
					</p>
				</div>
				<div>
					<h2 style={{ fontSize: "18px" }}>✔&nbsp;주요 기능</h2>
					<p style={{ fontSize: "16px" }}>
						<strong>&nbsp;실시간 핑퐁 게임</strong>
						<br />
						<strong>&nbsp;토너먼트 게임</strong>
						<br />
						<strong>&nbsp;실시간 채팅</strong>
						<br />
						<strong>&nbsp;친구 관리(차단, 친구 추가, 삭제)</strong>
						<br />
						<strong>&nbsp;마이페이지 </strong>
					</p>
				</div>
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
						src="https://heeeete.github.io/portfolio/pongWorld/pongWorld.html"
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

export default PongWorld;
