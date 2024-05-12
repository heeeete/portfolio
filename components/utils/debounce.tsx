function debounce(func: () => void, wait: number) {
	let id: number | undefined;
	return function () {
		clearTimeout(id);
		id = window.setTimeout(func, wait);
	};
}
export default debounce;
