import { Box, VStack } from '@chakra-ui/react';
import Navigation from 'layouts/navigations';
import { AuthContainer } from 'store-sdk/authStore/AuthView/AuthContainer';
import { ModalContainer } from 'store-sdk/modalServices/ModalViews/NotificationModalContainer';

function App() {
  return (
    <ModalContainer>
      <AuthContainer />
      <VStack align={'center'} textAlign="center">
        <Box>
          <Navigation />
        </Box>
      </VStack>
    </ModalContainer>
  );
}

export default App;
