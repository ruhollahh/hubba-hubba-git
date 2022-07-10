import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiLink, FiMapPin, FiUserPlus } from "react-icons/fi";

export const ProfileSection = ({ profile }) => {
	return (
		<Flex justify="center">
			<Flex direction="column" gap="5">
				<Box>
					<Image
						src={profile.avatar_url}
						alt="user avatar"
						width={200}
						height={200}
					/>
				</Box>
				<Box>
					<Text fontSize="xl">{profile.name}</Text>
					<Text fontSize="lg" color="gray.600">
						{profile.login}
					</Text>
				</Box>
				{Boolean(profile.bio) && (
					<Box>
						<Text>{profile.bio}</Text>
					</Box>
				)}
				<Flex alignItems="baseline" gap="2">
					<FiUserPlus size="12" />
					<Text>
						{profile.followers} followers . {profile.following} following
					</Text>
				</Flex>
				{Boolean(profile.location) && (
					<Flex alignItems="baseline" gap="2">
						<FiMapPin size="12" />
						<Text>{profile.location}</Text>
					</Flex>
				)}
				{Boolean(profile.blog) && (
					<Flex alignItems="baseline" gap="2">
						<FiLink size="12" />
						<Text>{profile.blog}</Text>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
};
