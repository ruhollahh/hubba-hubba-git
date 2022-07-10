import { useQuery } from "react-query";
import { fetcher } from "../lib/fetcher";

export const getUser = async (username) => {
	const { data } = await fetcher(`users/${encodeURIComponent(username)}`);
	return data;
};

export const useProfile = (username, customOptions = {}) => {
	return useQuery(["profile", username], () => getUser(username), {
		enabled: Boolean(username),
		...customOptions,
	});
};
