import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { SearchNormalIconOutlined } from 'theme/icons/SVGs/searchNormal';
import { TextLayer } from 'theme/typography/interfaces';
import SearchResult from './SearchResult';
import { styles } from './style';

const NavSearchInput = () => {
  const [isOpenResult, setIsOpenResult] = useState(false);
  const _searchInputRef = useRef<HTMLInputElement>(null);

  const _renderShortCutIcon = () => {
    return (
      <Flex sx={styles.shortcut}>
        <Text
          layerStyle={TextLayer.smallBoldNormal2X}
          color={NavTokenColor.cpn_shortcut_content}
        >
          /
        </Text>
      </Flex>
    );
  };

  return (
    <Box position={'relative'}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <SearchNormalIconOutlined
              fill={ExtendedColor['darkLevel.500']}
            />
          }
        />
        <Input
          focusBorderColor={ExtendedColor['primary_dark.500']}
          placeholder="Search"
          sx={styles.input}
          ref={_searchInputRef}
          onFocus={() => setIsOpenResult(true)}
          // onBlur={() => setIsOpenResult(false)}
        />
        <InputRightElement
          pointerEvents="none"
          children={_renderShortCutIcon()}
        />
      </InputGroup>
      <SearchResult
        isShow={isOpenResult}
        inputRef={_searchInputRef}
      />
    </Box>
  );
};

export default NavSearchInput;
