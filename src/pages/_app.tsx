import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nova_Square } from "next/font/google";
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";
import { useEffect } from "react";

const Nova_square = Nova_Square({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const theme = localStorage.getItem("huiparkTheme");
		if (!theme) {
			localStorage.setItem("huiparkTheme", "dark");
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", theme);
		}
	}, []);

	return (
		<PortfolioProvider value={{ prefix }}>
			<main className={Nova_square.className}>
				<Component {...pageProps} />
			</main>
		</PortfolioProvider>
	);
}
