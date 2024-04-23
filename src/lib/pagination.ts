export const filterPageItems = (currentPage: number, totalPages: number) => {
	const allPageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	const getPageType = (page: number) => {
		if (
			page === 1 ||
			page === totalPages ||
			(page >= currentPage - 0 && page <= currentPage + 2)
		) {
			return "page";
		}
		if (page === currentPage - 1 || page === currentPage + 3) {
			return "ellipsis";
		}
		return "none";
	};
	const pageItems = allPageNumbers
		.map((page) => ({
			number: page,
			type: getPageType(page),
		}))
		.filter((item) => item.type !== "none");
	const filteredPageItems = pageItems.reduce<
		{ number: number; type: string }[]
	>((acc, item, idx, arr) => {
		if (
			item.type === "ellipsis" &&
			idx > 0 &&
			arr[idx - 1].type === "ellipsis"
		) {
			return acc; // Skip this ellipsis if the previous item was also an ellipsis
		}
		acc.push(item);
		return acc;
	}, []);
	return filteredPageItems;
};
