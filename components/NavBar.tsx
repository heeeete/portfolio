import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { Nova_Square } from "next/font/google";
import { useState, useEffect, useCallback } from "react";

const Nova_square = Nova_Square({ subsets: ["latin"], weight: "400" });
export default function NavBar({
	aboutRef,
	firstRef,
	skillRef,
	projectRef,
}: {
	aboutRef: React.RefObject<HTMLDivElement>;
	firstRef: React.RefObject<HTMLDivElement>;
	skillRef: React.RefObject<HTMLDivElement>;
	projectRef: React.RefObject<HTMLDivElement>;
}) {
	const [theme, setTheme] = useState<"light" | "dark">("dark"); // 초기값을 "dark"로 설정

	useEffect(() => {
		const theme = localStorage.getItem("huiparkTheme") as "light" | "dark";
		if (theme) setTheme(theme);
	}, []);

	const scrollToFirst = () => {
		if (firstRef.current)
			firstRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	const scrollToAbout = () => {
		if (aboutRef.current) {
			aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
			toggleMenu();
		}
	};

	const scrollToSkill = () => {
		if (skillRef.current) {
			skillRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
			toggleMenu();
		}
	};

	const scrollToProject = () => {
		if (projectRef.current) {
			projectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
			toggleMenu();
		}
	};

	const toggleMenu = () => {
		const menuButton = document.querySelector(".menu-button");
		const btns = document.querySelector(".btns");
		menuButton?.classList.toggle("active");
		btns?.classList.toggle("active");
	};

	const changeMode = () => {
		const currentTheme = document.documentElement.getAttribute("data-theme");
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", newTheme);
		setTheme(newTheme);
		localStorage.setItem("huiparkTheme", newTheme);
		if (newTheme === "light") document.body.classList.add("light-theme-active");
		else document.body.classList.remove("light-theme-active");
	};

	useEffect(() => {
		const changeNavColorEvent = () => {
			const rect = aboutRef.current?.getBoundingClientRect();
			if (rect && rect.top < 40 && theme === "light") {
				document.body.classList.add("light-nav-active");
			} else {
				document.body.classList.remove("light-nav-active");
			}
		};

		changeNavColorEvent();

		window.addEventListener("scroll", changeNavColorEvent);
		return () => {
			window.removeEventListener("scroll", changeNavColorEvent);
		};
	}, [theme]);

	return (
		<nav className={"nav"}>
			<div className="nav-wrapper">
				<div className="var">
					<h1 className="header" onClick={scrollToFirst}>
						Huipark
					</h1>

					<div className="menu-button" onClick={toggleMenu}>
						<div className="f"></div>
						<div className="s"></div>
					</div>
				</div>
				<div className="btns">
					<div className="theme" onClick={changeMode}>
						{theme === "dark" ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M17.891 12a5.944 5.944 0 0 1-3.68 5.499a5.968 5.968 0 0 1-6.496-1.295A5.948 5.948 0 0 1 11.943 6.05a5.956 5.956 0 0 1 4.21 1.743A5.94 5.94 0 0 1 17.89 12M3.203 13.048H2.05A1.05 1.05 0 0 1 1 12a1.047 1.047 0 0 1 1.05-1.048h1.153A1.05 1.05 0 0 1 4.253 12a1.047 1.047 0 0 1-1.05 1.048m18.747 0h-1.143A1.05 1.05 0 0 1 19.758 12a1.047 1.047 0 0 1 1.05-1.048h1.143A1.05 1.05 0 0 1 23 12a1.047 1.047 0 0 1-1.05 1.048m-9.965-8.8a1.05 1.05 0 0 1-1.05-1.048V2.048A1.047 1.047 0 0 1 11.986 1a1.05 1.05 0 0 1 1.049 1.048V3.2a1.047 1.047 0 0 1-1.05 1.048m0 18.752a1.05 1.05 0 0 1-1.05-1.047V20.8a1.047 1.047 0 0 1 1.05-1.048a1.05 1.05 0 0 1 1.049 1.048v1.152A1.047 1.047 0 0 1 11.984 23M5.753 6.825a1.05 1.05 0 0 1-.745-.314l-.819-.807a1.051 1.051 0 0 1 .745-1.796c.28 0 .548.111.745.308l.819.817a1.047 1.047 0 0 1 0 1.478a1.05 1.05 0 0 1-.745.314m13.271 13.221a1.05 1.05 0 0 1-.735-.304l-.818-.817a1.047 1.047 0 0 1 1.14-1.739c.13.063.245.152.34.262l.818.817a1.047 1.047 0 0 1 0 1.477a1.05 1.05 0 0 1-.745.304m-.808-13.221a1.05 1.05 0 0 1-1.034-1.254c.04-.204.142-.391.29-.538l.818-.817a1.05 1.05 0 0 1 1.48 1.488l-.82.807a1.05 1.05 0 0 1-.734.314M4.934 20.046a1.051 1.051 0 0 1-.745-.304a1.046 1.046 0 0 1 0-1.477l.819-.817a1.048 1.048 0 0 1 1.49 0a1.047 1.047 0 0 1 0 1.477l-.819.817a1.049 1.049 0 0 1-.745.304"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142c3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807"
								/>
							</svg>
						)}
					</div>
					<button className={Nova_square.className} onClick={scrollToAbout}>
						ABOUT
					</button>
					<button className={Nova_square.className} onClick={scrollToSkill}>
						SKILL
					</button>
					<button className={Nova_square.className} onClick={scrollToProject}>
						PROJECT
					</button>
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
					box-shadow: 0px 0px 20px 10px black;
					z-index: 3;
				}
				.theme {
					display: flex;
					align-items: center;
					margin-left: 30px;
					color: white;
					font-size: 20px;
					filter: blur(1px);
					transition: 0.5s;
					padding: 10px;
					&:hover {
						color: yellow;
						transition: 0.5s;
						filter: blur(0px) drop-shadow(0px 0px 10px yellow);
					}
				}

				.nav-wrapper {
					display: flex;
					width: 100%;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
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
				@media (max-width: 768px) {
					.nav {
						min-height: 20px !important;
					}
					.nav-wrapper {
						flex-direction: column;
						overflow: hidden;
					}
					.btns {
						display: flex;
						justify-content: center;
						overflow: hidden;
						height: 0px;
						transition: 0.4s;
					}
					.theme {
						margin: 0;
					}
					.btns.active {
						height: 200px;
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
