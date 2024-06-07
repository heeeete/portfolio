import Image from "next/image";
import PurpleText from "../ColorTextComponents/PurpleText";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ImageSlider = dynamic(() => import("simple-image-carousel"), {
	ssr: false,
});

const images = [
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory1.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory2.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory3.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory3-1.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory3-2.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory4.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory5.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory6.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory7.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory8.png" },
	{ url: "https://heeeete.github.io/portfolio/mamory/mamory9.png" },
];

const Mamory = () => {
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
			document.body.classList.remove("full-screen");
		};

		window.addEventListener("popstate", handlePopState);

		return () => {
			window.removeEventListener("popstate", handlePopState);
		};
	}, []);

	return (
		<>
			2023.05 - 2023.11
			<br />
			<br />
			<div className="project-header">
				<h1>
					<Image
						src={"https://heeeete.github.io/portfolio/mamory/mamory.png"}
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
					<p>#Mysql</p>
					<p>#AWS S3</p>
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
				<ImageSlider
					images={images}
					width={200}
					arrowColor="rgb(255, 234, 0)"
					dotColor="rgb(255, 234, 0)"
				/>
			</div>
			<br />
			<p style={{ fontSize: "16px" }}>
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
				&nbsp;인생 첫 프로젝트를 시작하면서 <PurpleText>Git</PurpleText>으로
				협업을 해보고, <PurpleText>React-Native, Mysql, RestAPI</PurpleText> 등
				모든 것이 처음이라 힘든 부분이 정말 많았지만{" "}
				<PurpleText>CSS, JavaScript, React</PurpleText> 등 웹 개발의 기본 지식을
				습득할 수 있었고, 개발의 매력을 알게 된 저의 첫 번째 프로젝트입니다.
			</p>
			<br />
			<div className="project-minimal-content">
				<h3 style={{ fontSize: "20px" }}>
					<br />
					&nbsp;●&nbsp;<PurpleText>useContext, AsyncStorage</PurpleText>을
					사용하여 테마 기능 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>react-native-permissions</PurpleText> 와
					<PurpleText> react-native-push-notification</PurpleText>을 사용하여
					알람 기능 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>영화, 도서 API</PurpleText>를 사용해 리뷰
					기능 구현
					<br />
					<br />
					&nbsp;●&nbsp;<PurpleText>IOS, Android</PurpleText> 동시 개발
					<br />
					<br />
				</h3>
			</div>
			<br />
			<div className="project-summary-content">
				<div className="project-summary-inner-content">
					<h2 style={{ fontSize: "18px" }}>✔&nbsp;역할</h2>
					<p style={{ fontSize: "16px" }}>
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
					<h2 style={{ fontSize: "18px" }}>✔&nbsp;주요 기능</h2>
					<p style={{ fontSize: "16px" }}>
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
						src="https://heeeete.github.io/portfolio/mamory/mamory.html"
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

				.slider {
					display: flex;
					justify-content: center;
					align-items: center;
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
					z-index: 1100;
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

export default Mamory;
