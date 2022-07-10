import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useProfile } from "../../data/get-user";
import { ProfileSection } from "../../components/profile-section";
import { getRepos } from "../../data/get-repos";
import { getUser } from "../../data/get-user";
import { dehydrate, QueryClient } from "react-query";
import { RepoSection } from "../../components/repo-section";

export default function ProfilePage() {
	const router = useRouter();
	const { username } = router.query;
	const { data: profile, isError } = useProfile(username);

	if (isError) {
		return (
			<Flex justify="center" align="center" h="full">
				<Text fontSize="3xl">متاسفانه نام کاربری مورد نظر پیدا نشد 🙁</Text>
			</Flex>
		);
	}

	return (
		<Flex
			dir="ltr"
			lang="en"
			direction={["column", null, "row"]}
			maxW="container.lg"
			mx="auto"
			p="10"
			gap="20"
		>
			<ProfileSection profile={profile} />
			<RepoSection />
		</Flex>
	);
}

export async function getServerSideProps({ query }) {
	let { username, page = "1" } = query;

	const queryClient = new QueryClient();
	await queryClient.prefetchQuery(["profile", username], () =>
		getUser(username)
	);
	await queryClient.prefetchQuery(["repos", username, page], () =>
		getRepos(username, page)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}
