import { useQuery } from "react-query";
import { fetcher } from "../lib/fetcher";

export const getRepos = async (username, page) => {
	const { data, pagination } = await fetcher(
		`users/${encodeURIComponent(
			username
		)}/repos?sort=updated&per_page=6&page=${page}`
	);
	return { repos: data, pagination };
};

export const useRepos = (username, page, customOptions = {}) => {
	return useQuery(["repos", username, page], () => getRepos(username, page), {
		enabled: Boolean(username),
		...customOptions,
	});
};
