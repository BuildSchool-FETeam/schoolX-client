import { Box, HStack, Text } from '@chakra-ui/react';
import { TextLayer } from 'theme/typography/interfaces';
import RightBar from './RightBar';

const Dashboard = () => {
  return (
    <HStack id="dashboard" bg={'blackAlpha.200'}>
      <Box mr="auto">
        <Text layerStyle={TextLayer.largeMedium4X}>Dashboard</Text>
      </Box>
      <Box pt={6} pr={3}>
        <RightBar />
      </Box>
    </HStack>
  );
};

export default Dashboard;
