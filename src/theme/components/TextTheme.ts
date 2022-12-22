import { ComponentStyleConfig } from '@chakra-ui/react';
import { ExtendedColor } from 'theme/colors/interfaces';

export const TextTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    textAlign: 'left',
    margin: 0,
    color:
      props.colorMode === 'dark'
        ? ExtendedColor['darkLevel.100']
        : ExtendedColor['darkLevel.900']
  })
};
