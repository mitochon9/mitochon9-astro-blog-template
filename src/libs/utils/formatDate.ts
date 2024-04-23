export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	// getMonth() は0から始まるので1を足す
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}/${month}/${day}`;
};
