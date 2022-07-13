import { parseLinks } from "../utils/parse-links";

const apiURL = "https://api.github.com";

export const fetcher = async (
	endpoint,
	{ data, headers: customHeaders, ...customConfig } = {}
) => {
	const config = {
		method: data ? "POST" : "GET",
		body: data ? JSON.stringify(data) : undefined,
		headers: {
			"Content-Type": data ? "application/json" : undefined,
			...customHeaders,
		},
		...customConfig,
	};

	return fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
		const data = await response.json();
		if (response.ok) {
			const links = response.headers.get("link");
			return { data, pagination: links ? parseLinks(links) : null };
		} else {
			return Promise.reject(data);
		}
	});
};
