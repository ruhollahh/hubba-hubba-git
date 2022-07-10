import { useQuery } from "react-query";
import { client } from "../lib/client.js";

const getUser = async (username) => {
	return await client(`users/${encodeURIComponent(username)}`);
};

export const useProfile = (username, customOptions = {}) => {
	return useQuery(["profile", username], () => getUser(username), {
		enabled: Boolean(username),
		...customOptions,
	});
};
