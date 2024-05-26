import Image from "next/image";
import Link from "next/link";
import PurpleText from "../ColorTextComponents/PurpleText";
import dynamic from "next/dynamic";

const ImageSlider = dynamic(() => import("simple-image-carousel"), {
	ssr: false,
});

const Portfolio = () => {
	const images = [
		{ url: "https://heeeete.github.io/portfolio/portfolio/project1.png" },
		{ url: "https://heeeete.github.io/portfolio/portfolio/project2.png" },
		{ url: "https://heeeete.github.io/portfolio/portfolio/project3.png" },
		{ url: "https://heeeete.github.io/portfolio/portfolio/project4.png" },
		{ url: "https://heeeete.github.io/portfolio/portfolio/project4-1.png" },
	];

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
				<ImageSlider images={images} enableLoop={false} />
			</div>
			<br />
			<p>
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
				<h3>
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
			<div className="see-more-container">
				<a
					className="see-more-btn"
					target="_blank"
					href="https://stirring-viscount-3c3.notion.site/Portfolio-8f00ed2771e94a578a14e27d82fc845f?pvs=4"
				>
					See More
					<p style={{ fontSize: "10px", textAlign: "center" }}>click</p>
				</a>
			</div>
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
			`}</style>
		</>
	);
};

export default Portfolio;
