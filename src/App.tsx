import { Box, VStack } from '@chakra-ui/react';
import { ReactRoutes } from 'router/ReactRoutes';
import homeRoutes from 'router/routes/home.route';
import { AuthContainer } from 'store-sdk/authStore/AuthView/AuthContainer';
import { ModalContainer } from 'store-sdk/modalServices/ModalViews/NotificationModalContainer';

function App() {
  return (
    <ModalContainer>
      <AuthContainer />
      <VStack align={'center'} textAlign="center">
        <Box>
          <ReactRoutes routes={homeRoutes} />
        </Box>
      </VStack>
    </ModalContainer>
  );
}

export default App;
