import { usePage2Management } from './usePage2Management';
import {
  Box,
  Divider,
  useColorMode,
  Text,
  HStack
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { TextLayer } from 'theme/typography/interfaces';
import { DisplayContainer } from 'component-ui/layouts/DisplayContainer/DisplayContainer';
import { MoonIcon } from '@chakra-ui/icons';
import PrisButton from 'component-ui/buttons/PrisButton';
import TextButton from 'component-ui/buttons/TextButton';

export const Page2 = () => {
  const { login } = usePage2Management();
  const { toggleColorMode } = useColorMode();

  return (
    <Box m={'2rem'}>
      <DisplayContainer>
        <Text layerStyle={TextLayer.headLineMd}>Page2: Demo</Text>
        <HStack>
          <PrisButton
            my={'10px'}
            colorScheme={'gray'}
            onClick={() =>
              login({
                data: {
                  email: 'superknife0511@gmail.com',
                  password: 'Toan1234'
                }
              })
            }
          >
            Login
          </PrisButton>
          <TextButton
            buttonType="round"
            onClick={toggleColorMode}
            leftIcon={<MoonIcon />}
          >
            Change color mode
          </TextButton>
        </HStack>
        <Divider></Divider>
      </DisplayContainer>
      <Outlet />
    </Box>
  );
};
