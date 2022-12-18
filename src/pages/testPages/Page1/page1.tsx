import { useTranslation } from 'react-i18next';
import { usePage1Management } from './usePage1Management';
import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { styles } from './styles';
import { Outlet } from 'react-router-dom';
import { TextLayerEnum } from 'theme/typography/interfaces';

export const Page1 = () => {
  const { authData, onLogout } = usePage1Management();

  const { t } = useTranslation(['common']);

  return (
    <VStack m={10}>
      <Box sx={styles.demoBox}></Box>
      <Text as={'h1'}>Hello</Text>
      <Text layerStyle={TextLayerEnum.headlineSm}>
        {authData?.token ? 'User is auth' : 'Non auth'}
      </Text>

      <Text>TRANS: {t(['test.title'], { ns: 'common' })}</Text>

      <Button variant={'solid'} colorScheme="orange" onClick={() => onLogout()}>
        Logout
      </Button>
      <hr></hr>
      <Outlet />
    </VStack>
  );
};
