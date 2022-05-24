import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
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
    <SimpleGrid
      spacing={6}
      columns={{ base: 1, sm: 2, md: 3 }}
      bg={boxColor}
      sx={styles.listEmptyState}
    >
      {emptyStateData.map((item) => renderEmptyCard(item))}
    </SimpleGrid>
  );
};
