import {
  SimpleGrid,
  Text,
  Box,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { colorDarkBoxData, colorLightBoxData, colorTokenBox } from "./data";
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

  const tokenBoxes = colorTokenBox.map((dt) => {
    return (
      <Box sx={styles.gridItem} bg={dt.color} key={dt.text}>
        {dt.text}
      </Box>
    );
  });

  const boxColor = useColorModeValue(
    ExtendsColorEnum["darkLevel.100"],
    ExtendsColorEnum["darkLevel.900"]
  );

  return (
    <Fragment>
      <Text size="2xl" mt="1rem">
        DEMO, this is the default font
      </Text>
      <SimpleGrid spacing={4} columns={4} bg={boxColor} sx={styles.listItems}>
        {listColorDarkBoxes}
      </SimpleGrid>

      <SimpleGrid spacing={4} columns={4} bg={boxColor} sx={styles.listItems}>
        {listColorLightBoxes}
      </SimpleGrid>

      <SimpleGrid spacing={4} columns={4} bg={boxColor} sx={styles.listItems}>
        {tokenBoxes}
      </SimpleGrid>

      <SimpleGrid spacing={4} columns={4} bg={boxColor} sx={styles.listItems}>
        <Button>Test button</Button>
      </SimpleGrid>
    </Fragment>
  );
};
