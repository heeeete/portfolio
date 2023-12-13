import { useEffect, useRef, useState } from "react";
import NavVar from "../../components/NavVar";
import Seo from "../../components/Seo";
import FirstScreen from "../../components/FirstScreen";
import AboutScreen from "../../components/AboutScreen";
import SkillScreen from "../../components/SkillScreen";

export default function Home() {
	const [visibleItems, setVisibleItems] = useState(new Set<string>());
	const firstRef = useRef<HTMLDivElement | null>(null);
	const aboutRef = useRef<HTMLDivElement | null>(null);
	const skillRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// IntersectionObserver 인스턴스 생성
		const observer = new IntersectionObserver(
			(entries) => {
				// 각 관찰 대상의 변화에 대한 콜백 함수
				entries.forEach(({ target, isIntersecting }) => {
					// 각 관찰 대상에 대한 처리
					const id: string | null = target.getAttribute("data-id"); // 각 대상의 data-id 속성 값 추출

					if (isIntersecting) {
						// 요소가 뷰포트에 들어왔는지 확인
						// visibleItems 상태를 업데이트하여 요소의 id 추가
						if (id) setVisibleItems((prevItems) => new Set(prevItems).add(id));
					} else {
						// visibleItems 상태를 업데이트하여 요소의 id 제거
						setVisibleItems((prevItems) => {
							const newItems = new Set(prevItems);
							if (id) newItems.delete(id);
							return newItems;
						});
					}
				});
			},
			{
				threshold: 0.9, // 관찰 기준점 설정 (90% 요소가 보여야 감지)
			}
		);

		// 모든 .item .header요소를 관찰 대상으로 추가
		document.querySelectorAll(".item, .header, .observer").forEach((item) => {
			observer.observe(item);
		});

		// 컴포넌트가 언마운트 될 때 관찰을 중단
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Seo titleName="희태의 포트폴리오" />
			<NavVar aboutRef={aboutRef} firstRef={firstRef} skillRef={skillRef} />
			<FirstScreen aboutRef={aboutRef} ref={firstRef} />
			<AboutScreen
				visibleItems={visibleItems}
				skillRef={skillRef}
				ref={aboutRef}
			/>
			<SkillScreen visibleItems={visibleItems} ref={skillRef} />
		</>
	);
}
