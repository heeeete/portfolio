const YellowText = ({ children }: { children: React.ReactNode }) => {
	return (
		<span>
			<strong>{children}</strong>
			<style jsx>
				{`
					span {
						color: yellow;
					}
				`}
			</style>
		</span>
	);
};

export default YellowText;
