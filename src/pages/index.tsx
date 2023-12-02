import NavVar from "../../components/NavVar";
import Seo from "../../components/Seo";
import FirstScreen from "../../components/FirstScreen";
import AboutScreen from "../../components/AboutScreen";

export default function Home() {
	return (
		<>
			<Seo titleName="희태의 포트폴리오" />
			<NavVar />
			<FirstScreen />
			<AboutScreen />
		</>
	);
}

// .tistoryBox {
// 	display: flex;
// 	background-color: white;
// 	border-radius: 50%;
// 	aspect-ratio: 1/1;
// 	width: 31px;
// 	height: 32px;
// 	justify-content: center;
// 	align-items: center;
// }
