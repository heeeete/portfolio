import { useEffect, useRef, useState } from "react";
import NavVar from "../../components/NavVar";
import Seo from "../../components/Seo";
import FirstScreen from "../../components/FirstScreen";
import AboutScreen from "../../components/AboutScreen";

export default function Home() {
	const firstRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<Seo titleName="희태의 포트폴리오" />
			<NavVar aboutRef={aboutRef} firstRef={firstRef} />
			<main>
				<FirstScreen aboutRef={aboutRef} ref={firstRef} />
				<AboutScreen ref={aboutRef} />
			</main>
		</>
	);
}
