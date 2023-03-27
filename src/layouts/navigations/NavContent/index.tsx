import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { styleGenerator } from './styles';

interface NavContentProps {
  isLeftNavFixed: boolean;
}

const NavContent = (props: NavContentProps) => {
  const { isLeftNavFixed } = props;
  const styles = styleGenerator(isLeftNavFixed);

  return (
    <Box sx={styles.root}>
      <Outlet></Outlet>
    </Box>
  );
};

export default NavContent;
