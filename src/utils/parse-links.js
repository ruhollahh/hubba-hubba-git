export const parseLinks = (links) => {
	const output = {};
	const regex = /<([^>]+)>; rel="([^"]+)"/g;

	let match;
	while ((match = regex.exec(links))) {
		const [_, v, k] = match;
		output[k] = v;
	}

	return output;
};
