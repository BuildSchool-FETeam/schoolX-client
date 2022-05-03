import { Box, VStack } from "@chakra-ui/react";
import { RouterLink } from "component-ui/RouterLink/RouterLink";
import { ReactRoutes } from "router/ReactRoutes";
import { testRoutes } from "router/routes/testRoutes.route";

function App() {
  return (
    <VStack align={"center"} textAlign="center">
      <Box as="nav">
        <RouterLink to="/" mr={"1rem"}>
          Page 1
        </RouterLink>
        <RouterLink to="/page2" mr={"1rem"}>
          Page 2
        </RouterLink>
        <RouterLink to="/page2/demo" mr={"1rem"}>
          Demo from page2
        </RouterLink>
      </Box>
      <Box>
        <ReactRoutes routes={testRoutes} />
      </Box>
    </VStack>
  );
}

export default App;
