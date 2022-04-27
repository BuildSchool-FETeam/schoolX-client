import { usePage2Management } from "./usePage2Management";
import { Box, Button } from "@chakra-ui/react";

export const Page2 = () => {
  const { login } = usePage2Management();

  return (
    <Box m={"2rem"}>
      <h3>Page 2</h3>
      <Button mt={"10px"} colorScheme={"gray"} onClick={() => login()}>
        Login
      </Button>
    </Box>
  );
};
