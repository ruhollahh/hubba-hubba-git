import { Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router.js";
import { SearchStatus } from "../../components/search-status/search-status.jsx";
import { useProfile } from "../../data/get-user.js";

export default function ProfilePage() {
	const router = useRouter();
	const { username } = router.query;
	const { data, isError, isLoading } = useProfile(username);

	if (isLoading) {
		return (
			<Flex justify="center" align="center" h="full">
				<Spinner size="xl" />
			</Flex>
		);
	}

	if (isError) {
		return (
			<Flex justify="center" align="center" h="full">
				<Text fontSize="3xl">متاسفانه نام کاربری مورد نظر پیدا نشد 🙁</Text>
			</Flex>
		);
	}

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
