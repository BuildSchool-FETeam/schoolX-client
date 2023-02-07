import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useOutsideClick
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { SearchNormalIconOutlined } from 'theme/icons/SVGs/searchNormal';
import { TextLayer } from 'theme/typography/interfaces';
import SearchResult from './SearchResult';
import { styles } from './style';
import HotKeys from 'react-hot-keys';

const DELAY_SEARCH_TIME = 2000; // 2 seconds

const NavSearchInput = () => {
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const _searchInputRef = useRef<HTMLInputElement>(null);

  const compRef = useRef(null);
  useOutsideClick({
    ref: compRef,
    handler: () => {
      setIsOpenResult(false);
    }
  });

  const _renderShortCutIcon = () => {
    return (
      <Flex sx={styles.shortcut}>
        <Text
          layerStyle={TextLayer.smallBoldNormal2X}
          color={NavTokenColor.cpn_shortcut_content}
        >
          Ctrl + /
        </Text>
      </Flex>
    );
  };

  let timeoutId: NodeJS.Timeout | null = null;
  const _onLazyChange = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const searchContent = _searchInputRef.current?.value;
    if (searchContent) {
      timeoutId = setTimeout(() => {
        // start searching
        setIsSearching(true);
      }, DELAY_SEARCH_TIME);
    } else {
      setIsSearching(false);
    }
  };

  const _onShortcut = () => {
    _searchInputRef.current?.focus();
  };

  return (
    <HotKeys keyName="ctrl+/" onKeyDown={_onShortcut}>
      <Box position={'relative'} ref={compRef}>
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
            onChange={() => _onLazyChange()}
            onFocus={() => setIsOpenResult(true)}
          />
          <InputRightElement
            w="70px"
            pointerEvents="none"
            children={_renderShortCutIcon()}
          />
        </InputGroup>
        <SearchResult
          isShow={isOpenResult}
          inputRef={_searchInputRef}
          isSearching={isSearching}
        />
      </Box>
    </HotKeys>
  );
};

export default NavSearchInput;
