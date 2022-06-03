import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Text,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";
import { useInjection } from "store-sdk/ioc-container/ioc.context";
import { Symbols } from "store-sdk/ioc-container/symbols";
import {
  ICommonModalStore,
  INotificationModalStore,
} from "store-sdk/modalServices/interfaces";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { TextLayerEnum } from "theme/typography/interfaces";
import { emptyStateData } from "./data";
import { styles } from "./styles";

export interface ItemState {
  IconComp: ReactNode;
  title: string;
  content: string;
}

export const DemoEmptyState = () => {
  const boxColor = useColorModeValue(
    ExtendsColorEnum["darkLevel.50"],
    ExtendsColorEnum["darkLevel.950"]
  );

  const notificationModalStore = useInjection<INotificationModalStore>(
    Symbols.INotificationModalStore
  );
  const commonModalStore = useInjection<ICommonModalStore>(
    Symbols.ICommonModalStore
  );

  function _onSuccessClick() {
    notificationModalStore.show({
      title: "Successful action",
      content:
        "PLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor augue convallis sapien scelerisque, quis pellentesque mauris varius.",
      type: "success",
    });
  }

  function _onErrorClick() {
    notificationModalStore.show({
      title: "Error occurs",
      content:
        "PLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor augue convallis sapien scelerisque, quis pellentesque mauris varius.",
      type: "error",
    });
  }

  function _onInfoClick() {
    notificationModalStore.show({
      title: "Information!",
      content:
        "PLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor augue convallis sapien scelerisque, quis pellentesque mauris varius.",
      type: "info",
    });
  }

  function _onCommonModalClick() {
    commonModalStore.show({
      content: (
        <Fragment>
          <ModalHeader>
            <Text layerStyle={TextLayerEnum.headlineSm}>Modal Title</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              placeat assumenda fugit eligendi qui. Dolores voluptas nemo harum
              accusamus eius alias explicabo illo hic sapiente quam voluptatem,
              deserunt minus similique?
            </Text>
          </ModalBody>
        </Fragment>
      ),
    });
  }

  const renderEmptyCard = (item: ItemState) => {
    const { IconComp, title, content } = item;

    return (
      <Box
        bg="white"
        p="1rem"
        pb="3rem"
        borderRadius={".5rem"}
        boxShadow={"lg"}
        key={title}
      >
        {IconComp}
        <Text
          as="h2"
          layerStyle={TextLayerEnum.headlineSm}
          mb=".8rem"
          textAlign={"center"}
          color={ExtendsColorEnum["darkLevel.900"]}
        >
          {title}
        </Text>
        <Text
          h="3rem"
          layerStyle={TextLayerEnum.bodySm400}
          mb="1.3rem"
          textAlign={"center"}
          color={ExtendsColorEnum["darkLevel.300"]}
        >
          {content}
        </Text>
        <Button
          fontSize={"sm"}
          minW="7.5rem"
          fontWeight={400}
          shadow="-4px 8px 26px -3px rgba(120,193,230,1);"
        >
          Go Back
        </Button>
      </Box>
    );
  };

  return (
    <Fragment>
      <SimpleGrid
        spacing={6}
        columns={{ base: 1, sm: 2, md: 3 }}
        bg={boxColor}
        sx={styles.listEmptyState}
      >
        {emptyStateData.map((item) => renderEmptyCard(item))}
      </SimpleGrid>
      <SimpleGrid
        spacing={10}
        columns={{ base: 1, sm: 2, md: 4 }}
        bg={boxColor}
        sx={styles.listEmptyState}
      >
        <Button variant={"info"} onClick={_onInfoClick}>
          Info popup
        </Button>
        <Button variant={"error"} onClick={_onErrorClick}>
          Error popup
        </Button>
        <Button variant={"secondary"} onClick={_onSuccessClick}>
          Success popup
        </Button>
        <Button colorScheme={"gray"} onClick={_onCommonModalClick}>
          Big modal
        </Button>
      </SimpleGrid>
    </Fragment>
  );
};
