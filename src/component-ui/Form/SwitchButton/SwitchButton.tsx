import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { styles } from './styles';
import './animation.css';
import classNames from 'classnames';
import { ExtendedColor } from 'theme/colors/interfaces';

export interface ISwitchProps {
  onChangeState?(state: boolean): void;
  activeColor?: ExtendedColor;
}

export const SwitchButton = (props: ISwitchProps) => {
  const [state, setState] = useState(false);

  function _onClick() {
    setState(!state);
  }

  const slideIn = classNames('slideInAnimation', 'end-state');
  const slideOut = classNames('slideOutAnimation', 'start-state');

  return (
    <Box
      cursor={'pointer'}
      sx={styles.outer}
      onClick={_onClick}
      tabIndex={0}
    >
      <Box
        sx={styles.inner}
        className={state ? slideIn : slideOut}
      ></Box>
    </Box>
  );
};
