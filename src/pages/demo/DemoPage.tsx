import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";
import { colorDarkBoxData } from "./data";
import { styles } from "./styles";

export const DemoPage = () => {
  const listColorDarkBoxes = colorDarkBoxData.map((dt) => {
    return (
      <Box sx={styles.gridItem} bg={dt.color} key={dt.text}>
        {dt.text}
      </Box>
    );
  });

  return (
    <Fragment>
      <Text size="2xl" mt="1rem">
        DEMO
      </Text>
      <SimpleGrid spacing={4} columns={4} bg="gray.100" sx={styles.listItems}>
        {listColorDarkBoxes}
      </SimpleGrid>
      <SimpleGrid spacing={4} columns={4} bg="gray.100" sx={styles.listItems}>
        {listColorDarkBoxes}
      </SimpleGrid>
    </Fragment>
  );
};
