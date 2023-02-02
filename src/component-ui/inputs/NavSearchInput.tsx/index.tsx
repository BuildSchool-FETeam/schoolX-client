import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text
} from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import SearchNormalIcon from 'theme/icons/SVGs/searchNormal';
import { TextLayer } from 'theme/typography/interfaces';
import { styles } from './style';

const NavSearchInput = () => {
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
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={
          <SearchNormalIcon fill={ExtendedColor['darkLevel.500']} />
        }
      />
      <Input
        focusBorderColor={ExtendedColor['primary_dark.500']}
        placeholder="Search"
        sx={styles.input}
      />
      <InputRightElement
        pointerEvents="none"
        children={_renderShortCutIcon()}
      />
    </InputGroup>
  );
};

export default NavSearchInput;
