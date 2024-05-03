export default function ObserverItem({
	children,
	visible,
}: {
	children: React.ReactNode;
	visible: boolean;
}) {
	const observerStyle = {
		opacity: visible ? 1 : 0,
		transform: visible ? "translateY(0)" : "translateY(30px)",
		transition: "1s",
	};

	return <div style={observerStyle}>{children}</div>;
}
