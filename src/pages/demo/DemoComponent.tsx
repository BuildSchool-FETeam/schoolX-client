import {
  Box,
  Button,
  SimpleGrid,
  Tooltip,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { styles } from './styles';
import { ExtendedColor } from 'theme/colors/interfaces';
import { ExtendVariantEnum } from 'theme/components/interfaces';
import { TextLayer } from 'theme/typography/interfaces';
import { DisplayContainer } from 'component-ui/layouts/DisplayContainer/DisplayContainer';

export const DemoComponent = () => {
  const boxColor = useColorModeValue(
    ExtendedColor['darkLevel.100'],
    ExtendedColor['darkLevel.900']
  );

  return (
    <Box py={'3rem'}>
      <DisplayContainer>
        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Button>Enabled</Button>
          <Button disabled>Disabled</Button>

          <Button
            leftIcon={<AddIcon h={3} w={3} color={'white'} mr={2} />}
          >
            Icon Btn
          </Button>
          <Button disabled leftIcon={<AddIcon h={3} w={3} mr={2} />}>
            Disabled
          </Button>
        </SimpleGrid>

        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Button variant={'info'}>Enabled</Button>
          <Button variant={'info'} disabled>
            Disabled
          </Button>

          <Button
            variant={'info'}
            leftIcon={<AddIcon h={3} w={3} color={'white'} mr={2} />}
          >
            Icon Btn
          </Button>
        </SimpleGrid>

        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Button variant={ExtendVariantEnum.ghost}>Enabled</Button>
          <Button variant={ExtendVariantEnum.ghost} disabled>
            Enabled
          </Button>
        </SimpleGrid>

        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Tooltip label="Default tooltip" placement="bottom">
            <Button colorScheme={'gray'}>Default tooltip</Button>
          </Tooltip>
        </SimpleGrid>

        <Box>
          <Text layerStyle={TextLayer.headlineSm} mb="2rem">
            Demo responsive
          </Text>
          <Box display={{ base: 'block', md: 'flex' }} maxW="30rem">
            <Text layerStyle={TextLayer.bodyLg400}>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Atque laboriosam, minus provident ex fuga,
              asperiores veniam magni, est temporibus vel explicabo?
              Inventore optio officiis, necessitatibus dolores dolorem
              quae perspiciatis odit.
            </Text>
          </Box>
        </Box>
      </DisplayContainer>
    </Box>
  );
};
