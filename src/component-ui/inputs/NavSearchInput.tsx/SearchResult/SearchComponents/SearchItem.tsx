import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import Dot from 'component-ui/Badges/Dot';
import PrisButton from 'component-ui/buttons/PrisButton';
import { ExtendedColor } from 'theme/colors/interfaces';
import { ArticleIconOutlined } from 'theme/icons/SVGs/article';
import { ClockIconOutlined } from 'theme/icons/SVGs/clock';
import CloseIcon from 'theme/icons/SVGs/close';
import { CourseIconOutlined } from 'theme/icons/SVGs/course';
import { UserIconOutlined } from 'theme/icons/SVGs/user';
import { TextLayer } from 'theme/typography/interfaces';
import { styles } from '../styles';

export enum SearchItemType {
  RECENT = 'RECENT',
  COURSE = 'COURSE',
  PEOPLE = 'PEOPLE',
  ARTICLE = 'ARTICLE'
}

export interface ISearchItemProps {
  imgUrl?: string;
  type?: SearchItemType;
}

const SearchItem = (props: ISearchItemProps) => {
  const { imgUrl, type = SearchItemType.RECENT } = props;

  const _renderThumbnail = () => {
    if (imgUrl) {
      return (
        <Image
          src={imgUrl}
          boxSize="3rem"
          borderRadius={'.4rem'}
          objectFit="cover"
        />
      );
    } else {
      let thumbnailIcon: JSX.Element | null = null;
      const defaultProps = {
        boxSize: '2rem',
        fill: ExtendedColor['darkLevel.400']
      };

      switch (type) {
        case SearchItemType.RECENT:
          thumbnailIcon = <ClockIconOutlined {...defaultProps} />;
          break;
        case SearchItemType.ARTICLE:
          thumbnailIcon = <ArticleIconOutlined {...defaultProps} />;
          break;
        case SearchItemType.COURSE:
          thumbnailIcon = <CourseIconOutlined {...defaultProps} />;
          break;
        case SearchItemType.PEOPLE:
          thumbnailIcon = <UserIconOutlined {...defaultProps} />;
          break;
        default:
          thumbnailIcon = <ClockIconOutlined {...defaultProps} />;
          break;
      }

      return thumbnailIcon;
    }
  };

  return (
    <Flex sx={styles.searchItemBox}>
      <Center
        boxSize={'3rem'}
        bg={ExtendedColor['darkLevel.700']}
        borderRadius=".4rem"
      >
        {_renderThumbnail()}
      </Center>
      <Box ml={'0.75rem'} mr="auto">
        <Text
          color={ExtendedColor['darkLevel.300']}
          layerStyle={TextLayer.baseRegularNormal}
        >
          Concept in finance
        </Text>
        <Flex alignItems={'center'}>
          <Dot />
          <Text
            color={ExtendedColor['darkLevel.600']}
            layerStyle={TextLayer.smallRegularNormal}
            ml="5px"
          >
            35 mins
          </Text>
        </Flex>
      </Box>
      <PrisButton
        variant={'tertiary'}
        boxSize="2.25rem"
        borderRadius={'50%'}
        minWidth="0"
      >
        <CloseIcon fill={'currentcolor'} boxSize="1.25rem" />
      </PrisButton>
    </Flex>
  );
};

export default SearchItem;
