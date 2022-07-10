import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const SearchForm = ({ onSubmit }) => {
	const [searchTerm, setSearchTerm] = React.useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(searchTerm);
			}}
		>
			<InputGroup w="full">
				<InputRightElement color="gray.400">
					<FiSearch />
				</InputRightElement>
				<Input
					bg="white"
					placeholder="جستجو"
					pr="8"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</InputGroup>
		</form>
	);
};
