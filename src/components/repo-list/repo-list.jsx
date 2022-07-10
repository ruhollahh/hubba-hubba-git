import {
	Alert,
	AlertIcon,
	Button,
	Flex,
	Grid,
	GridItem,
	Link,
	Spinner,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useRepos } from "../../data/get-repos";

export const RepoList = () => {
	const router = useRouter();
	let { username, page = "1" } = router.query;

	const { data, error } = useRepos(username, page);

	if (error) {
		return (
			<Flex direction="column" gap="3">
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

	const isPrevBtnDisabled = !data.pagination.hasOwnProperty("prev");
	const isNextBtnDisabled = !data.pagination.hasOwnProperty("next");

	return (
		<Flex direction="column" grow={1} gap="8" justify="space-between">
			<Grid as="ol" templateColumns="1fr 1fr" gap={6}>
				{data.repos.map((repo) => (
					<GridItem
						key={repo.id}
						as="li"
						p="5"
						border="1px"
						borderColor="gray.200"
						listStyleType="none"
					>
						{repo.name}
					</GridItem>
				))}
			</Grid>
			<Flex gap="5" justify="space-between">
				<Button isDisabled={isPrevBtnDisabled}>
					<NextLink
						href={{
							pathname: "/profile/[username]",
							query: { username, page: Number(page) - 1 },
						}}
					>
						<Link pointerEvents={isPrevBtnDisabled && "none"}>Prev</Link>
					</NextLink>
				</Button>
				<Button isDisabled={isNextBtnDisabled}>
					<NextLink
						href={{
							pathname: "/profile/[username]",
							query: { username, page: Number(page) + 1 },
						}}
					>
						<Link pointerEvents={isNextBtnDisabled && "none"}>Next</Link>
					</NextLink>
				</Button>
			</Flex>
		</Flex>
	);
};
