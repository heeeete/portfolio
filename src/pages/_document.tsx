import { Html, Head, Main, NextScript } from "next/document";
import Seo from "../../components/Seo";

export default function Document() {
	return (
		<Html lang="ko">
			<Seo />
			<title>{"희태의 포트폴리오"}</title>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
