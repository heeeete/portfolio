/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://heeeete.github.io/portfolio/";

const nextConfig = {
	output: "export",
	trailingSlash: true,

	assetPrefix: process.env.NODE_ENV === "production" ? repository : "",
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
