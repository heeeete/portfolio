import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nova_Square } from "next/font/google";
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";

const Nova_square = Nova_Square({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PortfolioProvider value={{ prefix }}>
            <main className={Nova_square.className}>
                <Component {...pageProps} />
            </main>
        </PortfolioProvider>
    );
}
