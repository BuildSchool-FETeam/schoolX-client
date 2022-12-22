import { ComponentStyleConfig } from '@chakra-ui/react';
import { ExtendedColor } from 'theme/colors/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

export const TooltipTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    borderRadius: '10rem',
    // color: ExtendsColorEnum["success.500"],
    bgColor: ExtendedColor['darkLevel.900'],
    layerStyle: TextLayer.labelLg500,
    px: 3,
    py: 2,
    fontSize: '1rem'
  })
};
