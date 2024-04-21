import { Nova_Square } from "next/font/google";
import { useState, useEffect, useCallback } from "react";

const Nova_square = Nova_Square({ subsets: ["latin"], weight: "400" });
export default function NavBar({
	aboutRef,
	firstRef,
	skillRef,
}: {
	aboutRef: React.RefObject<HTMLDivElement>;
	firstRef: React.RefObject<HTMLDivElement>;
	skillRef: React.RefObject<HTMLDivElement>;
}) {
	const scrollToFirst = () => {
		if (firstRef.current) {
			firstRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToAbout = () => {
		if (aboutRef.current) {
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
			toggleMenu();
		}
	};

	const scrollToSkill = () => {
		if (skillRef.current) {
			skillRef.current.scrollIntoView({ behavior: "smooth" });
			toggleMenu();
		}
	};

	const toggleMenu = () => {
		const menuButton = document.querySelector(".menu-button");
		const btns = document.querySelector(".btns");
		menuButton?.classList.toggle("active");
		btns?.classList.toggle("active");
	};

	return (
		<nav className={"nav"}>
			<div className="nav-wrapper">
				<div className="var">
					<h1 onClick={scrollToFirst}>Huipark</h1>
					<div className="menu-button" onClick={toggleMenu}>
						<div className="f"></div>
						<div className="s"></div>
					</div>
				</div>
				<div className="btns">
					<button className={Nova_square.className} onClick={scrollToAbout}>
						ABOUT
					</button>
					<button className={Nova_square.className} onClick={scrollToSkill}>
						SKILL
					</button>
					<button className={Nova_square.className}>PROJECT</button>
					<button className={Nova_square.className}>CONTACT</button>
				</div>
			</div>
			<style jsx>{`
				.nav {
					display: flex;
					position: fixed;
					min-height: 70px;
					left: 0;
					right: 0;
					color: white;
					padding: 17px;
					backdrop-filter: blur(10px);
					background-color: rgba(0, 0, 0, 0.294);
					box-shadow: 0px 0px 20px 10px black;
					z-index: 3;
				}
				.nav-wrapper {
					display: flex;
					width: 100%;
					flex-direction: row;
					justify-content: space-around;
				}

				.menu-button {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					width: 30px;
					height: 20px;
					cursor: pointer;
					display: none;
				}
				.var {
					display: flex;
					flex-direction: row;
					width: 100%;
					align-items: center;
					justify-content: space-between;
				}
				.menu-button > * {
					transition: 0.5s;
					width: 100%;
					height: 3px;
					background-color: white;
					border-radius: 20px;
				}

				.menu-button.active .f {
					transform: translateY(5px) rotate(45deg);
				}

				.menu-button.active .s {
					transform: translateY(-5px) rotate(-45deg);
				}

				h1 {
					font-size: 2rem;
					cursor: pointer;
				}
				div {
					display: flex;
				}
				button {
					position: relative;
					margin-right: 10px;
					padding: 10px;
					color: white;
					font-size: 15px;
					filter: blur(1px);
				}
				button::before {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 2px;
					background-color: rgb(28, 223, 168);
					filter: blur(1px);
					transform-origin: left;
					transform: scale(0);
					transition: 0.5s;
				}
				button::after {
					content: "";
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 2px;
					background-color: rgb(28, 223, 168);
					filter: blur(1px);
					transform-origin: right;
					transform: scale(0);
					transition: 0.5s;
				}
				button:hover {
					color: rgb(28, 223, 168);
					filter: blur(0px);
				}

				button:hover::after,
				button:hover::before {
					transform: scale(1);
				}
				@media all and (max-width: 768px) {
					.nav-wrapper {
						flex-direction: column;
						overflow: hidden;
					}
					.btns {
						display: flex;
						justify-content: center;
						overflow: hidden;
						height: 0px;
						transition: 1s;
					}
					.btns.active {
						height: 150px;
					}
					.menu-button {
						display: flex;
					}
					div {
						flex-direction: column;
					}
					button {
						margin: 0;
					}
					button:hover {
						background-color: rgba(255, 255, 255, 0.197);
					}
				}
			`}</style>
		</nav>
	);
}
