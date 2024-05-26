import { forwardRef } from "react";
import ObserverItem from "./ObserverItem";
import Image from "next/image";
import DownArrow from "./DownArrow";

const SkillScreen = forwardRef<
	HTMLDivElement,
	{ visibleItems: Set<string>; projectRef: React.RefObject<HTMLDivElement> }
>((props, ref) => {
	const { visibleItems, projectRef } = props;
	return (
		<section className="container" ref={ref}>
			<header className="title-container">
				<ObserverItem
					key={"skillHeader"}
					visible={visibleItems.has(`ID-skillHeader`)}
				>
					<h1
						className="observer title responsive-text"
						data-id="ID-skillHeader"
					>
						My Skill
					</h1>
				</ObserverItem>
			</header>
			<article className="skillContainer">
				<div className="line responsive-text">Frontend</div>
				<ObserverItem
					key={"frontSkill"}
					visible={visibleItems.has("ID-frontSkill")}
				>
					<div className="observer forntend-skill" data-id="ID-frontSkill">
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/HTML5.svg"}
								alt="HTML"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/CSS.svg"}
								alt="CSS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/JS.svg"}
								alt="JS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									borderRadius: 10,
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/TS.png"}
								alt="JS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/REACT.png"}
								alt="JS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/nextJS.png"}
								alt="JS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				</ObserverItem>
				<div className="line responsive-text">Backend</div>
				<ObserverItem key={"backend"} visible={visibleItems.has("ID-backend")}>
					<div className="observer backend-skill" data-id="ID-backend">
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/nodeJS.png"}
								alt="JS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				</ObserverItem>
				<div className="line responsive-text">Mobile App</div>
				<ObserverItem
					key={"mobileApp"}
					visible={visibleItems.has("ID-mobileApp")}
				>
					<div className="observer mobile-skill" data-id="ID-mobileApp">
						<div className="mobile-img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/RN.webp"}
								alt="JS"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									borderRadius: 10,
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				</ObserverItem>
				<div className="line responsive-text">Version Control</div>
				<ObserverItem
					key={"versionCon"}
					visible={visibleItems.has("ID-versionCon")}
				>
					<div
						className="observer version-control-skill"
						data-id="ID-versionCon"
					>
						<div className="version-img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/GIT.svg"}
								alt="GIT"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="version-img-container github">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/github.png"}
								alt="GIT"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				</ObserverItem>
				<div className="line responsive-text">Other Language</div>
				<ObserverItem key={"ohter"} visible={visibleItems.has("ID-ohter")}>
					<div className="observer other-skill" data-id="ID-ohter">
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/C.png"}
								alt="C"
								width={1}
								height={1}
								style={{
									width: "100%",
									height: "100%",
									borderRadius: 10,
									objectFit: "contain",
								}}
							/>
						</div>
						<div className="img-container">
							<Image
								className="image"
								src={"https://heeeete.github.io/portfolio/cpp.svg"}
								width={1}
								height={1}
								alt="C"
								style={{
									width: "100%",
									height: "100%",
									borderRadius: 10,
									objectFit: "contain",
								}}
							/>
						</div>
					</div>
				</ObserverItem>
			</article>
			<div className="Arrow">
				<DownArrow ArrowColor="white" targetRef={projectRef} />
			</div>
			<style jsx>
				{`
					.container {
						display: flex;
						flex-direction: column;
						position: relative;
						align-items: center;
						width: 100dvw;
					}
					.skillContainer {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					.title-container {
						display: flex;
						justify-content: center;
						padding-top: 100px;
						padding-bottom: 100px;
					}
					.line {
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 1.5em;
						width: 100%;
					}
					.line::before,
					.line::after {
						content: "";
						flex-grow: 1;
						background: rgba(255, 255, 255, 0.35);
						height: 1px;
						font-size: 0px;
						line-height: 0px;
						margin: 0px 10px;
					}

					.forntend-skill,
					.version-control-skill,
					.backend-skill,
					.mobile-skill,
					.other-skill {
						width: 10sdvw;
						display: grid;
						box-sizing: border-box;
						justify-items: center;
						align-items: center;
						background-color: rgba(128, 128, 128, 0.343);
						margin: 1em;
						padding: 1em;
						border-radius: 10px;
					}

					.forntend-skill {
						grid-template-columns: repeat(3, 6fr);
					}

					.version-control-skill {
						grid-template-columns: repeat(2, 2fr);
					}

					.other-skill {
						grid-template-columns: repeat(2, 2fr);
					}

					.img-container {
						padding: 20px;
						width: 110px;
						height: 100%;
						transition: 0.5s;
						filter: drop-shadow(5px 5px 5px black);
					}

					.mobile-img-container,
					.version-img-container {
						width: 150px;

						transition: 0.5s;
						filter: drop-shadow(5px 5px 5px black);
					}
					.version-img-container.github {
						background: white;
						width: 200px;
						display: flex;
						padding: 10px;
						border-radius: 10px;
						object-fit: contain;
					}

					.img-container:hover,
					.mobile-img-container:hover,
					.version-img-container:hover {
						transform: translateY(-20px);
					}

					@media all and (max-width: 768px) {
						.title {
							font-size: 2rem;
						}
						.img-container {
							width: 70px;
							margin: 0;
							padding: 5px;
						}
						.mobile-img-container,
						.version-img-container,
						.version-img-container.github {
							width: 100px;
							margin: 10px;
						}
					}
				`}
			</style>
		</section>
	);
});

export default SkillScreen;
