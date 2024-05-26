const PurpleText = ({ children }: { children: React.ReactNode }) => {
	return (
		<span>
			<strong>{children}</strong>
			<style jsx>
				{`
					span {
						color: purple;
					}
				`}
			</style>
		</span>
	);
};

export default PurpleText;
