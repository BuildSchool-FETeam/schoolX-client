import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { TextLayerEnum } from "theme/typography/interfaces";
import { colorDarkBoxData, colorLightBoxData } from "./data";
import { styles } from "./styles";

export const DemoPage = () => {
  const listColorDarkBoxes = colorDarkBoxData.map((dt) => {
    return (
      <Box sx={styles.gridItem} bg={dt.color} key={dt.text}>
        {dt.text}
      </Box>
    );
  });

  const listColorLightBoxes = colorLightBoxData.map((dt) => {
    return (
      <Box sx={styles.gridItem} bg={dt.color} key={dt.text}>
        {dt.text}
      </Box>
    );
  });

  return (
    <Fragment>
      <Text size="2xl" mt="1rem">
        DEMO, this is the default font
      </Text>
      <SimpleGrid spacing={4} columns={4} bg="gray.100" sx={styles.listItems}>
        {listColorDarkBoxes}
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={4}
        bg={ExtendsColorEnum["base.700"]}
        sx={styles.listItems}
      >
        {listColorLightBoxes}
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={1}
        bg="gray.100"
        sx={styles.listItems}
        textAlign="left"
      >
        <Text layerStyle={TextLayerEnum["displayLg"]}>
          1. display large- Bai Jamjuree
        </Text>
        <Text layerStyle={TextLayerEnum["displayMd"]}>
          2. display medium- Bai Jamjuree
        </Text>
        <Text layerStyle={TextLayerEnum["displaySm"]}>
          3. display small - Bai Jamjuree
        </Text>
        <Text layerStyle={TextLayerEnum["headLineLg"]}>
          4. Heading large - Bai Jamjuree
        </Text>
        <Text layerStyle={TextLayerEnum["headLineMd"]}>
          5. Heading medium - Bai Jamjuree
        </Text>
        <Text layerStyle={TextLayerEnum["headlineSm"]}>
          6. Heading sm - Bai Jamjuree
        </Text>
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={1}
        bg="gray.100"
        sx={styles.listItems}
        textAlign="left"
      >
        <Text layerStyle={TextLayerEnum["titleLg900"]}>
          1. Title large - Work sans +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["titleLg700"]}>
          1. Title large - Work sans +0.1
        </Text>
        <Text layerStyle={TextLayerEnum["titleLg500"]}>
          1. Title large - Work sans +0
        </Text>

        <Text layerStyle={TextLayerEnum["titleMd900"]}>
          1. Title Medium - Work sans +0.3
        </Text>
        <Text layerStyle={TextLayerEnum["titleMd700"]}>
          1. Title Medium - Work sans +0.1
        </Text>
        <Text layerStyle={TextLayerEnum["titleMd500"]}>
          1. Title Medium - Work sans +0.1
        </Text>
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={1}
        bg="gray.100"
        sx={styles.listItems}
        textAlign="left"
      >
        <Text layerStyle={TextLayerEnum["titleLg900"]}>
          1. Title large - Work sans +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["titleLg700"]}>
          1. Title large - Work sans +0.1
        </Text>
        <Text layerStyle={TextLayerEnum["titleLg500"]}>
          1. Title large - Work sans +0
        </Text>

        <Text layerStyle={TextLayerEnum["titleMd900"]}>
          1. Title Medium - Work sans +0.3
        </Text>
        <Text layerStyle={TextLayerEnum["titleMd700"]}>
          1. Title Medium - Work sans +0.1
        </Text>
        <Text layerStyle={TextLayerEnum["titleMd500"]}>
          1. Title Medium - Work sans +0.1
        </Text>
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={1}
        bg="gray.100"
        sx={styles.listItems}
        textAlign="left"
      >
        <Text layerStyle={TextLayerEnum["bodyLg700"]}>
          1. Body large - Work sans bold +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodyLg700"]} fontStyle="italic">
          1. Body large - Work sans bold italic +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodyLg400"]}>
          1. Body large - Work sans light +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodyLg400"]} fontStyle="italic">
          1. Body large - Work sans light italic +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodySm700"]}>
          1. Body Small - Work sans bold +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodySm700"]} fontStyle="italic">
          1. Body Small - Work sans bold italic +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodySm400"]}>
          1. Body Small - Work sans light +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["bodySm400"]} fontStyle="italic">
          1. Body Small - Work sans light italic +0.5
        </Text>
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={1}
        bg="gray.100"
        sx={styles.listItems}
        textAlign="left"
      >
        <Text layerStyle={TextLayerEnum["labelLg800"]}>
          1. Label large - Work sans bold +0.3
        </Text>
        <Text layerStyle={TextLayerEnum["labelLg500"]}>
          1. Label large - Work sans bold +0.1
        </Text>

        <Text layerStyle={TextLayerEnum["labelMd800"]}>
          1. Label Medium - Work sans bold +0.5
        </Text>
        <Text layerStyle={TextLayerEnum["labelMd500"]}>
          1. Label Medium - Work sans bold +0.5
        </Text>

        <Text layerStyle={TextLayerEnum["labelSm800"]}>
          1. Label small - Work sans bold +0.7
        </Text>
        <Text layerStyle={TextLayerEnum["labelSm500"]}>
          1. Label small - Work sans bold +0.5
        </Text>
      </SimpleGrid>
    </Fragment>
  );
};
