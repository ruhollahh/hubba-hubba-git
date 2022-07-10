import { Button, Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Link from "next/link";

export const Pagination = ({ pagination, page, username }) => {
	const isPrevBtnDisabled = !pagination.hasOwnProperty("prev");
	const isNextBtnDisabled = !pagination.hasOwnProperty("next");

	return (
		<Flex gap="5" justify="space-between">
			<LinkBox>
				<Button isDisabled={isPrevBtnDisabled}>
					<Link
						href={{
							pathname: "/profile/[username]",
							query: { username, page: Number(page) - 1 },
						}}
						passHref
					>
						<LinkOverlay pointerEvents={isPrevBtnDisabled && "none"}>
							Prev
						</LinkOverlay>
					</Link>
				</Button>
			</LinkBox>
			<LinkBox>
				<Button isDisabled={isNextBtnDisabled}>
					<Link
						href={{
							pathname: "/profile/[username]",
							query: { username, page: Number(page) + 1 },
						}}
						passHref
					>
						<LinkOverlay pointerEvents={isNextBtnDisabled && "none"}>
							Next
						</LinkOverlay>
					</Link>
				</Button>
			</LinkBox>
		</Flex>
	);
};
