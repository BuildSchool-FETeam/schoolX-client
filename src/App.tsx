import { Box, VStack } from "@chakra-ui/react";
import { RouterLink } from "component-ui/RouterLink/RouterLink";
import { ReactRoutes } from "router/ReactRoutes";
import { testRoutes } from "router/routes/testRoutes.route";
import { ModalContainer } from "store-sdk/modalServices/ModalViews/NotificationModalContainer";

function App() {
  return (
    <ModalContainer>
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
          <RouterLink to="/page2/demo-btn" mr={"1rem"}>
            Demo from page2
          </RouterLink>
          <RouterLink to="/page2/demo-empty" mr={"1rem"}>
            Demo Empty
          </RouterLink>
        </Box>
        <Box>
          <ReactRoutes routes={testRoutes} />
        </Box>
      </VStack>
    </ModalContainer>
  );
}

export default App;
