import { useEffect, useRef, useState } from "react";
import NavVar from "../../components/NavVar";
import Seo from "../../components/Seo";
import FirstScreen from "../../components/FirstScreen";
import AboutScreen from "../../components/AboutScreen";

export default function Home() {
	const aboutRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<Seo titleName="희태의 포트폴리오" />
			<NavVar aboutRef={aboutRef} />
			<FirstScreen aboutRef={aboutRef} />
			<AboutScreen ref={aboutRef} />
		</>
	);
}
