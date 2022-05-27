import { useTranslation } from "react-i18next";
import { usePage1Management } from "./usePage1Management";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { styles } from "./styles";
import { Outlet } from "react-router-dom";

export const Page1 = () => {
  const { fetchedData, authData, onLogout } = usePage1Management();

  const { t } = useTranslation(["common"]);

  return (
    <VStack m={10}>
      <Box sx={styles.demoBox}></Box>
      <Text as={"h1"}>Hello</Text>
      <Text>{authData.isAuth ? "Login" : "Non-login"}</Text>

      <Text>TRANS: {t(["test.title"], { ns: "common" })}</Text>
      <Text>{`${fetchedData?.heartBeat}`}</Text>

      <Button variant={"solid"} colorScheme="orange" onClick={() => onLogout()}>
        Logout
      </Button>
      <hr></hr>
      <Outlet />
    </VStack>
  );
};
