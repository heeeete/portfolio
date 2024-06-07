import { forwardRef, useState, useRef, MouseEvent, useCallback } from "react";
import ObserverItem from "./ObserverItem";
import { useRouter } from "next/router";
import React, { memo } from "react";
import PongWorld from "./ProjectComponents/PongWorld";
import Mamory from "./ProjectComponents/Mamory";
import Portfolio from "./ProjectComponents/Portfolio";
import TickTock from "./ProjectComponents/TickTock";

const ProjectContainer = memo(({ project }: { project: string }) => {
	const projectContentRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	const onClickFullScreen = useCallback((e: React.MouseEvent) => {
		const $container = e.currentTarget.closest(
			".project-container"
		) as HTMLElement;
		$container.classList.toggle("full-screen");
		document.body.classList.toggle("full-screen");
		if (projectContentRef) projectContentRef.current?.scrollIntoView();
	}, []);

	const onClickReload = useCallback(() => {
		router.reload();
	}, []);

	const RenderProject = () => {
		if (project === "pongworld") return <PongWorld />;
		else if (project === "ticktock") return <TickTock />;
		else if (project === "portfolio") return <Portfolio />;
		else if (project === "mamory") return <Mamory />;
	};

	return (
		<div className="project-container item">
			<div className="nav-menu">
				<button className="nav-menu-btn"></button>
				<button className="nav-menu-btn second"></button>
				<button
					className="nav-menu-btn third"
					onClick={onClickFullScreen}
				></button>
			</div>
			<div className="tab-menu">
				<div className="project active">{project}</div>
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
					readOnly
					type="text"
					value={`https://${project}.com`}
				/>
			</div>
			<div className="project-content" ref={projectContentRef}>
				<RenderProject />
			</div>
			<style jsx>{`
				.project-container {
					display: flex;
					flex-direction: column;
					height: 80vh;
					max-width: 800px;
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
					background-color: rgb(98, 197, 84);
				}

				.tab-menu {
					background-color: #606060;
					display: flex;
				}
				.tab-menu > * {
					text-align: center;
					white-space: nowrap;
					overflow: hidden;
					transition: 0.3s;
					cursor: pointer;
					padding: 8px;
					border-radius: 10px;
					width: 100px;
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
				<div className="browser">
					<div>
						<ProjectContainer project="pongworld" />
					</div>
					<div style={{ alignSelf: "flex-end" }}>
						<ProjectContainer project="ticktock" />
					</div>
					<div>
						<ProjectContainer project="portfolio" />
					</div>
					<div style={{ alignSelf: "flex-end" }}>
						<ProjectContainer project="mamory" />
					</div>
				</div>
				<style jsx>{`
					.container {
						display: flex;
						position: relative;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						max-width: 1280px;
						margin-left: auto;
						margin-right: auto;
					}
					.title-container {
						padding: 0;
						margin-top: 70px;
					}
					.browser {
						display: flex;
						flex-direction: column;
						width: 100%;
						z-index: 1000;
						margin-block: 70px;

						& > * {
							margin-block: 70px;
						}
					}
					.open-portfolio {
						display: flex;
						position: absolute;
						background-color: #d3d3d35a;
						border-radius: 50%;
						width: 150px;
						height: 150px;
						font-weight: bold;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						z-index: 1;
						transition: 0.2s;

						&:hover {
							scale: 1.1;
						}
					}
				`}</style>
			</section>
		);
	}
);

export default ProjectScreen;
