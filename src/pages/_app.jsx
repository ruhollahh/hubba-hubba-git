import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/chakra-ui";
import { Fonts } from "../styles/fonts";
import React from "react";

function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: { refetchOnWindowFocus: false, retry: false },
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ChakraProvider theme={theme}>
					<Fonts />
					<Component {...pageProps} />
				</ChakraProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
