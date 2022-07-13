import { Alert, AlertIcon, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRepos } from "../../data/get-repos";
import { Pagination } from "./pagination";
import { RepoGrid } from "./repo-grid";

export const RepoSection = () => {
	const router = useRouter();
	let { username, page = "1" } = router.query;
	const { data, error } = useRepos(username, page);
	const { repos, pagination } = data;

	if (error) {
		return (
			<Flex direction="column" align="flex-start" gap="3">
				<Alert status="error">
					<AlertIcon />
					There was an error processing your request
				</Alert>
				<Text color="red.600" fontSize="xl">
					{error.message}
				</Text>
			</Flex>
		);
	}

	return (
		<Flex direction="column" grow={1} gap="8" justify="space-between">
			<RepoGrid repos={repos} />
			{pagination && (
				<Pagination pagination={pagination} page={page} username={username} />
			)}
		</Flex>
	);
};
