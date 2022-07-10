import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { SearchProfile } from "../components/search-profile";

export default function HomePage() {
	return (
		<Flex
			direction="column"
			align="center"
			gap="8"
			maxW="container.lg"
			mx="auto"
			p="10"
		>
			<Heading fontSize={["xl", "2xl"]}>جستجوی پروفایل گیت‌هاب</Heading>
			<SearchProfile />
		</Flex>
	);
}
