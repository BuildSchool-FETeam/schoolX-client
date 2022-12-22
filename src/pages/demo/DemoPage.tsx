import {
  SimpleGrid,
  Text,
  Box,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import PrisButton from 'component-ui/buttons/PrisButton';
import { ExtendedColor } from 'theme/colors/interfaces';
import { colorDarkBoxData, colorTokenBox } from './data';
import { styles } from './styles';
import { MoonIcon } from '@chakra-ui/icons';
import PrisButtonSec from 'component-ui/buttons/PrisButtonSec';
import TextButton from 'component-ui/buttons/TextButton';

export const DemoPage = () => {
  const listColorDarkBoxes = colorDarkBoxData.map((dt) => {
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
    ExtendedColor['darkLevel.100'],
    ExtendedColor['darkLevel.900']
  );

  return (
    <div style={{ marginBottom: '4rem' }}>
      <Text size="2xl" mt="1rem">
        DEMO, this is the default font
      </Text>
      <SimpleGrid
        spacing={4}
        columns={4}
        bg={boxColor}
        sx={styles.listItems}
      >
        {listColorDarkBoxes}
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={4}
        bg={boxColor}
        sx={styles.listItems}
      >
        {tokenBoxes}
      </SimpleGrid>

      <SimpleGrid
        spacing={4}
        columns={5}
        bg={boxColor}
        sx={styles.listItems}
      >
        <PrisButton>Primary fit</PrisButton>
        <PrisButton
          justifyContent={'flex-start'}
          leftIcon={<MoonIcon justifySelf={'flex-start'} />}
        >
          Primary fit
        </PrisButton>
        <PrisButton buttonType={'round'}>Secondary fit</PrisButton>
      </SimpleGrid>
      <Flex
        justifyContent="flex-start"
        bg={boxColor}
        sx={styles.listItems}
        align="center"
      >
        <PrisButton mr="4">Primary fit</PrisButton>
        <PrisButton leftIcon={<MoonIcon />} mr="4">
          Primary fit
        </PrisButton>
        <PrisButton isLoading mr="4">
          Primary fit
        </PrisButton>
        <PrisButton mr="4">
          <MoonIcon />
        </PrisButton>
        <PrisButton disabled mr="4" leftIcon={<MoonIcon />}>
          Primary Disabled
        </PrisButton>
        <PrisButton mr="4" size={'md'} buttonType="round">
          Primary md
        </PrisButton>
        <PrisButton mr="4" size={'lg'} leftIcon={<MoonIcon />}>
          Primary Lg
        </PrisButton>
      </Flex>
      <Flex
        justifyContent="flex-start"
        sx={styles.listItems}
        align="center"
      >
        <PrisButtonSec mr="4">Primary fit</PrisButtonSec>
        <PrisButtonSec leftIcon={<MoonIcon />} mr="4">
          Primary fit
        </PrisButtonSec>
        <PrisButtonSec isLoading mr="4">
          Primary fit
        </PrisButtonSec>
        <PrisButtonSec mr="4">
          <MoonIcon />
        </PrisButtonSec>
        <PrisButtonSec disabled mr="4" leftIcon={<MoonIcon />}>
          Primary Disabled
        </PrisButtonSec>
        <PrisButtonSec mr="4" size={'md'} buttonType="round">
          Primary md
        </PrisButtonSec>
        <PrisButtonSec mr="4" size={'lg'} leftIcon={<MoonIcon />}>
          Primary Lg
        </PrisButtonSec>
      </Flex>
      <Flex
        justifyContent="flex-start"
        sx={styles.listItems}
        align="center"
      >
        <TextButton mr="4">Text Button</TextButton>
        <TextButton mr="4" leftIcon={<MoonIcon />}>
          Text Button
        </TextButton>
        <TextButton
          mr="4"
          leftIcon={<MoonIcon />}
          buttonType={'round'}
        >
          Text Button
        </TextButton>
        <TextButton mr="4" disabled>
          Text Disabled
        </TextButton>
        <TextButton mr="4" leftIcon={<MoonIcon />}>
          Text Button
        </TextButton>

        <TextButton mr="4" leftIcon={<MoonIcon />} size="md">
          Text Button
        </TextButton>
      </Flex>
    </div>
  );
};
