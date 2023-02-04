import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ChipToken } from 'theme/base/interfaces';
import CheckIcon from 'theme/icons/SVGs/check';
import CloseIcon from 'theme/icons/SVGs/close';
import { TextLayer } from 'theme/typography/interfaces';
import { styles } from './style';

interface IFilterChipProps {
  Icon: JSX.Element;
  title: string;
  chipType?: 'round' | 'no-round';
  onClick?: (isSelected: boolean) => void;
  variant?: 'base' | 'no-border';
}

const FilterChip = (props: IFilterChipProps) => {
  const {
    Icon,
    chipType = 'no-round',
    title,
    onClick,
    variant = 'base'
  } = props;
  const [isSelected, setIsSelected] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const _getContentColor = () => {
    let contentColor = ChipToken.cpn_chips_content_00_default;

    if (isSelected && !isMouseEnter) {
      contentColor = ChipToken.cpn_chips_content_s0_default;
    } else if (isSelected && isMouseEnter) {
      contentColor = ChipToken.cpn_chips_content_s0_hovered;
    }

    return contentColor;
  };

  const _renderIcon = () => {
    const defaultProps = {
      fill: ChipToken.cpn_chips_content_00_default,
      mr: '.3rem',
      h: '20px',
      w: '20px'
    };

    return React.cloneElement(Icon, defaultProps);
  };

  const _renderCheckedIcon = () => {
    return (
      <CheckIcon
        fill={_getContentColor()}
        h="20px"
        w="20px"
        mr=".3rem"
      />
    );
  };

  const _renderCloseBox = () => {
    const isSelectedAndHovered = isSelected && isMouseEnter;
    return (
      <Flex
        sx={styles.closeBox}
        right={isSelectedAndHovered ? '0' : '-100%'}
      >
        <CloseIcon
          fill={ChipToken.cpn_chips_content_s0_hovered}
          h="20px"
          w="20px"
        />
      </Flex>
    );
  };

  const _onClick = () => {
    setIsSelected(!isSelected);
    onClick?.(!isSelected);
  };

  const chipStyles = {
    ...styles.filterChip,
    ...(isSelected ? styles.filterChipSelected : {})
  };

  return (
    <Button
      onClick={_onClick}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      sx={chipStyles}
      borderRadius={chipType === 'no-round' ? '.45rem' : '10rem'}
    >
      {isSelected ? _renderCheckedIcon() : _renderIcon()}
      <Text
        color={_getContentColor()}
        layerStyle={TextLayer.smallRegularNormal}
      >
        {title}
      </Text>
      {_renderCloseBox()}
    </Button>
  );
};

export default FilterChip;
