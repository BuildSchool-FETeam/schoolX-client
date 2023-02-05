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
}

const SearchResult = (props: ISearchResultProps) => {
  const { isShow, inputRef } = props;
  const _resultWidth = inputRef.current?.offsetWidth;

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

  const _renderRecentSearch = () => {
    return (
      <Box>
        <Flex
          alignItems={'center'}
          justifyContent="space-between"
          mt="1rem"
          w="100%"
        >
          <Text layerStyle={TextLayer.mediumBold}>Recent Search</Text>
          <TextButton> More </TextButton>
        </Flex>
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
      p="1rem"
      flexDir={'column'}
    >
      <Flex mb="1rem">
        {chipArrays.map((chip) => (
          <FilteredChip
            Icon={chip.icon}
            title={chip.title}
            className="chip"
            key={chip.title}
          />
        ))}
      </Flex>
      <Divider variant={'v1'} />
      {_renderRecentSearch()}
      {_renderMyCourses()}
    </Flex>
  ) : null;
};

export default SearchResult;
