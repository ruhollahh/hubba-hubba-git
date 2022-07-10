import { Grid, GridItem } from "@chakra-ui/react";

export const RepoGrid = ({ repos }) => {
	return (
		<Grid templateColumns={["1fr", "1fr 1fr"]} gap={6}>
			{repos.map((repo) => (
				<GridItem
					key={repo.id}
					p="5"
					border="1px"
					borderColor="gray.200"
					listStyleType="none"
				>
					{repo.name}
				</GridItem>
			))}
		</Grid>
	);
};
