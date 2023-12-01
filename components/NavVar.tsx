import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function NavVar() {
	return (
		<nav className={"nav"}>
			<h1>Huipark</h1>
			<div>
				<text>ABOUT</text>
				<text>STACK</text>
				<text>PROJECT</text>
				<text>뭐하지</text>
			</div>
			<style jsx>{`
				.nav {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-inline: 20px;
				}
				.tistoryBox {
					display: flex;
					background-color: white;
					border-radius: 50%;
					aspect-ratio: 10/10;
					width: 31px;
					height: 32px;
					justify-content: center;
					align-items: center;
				}
				h1 {
					font-size: 2rem;
				}
				div {
					display: flex;
					width: 20vw;
					justify-content: space-between;
				}
			`}</style>
		</nav>
	);
}

{
	/* <Link
	style={{ marginRight: 10 }}
	href={"https://github.com/heeeete"}
	target="_blank"
>
	<FontAwesomeIcon icon={faGithub} size="2x" />
</Link>
<Link href={"https://gaebarsaebal.tistory.com/"} target="_blank">
	<span className={"tistoryBox"}>
		<FontAwesomeIcon
			icon={faT}
			size="lg"
			style={{ fontSize: 25 }}
			color="black"
		/>
	</span>
</Link> */
}
