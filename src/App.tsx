import { Box } from "@chakra-ui/react";
import { RouterLink } from "component-ui/RouterLink/RouterLink";
import { ReactRoutes } from "router/ReactRoutes";
import { testRoutes } from "router/routes/testRoutes.route";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box as="nav" mb={"2rem"}>
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
      <div>
        <ReactRoutes routes={testRoutes} />
      </div>
    </div>
  );
}

export default App;
