import { forwardRef } from "react";
import ObserverItem from "./ObserverItem";
import Image from "next/image";

const SkillScreen = forwardRef<HTMLDivElement, { visibleItems: Set<string> }>(
	(props, ref) => {
		const { visibleItems } = props;
		return (
			<section className="container">
				<header className="headera">
					<ObserverItem
						key={"skillHeader"}
						visible={visibleItems.has(`ID-skillHeader`)}
					>
						<h1
							className="observer"
							data-id="ID-skillHeader"
							style={{ fontSize: "4em" }}
						>
							My Skill
						</h1>
					</ObserverItem>
				</header>
				<article>
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
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/CSS.svg")}
									alt="CSS"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/JS.svg")}
									alt="JS"
									style={{ width: "100%", height: "100%", borderRadius: 10 }}
								/>
							</div>
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/TS.png")}
									alt="JS"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/REACT.png")}
									alt="JS"
									style={{ width: "100%", height: "100%" }}
								/>
							</div>
							<div className="img-container">
								<Image
									className="image"
									src={require("../public/nextJS.png")}
									alt="JS"
									style={{ width: "100%", height: "100%" }}
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
									style={{ width: "100%", height: "100%", borderRadius: 10 }}
								/>
							</div>
						</div>
					</ObserverItem>
				</article>
				<style jsx>
					{`
						.container {
							background-color: black;
							color: white;
						}
						.headera {
							display: flex;
							justify-content: center;
							padding-top: 80px;
							padding-bottom: 10vh;
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
							margin: 0px 16px;
						}

						.forntend-skill {
							display: grid;
							grid-template-columns: repeat(6, 6fr);
							justify-items: center;
							background-color: rgba(128, 128, 128, 0.343);
							margin: 2em;
							padding: 2em;
							border-radius: 10px;
							box-shadow: 0px 0px 50px 1px white;
						}

						.img-container {
							width: 12vw;
							height: 12vw;
							transition: 0.5s;
						}

						.img-container:hover,
						.mobile-img-container:hover {
							transform: translateY(-20px);
						}

						.image {
							width: 100%;
							height: 100%;
						}

						.mobile-skill {
							display: grid;
							width: 30vw;
							grid-template-columns: 1fr;
							background-color: rgba(128, 128, 128, 0.343);
							margin: 2em;
							padding: 1em;
							border-radius: 10px;
							box-shadow: 0px 0px 50px 1px white;
						}

						.mobile-img-container {
							transition: 0.5s;
						}
					`}
				</style>
			</section>
		);
	}
);

export default SkillScreen;
