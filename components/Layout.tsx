import NavVar from "./NavVar";

export default function Layout({ children }: any) {
	return (
		<>
			<NavVar />
			<div>{children}</div>
		</>
	);
}
