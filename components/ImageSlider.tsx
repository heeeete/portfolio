import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface Image {
	url: string;
}

interface ImageSlider {
	images: Image[];
	showArrows?: boolean;
	showDots?: boolean;
	enableDrag?: boolean;
	enableLoop?: boolean;
	width?: number | null;
	height?: number | null;
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
	dotColor?: string;
	dotHoverColor?: string;
	dotBorderColor?: string;
	arrowColor?: string;
	arrowSize?: number;
	borderRadius?: number;
	autoSlider?: number;
	duration?: number;
}

const ImageSlider = ({
	images,
	showArrows = true,
	showDots = true,
	enableDrag = true,
	enableLoop = true,
	width = null,
	height = null,
	objectFit = "fill",
	dotColor = "white",
	dotHoverColor = "grey",
	dotBorderColor = "grey",
	arrowColor = "white",
	arrowSize = 50,
	borderRadius = 0,
	autoSlider = 0,
	duration = 300,
}: ImageSlider) => {
	if (duration < 300) {
		throw new Error("Duration should be at least 300ms");
	}

	const imgStyle: React.CSSProperties = {
		width: width ? `${width}px` : "100%",
		height: height ? `${height}px` : "100%",
		objectFit: objectFit,
		borderRadius: borderRadius,
	};
	const sliderContainerRef = useRef<HTMLDivElement>(null);
	const loopedImages = enableLoop
		? [images[images.length - 1], ...images, images[0]]
		: images;
	const [imgWidth, setImgWidth] = useState<number>(0);
	const [offset, setOffset] = useState<number>(0);
	const [idx, setIdx] = useState<number>(enableLoop ? 1 : 0);
	const [transitionEnabled, setTransitionEnabled] = useState(true);
	const totalChildren: number = loopedImages.length;
	const isMoving = useRef<boolean>(false);
	let initDragPos: number = 0;
	let travelRatio: number = 0;
	let travel: number = 0;
	let originOffset: number = 0;

	useEffect(() => {
		if (autoSlider) {
			const intervalId = setInterval(() => {
				navigate(1);
			}, autoSlider);
			return () => clearInterval(intervalId);
		}
	}, [imgWidth, idx]); //

	useEffect(() => {
		if (!transitionEnabled) {
			requestAnimationFrame(() => {
				setTransitionEnabled(true);
			});
		}
	}, [transitionEnabled]);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let e of entries) {
				const { width } = e.contentRect;
				setImgWidth(width);
				setOffset(-idx * width);
				setIdx(enableLoop ? 1 : 0);
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
		if (!enableDrag) return;

		const $imgInnerContainer = document.querySelector(
			".img-inner-container"
		) as HTMLElement;

		const startMouse = (e: MouseEvent) => {
			setTransitionEnabled(false);
			travel = e.clientX - initDragPos;
			travelRatio = travel / imgWidth;
			setOffset(originOffset + travel);
		};

		const stopMouse = () => {
			setTransitionEnabled(true);
			if (Math.abs(travelRatio) > 0.2) {
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
			if (!isMoving.current) {
				isMoving.current = true;
				setTransitionEnabled(false);
				travelRatio = 0;
				initDragPos = e.clientX;
				originOffset = offset;

				document.addEventListener("mousemove", startMouse);
				document.addEventListener("mouseup", stopMouse);

				setTimeout(() => {
					isMoving.current = false;
				}, duration + 100);
			}
		};

		$imgInnerContainer?.addEventListener("mousedown", downMouse);

		return () => {
			$imgInnerContainer?.removeEventListener("mousedown", downMouse);
			document.removeEventListener("mousemove", startMouse);
			document.removeEventListener("mouseup", stopMouse);
		};
	}, [imgWidth, idx]);

	const handleTransitionEnd = () => {
		if (enableLoop) {
			if (idx === 0) {
				setTransitionEnabled(false);
				setIdx(images.length);
				setOffset(-images.length * imgWidth);
			} else if (idx === totalChildren - 1) {
				setTransitionEnabled(false);
				setIdx(1);
				setOffset(1 * -imgWidth);
			}
		}
	};

	const onClickIndicator = (idx: number) => {
		setOffset(-idx * imgWidth);
		setIdx(idx);
	};

	const navigate = (direction: number) => {
		if (!isMoving.current) {
			let newIdx = idx + direction;
			if (enableLoop) {
				if (newIdx >= totalChildren) {
					newIdx = 1;
				} else if (newIdx <= -1) {
					newIdx = totalChildren - 2;
				}
			} else {
				newIdx = Math.max(0, Math.min(totalChildren - 1, newIdx));
			}
			isMoving.current = true;
			setIdx(newIdx);
			setOffset(-newIdx * imgWidth);
			setTimeout(() => {
				isMoving.current = false;
			}, duration + 100);
		}
	};

	const RenderIndicators = () => {
		return Array.from(
			{ length: enableLoop ? totalChildren - 2 : totalChildren },
			(_, _idx) => {
				let indicatorIdx = enableLoop ? _idx + 1 : _idx;
				let backgroundColor;

				if (enableLoop) {
					if (idx === totalChildren - 1 && indicatorIdx === 1) {
						backgroundColor = dotColor;
					} else if (idx === 0 && indicatorIdx === totalChildren - 2) {
						backgroundColor = dotColor;
					} else if (indicatorIdx === idx) {
						backgroundColor = dotColor;
					} else {
						backgroundColor = "";
					}
				} else {
					if (idx === _idx) backgroundColor = dotColor;
					else backgroundColor = "";
				}

				return (
					<div
						className="indicator"
						onClick={() => onClickIndicator(_idx + 1)}
						key={_idx}
					>
						<style jsx>{`
							.indicator {
								width: 13px;
								height: 13px;
								border: 1px solid ${dotBorderColor};
								background-color: ${backgroundColor};
								border-radius: 50%;
								margin-inline: 2px;
								cursor: pointer;

								&:hover {
									background-color: ${dotHoverColor};
								}
							}
						`}</style>
					</div>
				);
			}
		);
	};

	return (
		<div className="container">
			<div className="slider-container">
				{showArrows ? (
					<button onClick={() => navigate(-1)} className="left">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 20 20"
						>
							<g fill="currentColor">
								<path d="m12.384 15.68l-5-6l-.768.64l5 6z" />
								<path d="m11.616 16.32l-5-6c-.427-.512.341-1.152.768-.64l5 6c.427.512-.341 1.152-.768.64" />
								<path d="m11.616 3.68l-5 6l.768.64l5-6z" />
								<path d="m12.384 4.32l-5 6c-.427.512-1.195-.128-.768-.64l5-6c.427-.512 1.195.128.768.64" />
							</g>
						</svg>
					</button>
				) : (
					""
				)}
				<div className="slider-img-container" ref={sliderContainerRef}>
					<div
						className="img-inner-container"
						onTransitionEnd={handleTransitionEnd}
					>
						{loopedImages.map((e, idx) => {
							if (width || height)
								return (
									<div className="image-wapper">
										<Image
											src={e.url}
											alt="img-slider"
											key={idx}
											width={1}
											height={1}
											style={imgStyle}
										/>
									</div>
								);
							return (
								<img
									src={e.url}
									alt="img-slider"
									key={idx}
									loading="lazy"
									style={imgStyle}
								/>
							);
						})}
					</div>
				</div>
				{showArrows ? (
					<button onClick={() => navigate(1)} className="right">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 20 20"
						>
							<g fill="currentColor">
								<path d="M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64z" />
								<path d="M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64z" />
							</g>
						</svg>
					</button>
				) : (
					""
				)}
			</div>
			{showDots ? (
				<div className="indicator-container">
					<RenderIndicators />
				</div>
			) : (
				""
			)}
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: ${width ? width + 20 + "px" : "100%"};
					${height && `height : ${height}px`};
				}
				.slider-container {
					display: flex;
					position: relative;
					align-items: center;
				}
				.slider-img-container {
					display: flex;
					overflow: hidden;
					width: ${width ? width + 20 + "px" : "100%"};
					height: ${height ? height + "px" : "100%"};
					border-radius: ${borderRadius}px;
				}
				.img-inner-container {
					display: flex;
					transform: translateX(${offset}px);
					transition: ${transitionEnabled ? `${duration}ms` : "none"};
				}
				.indicator-container {
					transform: translateY(-20px);
					display: flex;
				}
				.image-wapper {
					display: flex;
					justify-content: center;
					width: ${width ? width + 20 + "px" : ""};
					height: ${height ? height + "px" : ""};
				}
				button {
					display: flex;
					position: absolute;
					color: ${arrowColor};
					font-size: ${arrowSize}px;
					cursor: pointer;
					z-index: 1;

					&:hover {
						transition: 0.3s;
						transform: scale(120%);
					}
					&:active {
						transition: 0s;
						transform: scale(100%);
					}
				}
				.left {
				}
				.right {
					right: 0;
				}
			`}</style>
		</div>
	);
};

export default ImageSlider;
