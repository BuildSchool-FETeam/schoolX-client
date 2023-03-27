import { Center, Text } from '@chakra-ui/react';
import { TextLayer } from 'theme/typography/interfaces';

const Dashboard = () => {
  return (
    <Center>
      <Text layerStyle={TextLayer.largeMedium4X}>Dashboard</Text>
    </Center>
  );
};

export default Dashboard;
