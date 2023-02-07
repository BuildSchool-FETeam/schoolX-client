import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import TextButton from 'component-ui/buttons/TextButton';
import RecentCoursesSlider from 'component-ui/Cards/RecentCourse/RecentCoursesSlider';
import FilteredChip from 'component-ui/FilterChip';
import { myCoursesData, recentItemData } from 'data-test/dataSearch';
import { MutableRefObject } from 'react';
import { ArticleIconOutlined } from 'theme/icons/SVGs/article';
import { CourseIconOutlined } from 'theme/icons/SVGs/course';
import { UserIconOutlined } from 'theme/icons/SVGs/user';
import { TextLayer } from 'theme/typography/interfaces';
import SearchItem, {
  SearchItemType
} from './SearchComponents/SearchItem';
import { styles } from './styles';

interface ISearchResultProps {
  isShow: boolean;
  /**
   * InputRef is using to get input width
   */
  inputRef: MutableRefObject<HTMLInputElement | null>;
  isSearching: boolean;
}

const SearchResult = (props: ISearchResultProps) => {
  const { isShow, inputRef, isSearching } = props;
  const _resultWidth = inputRef.current?.offsetWidth;

  const _renderFilterChips = () => {
    const chipArrays = [
      {
        icon: <CourseIconOutlined />,
        title: 'Courses'
      },
      {
        icon: <ArticleIconOutlined />,
        title: 'Articles'
      },
      {
        icon: <UserIconOutlined />,
        title: 'People'
      }
    ];
    return (
      <Flex m="1rem">
        {chipArrays.map((chip) => (
          <FilteredChip
            Icon={chip.icon}
            title={chip.title}
            className="chip"
            key={chip.title}
          />
        ))}
      </Flex>
    );
  };

  const _renderRecentSearch = () => {
    return (
      <Box mx="1rem">
        {!isSearching && (
          <Flex
            alignItems={'center'}
            justifyContent="space-between"
            mt="1rem"
            w="100%"
          >
            <Text layerStyle={TextLayer.mediumBold}>
              Recent Search
            </Text>
            <TextButton> More </TextButton>
          </Flex>
        )}
        <Flex flexDir={'column'} mt="1.2rem">
          {recentItemData.map((item) => (
            <SearchItem
              key={recentItemData.indexOf(item)}
              imgUrl={item.url}
              type={item.type as SearchItemType}
            />
          ))}
        </Flex>
      </Box>
    );
  };

  const _renderMyCourses = () => {
    return (
      <Box>
        <Flex
          alignItems={'center'}
          justifyContent="space-between"
          mt="1rem"
          w="100%"
          p="1rem"
        >
          <Text layerStyle={TextLayer.mediumBold}>My Courses</Text>
          <TextButton> More </TextButton>
        </Flex>
        <RecentCoursesSlider listItems={myCoursesData} />
      </Box>
    );
  };

  return isShow ? (
    <Flex
      w={_resultWidth}
      sx={styles.resultBox}
      flexDir={'column'}
      pb="1rem"
    >
      {_renderFilterChips()}
      <Box px="1rem">
        <Divider variant={'v1'} />
      </Box>
      {_renderRecentSearch()}
      {!isSearching && _renderMyCourses()}
    </Flex>
  ) : null;
};

export default SearchResult;
