import { Html, Head, Main, NextScript } from "next/document";
import Seo from "../../components/Seo";

export default function Document() {
	return (
		<Html lang="ko">
			<Seo />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
