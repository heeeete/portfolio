import React, { useState, useEffect, useRef } from "react";

const ImageSlider = ({
	children,
	width = null,
	height = null,
}: {
	children: React.ReactNode;
	width?: number | null;
	height?: number | null;
}) => {
	const [imgWidth, setImgWidth] = useState(0);
	const [offset, setOffset] = useState(0);
	const [idx, setIdx] = useState(0);
	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const totalChildren = React.Children.count(children);
	let initDragPos = 0;
	let travelRatio: number = 0;
	let travel: number = 0;
	let originOffset = 0;

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let e of entries) {
				const { width } = e.contentRect;
				setImgWidth(width);
				setOffset(-idx * width);
				setIdx(0);
			}
		});

		if (sliderContainerRef.current)
			resizeObserver.observe(sliderContainerRef.current);

		return () => {
			if (sliderContainerRef.current)
				resizeObserver.unobserve(sliderContainerRef.current);
		};
	}, []);

	useEffect(() => {
		const $imgInnerContainer = document.querySelector(
			".img-inner-container"
		) as HTMLElement;

		const startMouse = (e: MouseEvent) => {
			if (Math.abs(travelRatio) < 0.8) {
				travel = e.clientX - initDragPos;
				travelRatio = travel / imgWidth;
				setOffset(originOffset + travel);
			}
		};

		const stopMouse = (e: MouseEvent) => {
			if (Math.abs(travelRatio) > 0.3) {
				const newIdx =
					travelRatio > 0
						? Math.max(idx - 1, 0)
						: Math.min(idx + 1, totalChildren - 1);
				setIdx(newIdx);
				setOffset(newIdx * -imgWidth);
			} else {
				setOffset(idx * -imgWidth);
			}
			document.removeEventListener("mousemove", startMouse);
			document.removeEventListener("mouseup", stopMouse);
		};

		const downMouse = (e: MouseEvent) => {
			e.preventDefault();
			travelRatio = 0;
			initDragPos = e.clientX;
			originOffset = offset;

			document.addEventListener("mousemove", startMouse);
			document.addEventListener("mouseup", stopMouse);
		};

		$imgInnerContainer?.addEventListener("mousedown", downMouse);

		return () => {
			$imgInnerContainer?.removeEventListener("mousedown", downMouse);
			document.removeEventListener("mousemove", startMouse);
			document.removeEventListener("mouseup", stopMouse);
		};
	}, [imgWidth, idx]);

	const navigate = (direction: number) => {
		const newIdx = Math.max(0, Math.min(totalChildren - 1, idx + direction));
		setIdx(newIdx);
		setOffset(-newIdx * imgWidth);
	};

	const RenderCurrentPosition = () => {
		return Array.from({ length: totalChildren }, (_, _idx) => {
			return (
				<div className="circle" key={_idx}>
					<style jsx>{`
						.circle {
							width: 10px;
							height: 10px;
							border: 0.5px solid #ffffff;
							background-color: ${idx === _idx ? "#ffffff" : ""};
							border-radius: 50%;
							margin-inline: 1.5px;
							transition: 1s;
						}
					`}</style>
				</div>
			);
		});
	};

	return (
		<div className="container">
			<div className="slider-container">
				<button onClick={() => navigate(-1)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
						/>
					</svg>
				</button>
				<div className="slider-img-container" ref={sliderContainerRef}>
					<div className="img-inner-container">{children}</div>
				</div>
				<button onClick={() => navigate(1)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
						/>
					</svg>
				</button>
			</div>
			<div className="circle-container">
				<RenderCurrentPosition />
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: ${width ? width + "px" : "100%"};
					${height && `height : ${height}px`};
					background-color: yellow;
				}
				.slider-container {
					display: flex;
					background-color: green;
				}
				.slider-img-container {
					display: flex;
					overflow: hidden;
					width: 300px;
					height: 100px;
					background-color: red;
				}
				.img-inner-container {
					display: flex;
					transform: translateX(${offset}px);
					transition: 0.1s;
					background-color: blue;
				}
				.circle-container {
					transform: translateY(-20px);
					display: flex;
				}
				button {
					background: none;
					border: none;
					color: white;
					font-size: 24px;
					cursor: pointer;
					z-index: 1;
				}
			`}</style>
		</div>
	);
};

export default ImageSlider;
