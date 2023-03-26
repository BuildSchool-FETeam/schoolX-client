import { Box, Text } from '@chakra-ui/react';

interface NavContentProps {
  isLeftNavFixed: boolean;
}

const NavContent = (props: NavContentProps) => {
  const { isLeftNavFixed } = props;

  return (
    <Box
      ml={`${isLeftNavFixed ? '17.5rem' : '5rem'} !important`}
      w={`calc(100vw - ${isLeftNavFixed ? '17.5rem' : '5rem'})`}
      transition="all .3s"
      zIndex={-2}
    >
      <Text>Nav Content</Text>;
    </Box>
  );
};

export default NavContent;
