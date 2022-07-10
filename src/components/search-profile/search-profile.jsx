import React from "react";
import { Flex } from "@chakra-ui/react";
import { SearchForm } from "./search-form";
import { SearchStatus } from "./search-status";
import { useProfile } from "../../data/get-user";
import { useRouter } from "next/router";

export const SearchProfile = () => {
	const router = useRouter();
	const [username, setUsername] = React.useState("");
	const { isError, fetchStatus } = useProfile(username, {
		async onSuccess() {
			router.push(`/profile/${username}`);
		},
	});

	const status = isError ? "error" : fetchStatus;

	return (
		<Flex direction="column" gap="8">
			<SearchForm
				onSubmit={(searchedUsername) => setUsername(searchedUsername)}
			/>
			<SearchStatus status={status} />
		</Flex>
	);
};
