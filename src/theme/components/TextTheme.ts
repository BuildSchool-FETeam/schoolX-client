import { ComponentStyleConfig } from '@chakra-ui/react';
import { ExtendsColorEnum } from 'theme/colors/interfaces';

export const TextTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    textAlign: 'left',
    margin: 0,
    color:
      props.colorMode === 'dark'
        ? ExtendsColorEnum['darkLevel.100']
        : ExtendsColorEnum['darkLevel.900']
  })
};
