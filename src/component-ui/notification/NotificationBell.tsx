import { Box, Flex, Text } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import NotificationIcon from 'theme/icons/SVGs/notification';
import { TextLayer } from 'theme/typography/interfaces';
import { styles } from './styles';

const NotificationBell = () => {
  return (
    <Box position={'relative'} cursor="pointer">
      <NotificationIcon
        w="1.25rem"
        h="1.25rem"
        ml={'1.25rem'}
        fill={NavTokenColor.cpn_btn_neutral_content_default}
      />
      <Flex sx={styles.noticCount}>
        <Text layerStyle={TextLayer.smallBoldNormalX}>6</Text>
      </Flex>
    </Box>
  );
};

export default NotificationBell;
