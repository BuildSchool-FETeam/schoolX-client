import { Box, Flex, Text } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import NotificationIcon from 'theme/icons/SVGs/notification';
import { TextLayer } from 'theme/typography/interfaces';
import { styles } from './styles';

interface INotificationBellProps {
  notificationCount: number;
}

const NotificationBell = (props: INotificationBellProps) => {
  const { notificationCount } = props;

  let noticCountStyles = styles.noticCount;

  if (notificationCount > 9) {
    noticCountStyles = {
      ...noticCountStyles,
      w: '1.9rem',
      right: '-19px'
    };
  }

  return (
    <Box position={'relative'} cursor="pointer">
      <NotificationIcon
        w="1.25rem"
        h="1.25rem"
        ml={'1.25rem'}
        fill={NavTokenColor.cpn_btn_neutral_content_default}
      />
      <Flex sx={noticCountStyles}>
        <Text layerStyle={TextLayer.smallBoldNormalX}>
          {notificationCount}
        </Text>
      </Flex>
    </Box>
  );
};

export default NotificationBell;
