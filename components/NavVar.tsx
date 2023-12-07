import { Nova_Square } from "next/font/google";
import { useState, useEffect, useCallback } from "react";

const Nova_square = Nova_Square({ subsets: ["latin"], weight: "400" });
export default function NavVar({
	aboutRef,
}: {
	aboutRef: React.RefObject<HTMLDivElement>;
}) {
	const scrollToTarget = () => {
		if (aboutRef.current)
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className={"nav"}>
			<h1>Huipark</h1>
			<div>
				<button className={Nova_square.className} onClick={scrollToTarget}>
					ABOUT
				</button>
				<button className={Nova_square.className}>SKILL</button>
				<button className={Nova_square.className}>PROJECT</button>
				<button className={Nova_square.className}>CONTACT</button>
			</div>
			<style jsx>{`
				.nav {
					display: flex;
					position: fixed;
					height: 70px;
					left: 0;
					right: 0;
					color: white;
					justify-content: space-between;
					align-items: center;
					padding-inline: 20px;
					backdrop-filter: blur(10px);
					background-color: rgba(0, 0, 0, 0.294);
					box-shadow: 0px 0px 20px 10px black;
					z-index: 100;
				}
				h1 {
					font-size: 2rem;
				}
				div {
					display: flex;
				}
				button {
					margin-right: 10px;
					color: white;
				}
			`}</style>
		</nav>
	);
}
