import { usePage2Management } from "./usePage2Management";
import { Box, Button, Divider, useColorMode, Text, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { TextLayerEnum } from "theme/typography/interfaces";

export const Page2 = () => {
  const { login } = usePage2Management();
  const {toggleColorMode} = useColorMode()

  return (
    <Box m={"2rem"}>
      <Text layerStyle={TextLayerEnum.headLineMd}>Page2: Demo</Text>
      <HStack>
        <Button my={"10px"} colorScheme={"gray"} onClick={() => login()}>
          Login
        </Button>
        <Button colorScheme={'green'} onClick={toggleColorMode}>Change color mode</Button>
      </HStack>
      <Divider></Divider>
      <Outlet />
    </Box>
  );
};
