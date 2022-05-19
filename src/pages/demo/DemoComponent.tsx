import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Tooltip,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { styles } from "./styles";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { ExtendVariantEnum } from "theme/components/interfaces";
import { TextLayerEnum } from "theme/typography/interfaces";

export const DemoComponent = () => {
  const boxColor = useColorModeValue(
    ExtendsColorEnum["darkLevel.50"],
    ExtendsColorEnum["darkLevel.950"]
  );

  const renderTooltipContent = () => {
    return (
      <HStack>
        <Text
          layerStyle={TextLayerEnum.labelLg500}
          color={ExtendsColorEnum["secondary.500"]}
        >
          Tooltip
        </Text>
        <Text
          layerStyle={TextLayerEnum.labelLg500}
          color={ExtendsColorEnum["grayScale.400"]}
        >
          shortcut
        </Text>
      </HStack>
    );
  };

  return (
    <Box>
      <SimpleGrid spacing={10} columns={4} bg={boxColor} sx={styles.listBtns}>
        <Button>Enabled</Button>
        <Button disabled>Disabled</Button>

        <Button leftIcon={<AddIcon h={3} w={3} color={"white"} mr={2} />}>
          Icon Btn
        </Button>
        <Button
          disabled
          leftIcon={
            <AddIcon
              h={3}
              w={3}
              color={ExtendsColorEnum["grayScale.200"]}
              mr={2}
            />
          }
        >
          Disabled
        </Button>
      </SimpleGrid>

      <SimpleGrid spacing={10} columns={4} bg={boxColor} sx={styles.listBtns}>
        <Button variant={ExtendVariantEnum.ghost}>Enabled</Button>
        <Button variant={ExtendVariantEnum.ghost} disabled>
          Enabled
        </Button>

        <Button
          variant="ghost"
          colorScheme={ExtendsColorEnum["secondary.500"]}
          leftIcon={
            <AddIcon
              h={3}
              w={3}
              color={ExtendsColorEnum["secondary.500"]}
              mr={2}
            />
          }
        >
          Icon Btn
        </Button>
        <Button
          variant="ghost"
          disabled
          leftIcon={
            <AddIcon
              h={3}
              w={3}
              color={ExtendsColorEnum["grayScale.600"]}
              mr={2}
            />
          }
        >
          Disabled
        </Button>
      </SimpleGrid>

      <SimpleGrid spacing={10} columns={4} bg={boxColor} sx={styles.listBtns}>
        <Tooltip label="Default tooltip" placement="bottom">
          <Button colorScheme={"gray"}>Default tooltip</Button>
        </Tooltip>

        <Tooltip label={renderTooltipContent()} placement="bottom">
          <Button colorScheme={"gray"}>Shortcut tooltip</Button>
        </Tooltip>
      </SimpleGrid>
    </Box>
  );
};
