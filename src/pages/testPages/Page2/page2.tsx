import { usePage2Management } from "./usePage2Management";
import { Box, Button, Divider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Page2 = () => {
  const { login } = usePage2Management();

  return (
    <Box m={"2rem"}>
      <h3>Page 2</h3>
      <Button my={"10px"} colorScheme={"gray"} onClick={() => login()}>
        Login
      </Button>
      <Divider></Divider>
      <Outlet />
    </Box>
  );
};
