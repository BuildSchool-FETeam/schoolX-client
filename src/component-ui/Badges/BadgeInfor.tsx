import { Flex, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { ExtendedColor } from 'theme/colors/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

interface BadgeInfoProps extends PropsWithChildren<any> {
  bgColor?: string;
  color?: string;
  badgeType?: 'round' | 'no-round';
  className?: string;
}

const BadgeInfo = (props: BadgeInfoProps) => {
  const {
    children,
    bgColor = ExtendedColor['darkLevel.300'],
    color = ExtendedColor['darkLevel.900'],
    badgeType = 'no-round',
    className
  } = props;

  const borderRadius = badgeType === 'no-round' ? '.3rem' : '10rem';

  return (
    <Flex
      p="3px 9px"
      bgColor={bgColor}
      borderRadius={borderRadius}
      className={className}
    >
      <Text color={color} layerStyle={TextLayer.smallBoldNormalX}>
        {children}
      </Text>
    </Flex>
  );
};

export default BadgeInfo;
