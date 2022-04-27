import { useTranslation } from "react-i18next";
import { usePage1Management } from "./usePage1Management";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { styles } from "./styles";

export const Page1 = () => {
  const { fetchedData, authData, onLogout } = usePage1Management();

  const { t } = useTranslation(["common"]);

  return (
    <VStack m={10}>
      <Box sx={styles.demoBox}></Box>
      <Text as={"h1"}>Hello</Text>
      <h3>{authData.isAuth ? "Login" : "Non-login"}</h3>

      <h4>TRANS: {t(["test.title", "Hello there"], { ns: "common" })}</h4>
      <p>{`${fetchedData?.heartBeat}`}</p>

      <Button variant={"solid"} colorScheme="orange" onClick={() => onLogout()}>
        Logout
      </Button>
    </VStack>
  );
};
