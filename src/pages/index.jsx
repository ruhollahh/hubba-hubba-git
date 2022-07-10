import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { SearchProfile } from "../components/search-profile/search-profile.jsx";

export default function HomePage() {
	return (
		<VStack gap="8" maxW="container.md" mx="auto" h="full" p="10">
			<Heading fontSize="2xl">جستجوی پروفایل گیت‌هاب</Heading>
			<SearchProfile />
		</VStack>
	);
}
