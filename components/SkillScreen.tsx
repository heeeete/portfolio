import { forwardRef, useEffect, useRef } from "react";
import ObserverItem from "./ObserverItem";
import Image from "next/image";

const SkillScreen = forwardRef<HTMLDivElement, { visibleItems: Set<string> }>(
	(props, ref) => {
		const { visibleItems } = props;
		return (
			<section className="container" ref={ref}>
				<header className="header">
					<ObserverItem
						key={"skillHeader"}
						visible={visibleItems.has(`ID-skillHeader`)}
					>
						<h1 className="observer headerText" data-id="ID-skillHeader">
							My Skill
						</h1>
					</ObserverItem>
				</header>
				<article className="skillContainer">
					<div className="line">Frontend</div>
					<ObserverItem
						key={"frontSkill"}
						visible={visibleItems.has("ID-frontSkill")}
					>
						<div className="observer forntend-skill" data-id="ID-frontSkill">
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/HTML5.svg")}
									alt="HTML"
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
									src={require("../public/CSS.svg")}
									alt="CSS"
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
									src={require("../public/JS.svg")}
									alt="JS"
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
									src={require("../public/TS.png")}
									alt="JS"
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
									src={require("../public/REACT.png")}
									alt="JS"
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
									src={require("../public/nextJS.png")}
									alt="JS"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
								/>
							</div>
						</div>
					</ObserverItem>
					<div className="line">Backend</div>
					<ObserverItem
						key={"backend"}
						visible={visibleItems.has("ID-backend")}
					>
						<div className="observer backend-skill" data-id="ID-backend">
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/nodeJS.png")}
									alt="JS"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
								/>
							</div>
						</div>
					</ObserverItem>
					<div className="line">Mobile App</div>
					<ObserverItem
						key={"mobileApp"}
						visible={visibleItems.has("ID-mobileApp")}
					>
						<div className="observer mobile-skill" data-id="ID-mobileApp">
							<div className="mobile-img-container">
								<Image
									className="image"
									src={require("../public/RN.webp")}
									alt="JS"
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
					<div className="line">Version Control</div>
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
									src={require("../public/GIT.svg")}
									alt="GIT"
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
									src={require("../public/github.png")}
									alt="GIT"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "contain",
									}}
									layout="responsive"
								/>
							</div>
						</div>
					</ObserverItem>
					<div className="line">Other Language</div>
					<ObserverItem key={"ohter"} visible={visibleItems.has("ID-ohter")}>
						<div className="observer other-skill" data-id="ID-ohter">
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/C.png")}
									alt="C"
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
									src={require("../public/cpp.svg")}
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
				<style jsx>
					{`
                        .container {
                            position: relative;
                            background-color: black;
                            color: white;
                            width: 100dvw;
                        }
						.skillContainer {
							display: flex;
							flex-direction: column;
							align-items: center;
						}
                        .header {
                            display: flex;
                            justify-content: center;
                            padding-top: 80px;
                            padding-bottom: 10vh;
                        }
                        .headerText {
                            font-size: 4em;
                        }
                        .line {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 1.5em;
                        }
                        .line::before,
                        .line::after {
                            content: "";
                            flex-grow: 1;
                            background: rgba(255, 255, 255, 0.35);
                            height: 1px;
                            font-size: 0px;
                            line-height: 0px;
                            margin: 0px 100px;
                        }

                        .forntend-skill,
                        .version-control-skill,
                        .backend-skill,
                        .mobile-skill,
                        .other-skill {'
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

                        .image {
                        }

                        @media all and (max-width: 768px) {
                            .headerText {
                                font-size: 2rem;
                            }
                        }
						@media all and (width < 369px) {

						}
                    `}
				</style>
			</section>
		);
	}
);

export default SkillScreen;
