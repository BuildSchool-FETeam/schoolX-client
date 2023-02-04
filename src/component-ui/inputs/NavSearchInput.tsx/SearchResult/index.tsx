import { Flex } from '@chakra-ui/react';
import FilterChip from 'component-ui/FilterChip';
import { MutableRefObject } from 'react';
import CourseIcon from 'theme/icons/SVGs/course';
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

  return isShow ? (
    <Flex w={_resultWidth} sx={styles.resultBox} p="1rem">
      <FilterChip Icon={<CourseIcon />} title={'Courses'} />
    </Flex>
  ) : null;
};

export default SearchResult;
