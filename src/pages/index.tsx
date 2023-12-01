import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Layout from "../../components/Layout";
import NavVar from "../../components/NavVar";
import Seo from "../../components/Seo";
import back from "../../public/back.jpg";
import Image from "next/legacy/image";
export default function Home() {
	return (
		<>
			<Seo titleName="희태의 포트폴리오" />
			<div
				style={{
					width: "100vw",
					height: "100vh",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<NavVar />
				<div className="image-container">
					<div className="full-image-container">
						<Image src={back} alt="background" />
					</div>
				</div>
				<div className="image-container">
					<div className="circle-image-container">
						<Image src={back} alt="circular part" />
					</div>
				</div>
			</div>

			<style jsx>{`
				.image-container {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 210vw;
					height: 210vh;
					overflow: hidden;
					z-index: -100;
				}
				.full-image-container,
				.circle-image-container {
					position: absolute;
					width: 100%;
					height: 100%;
				}
				.full-image-container {
					animation: rotate 3s ease-in-out 1;
					animation-delay: 1s; /* 가운데 동그라미가 돌고 나서 시작 */
					 {
						/* opacity: 0.8; */
					}
				}
				.circle-image-container {
					clip-path: circle(11% at center);
					animation: rotateReverse 3s ease-in-out 1;
				}
				@keyframes rotate {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				@keyframes rotateReverse {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(-360deg);
					}
				}
				div {
					color: white;
				}
			`}</style>
		</>
	);
}
