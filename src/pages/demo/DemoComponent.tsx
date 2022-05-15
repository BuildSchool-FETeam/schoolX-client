import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { styles } from "./styles";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { ExtendVariantEnum } from "theme/components/interfaces";
import { TextLayerEnum } from "theme/typography/interfaces";

export const DemoComponent = () => {
  const renderTooltipContent = () => {
    return (
      <HStack>
        <Text
          layerStyle={TextLayerEnum.labelLg500}
          color={ExtendsColorEnum["secondary.500"]}
        >
          Tooltip
        </Text>
        <Text layerStyle={TextLayerEnum.labelLg500} color={"gray.500"}>
          shortcut
        </Text>
      </HStack>
    );
  };

  return (
    <Box>
      <SimpleGrid spacing={10} columns={4} bg="gray.100" sx={styles.listBtns}>
        <Button colorScheme={"blue"}>Enabled</Button>
        <Button colorScheme={"blue"} disabled>
          Disabled
        </Button>

        <Button
          colorScheme={"blue"}
          leftIcon={<AddIcon h={3} w={3} color="gray.100" mr={2} />}
        >
          Icon Btn
        </Button>
        <Button
          colorScheme={"blue"}
          disabled
          leftIcon={<AddIcon h={3} w={3} color="gray.100" mr={2} />}
        >
          Disabled
        </Button>
      </SimpleGrid>

      <SimpleGrid
        spacing={10}
        columns={4}
        bg={ExtendsColorEnum["base.900"]}
        sx={styles.listBtns}
      >
        <Button variant={ExtendVariantEnum.ghost}>Enabled</Button>
        <Button variant={ExtendVariantEnum.ghost} disabled>
          Enabled
        </Button>

        <Button
          variant="ghost"
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
          leftIcon={<AddIcon h={3} w={3} color="gray.100" mr={2} />}
        >
          Disabled
        </Button>
      </SimpleGrid>

      <SimpleGrid spacing={10} columns={4} bg={"gray.100"} sx={styles.listBtns}>
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
