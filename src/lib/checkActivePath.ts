export const checkActivePath = (path: string, activePath: string): boolean => {
	const isActive = (href: string, pathname: string) => {
		const pathSegments = pathname.split("/").filter(Boolean);
		const hrefSegments = href.split("/").filter(Boolean);
		return hrefSegments.every((seg, i) => seg === pathSegments[i]);
	};

	return isActive(path, activePath);
};
