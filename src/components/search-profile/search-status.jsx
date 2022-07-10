import { Flex, Spinner, Text } from "@chakra-ui/react";

export const SearchStatus = ({ status }) => {
	if (status === "idle") {
		return (
			<Text fontSize={["small", "md"]} color="gray.600">
				نام کاربری گیت‌هاب را بنویسید و اینتر بزنید
			</Text>
		);
	}

	if (status === "error") {
		return (
			<Text fontSize={["small", "md"]} color="red.600">
				مطمئنی نام کاربری رو درست وارد کردی؟
			</Text>
		);
	}

	if (status === "fetching") {
		return (
			<Flex justify="center">
				<Spinner />
			</Flex>
		);
	}
};
