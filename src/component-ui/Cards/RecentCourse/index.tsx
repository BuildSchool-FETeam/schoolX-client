import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react';
import Dot from 'component-ui/Badges/Dot';
import { truncate } from 'lodash';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

export interface ICourseCardProps {
  imgUrl: string;
  title: string;
  timeByHour: number;
  className?: string;
  onClick?: () => void;
}

const RecentCourse = (props: ICourseCardProps) => {
  const { imgUrl, title, timeByHour, className, onClick } = props;
  const _onClick = () => {
    console.log('Hello');
    onClick && onClick();
  };

  return (
    <Box
      onClick={_onClick}
      border="1px solid"
      borderColor={NavTokenColor.alias_divider_1}
      borderRadius={'.7rem'}
      className={className}
    >
      <Image
        src={imgUrl}
        w="12.5rem"
        h="7rem"
        borderRadius={'.7rem'}
        objectFit="cover"
      />
      <Box id="recent-course-information" m=".75rem">
        <Text layerStyle={TextLayer.smallBoldNormal}>
          {truncate(title, { length: 45, separator: /\s/ })}
        </Text>
        <Flex alignItems={'center'} mt=".5rem">
          <Dot />
          <Text
            layerStyle={TextLayer.smallRegularNormalX}
            color={ExtendedColor['darkLevel.600']}
            ml="4px"
          >
            Seen{' '}
            <chakra.b color={ExtendedColor['darkLevel.100']}>
              {timeByHour}h
            </chakra.b>{' '}
            ago
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecentCourse;
