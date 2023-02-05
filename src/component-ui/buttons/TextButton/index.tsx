import {
  Button,
  ButtonProps,
  useStyleConfig
} from '@chakra-ui/react';
import { IStyleSheet } from 'theme/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

export interface TextButtonProps extends ButtonProps {
  buttonType?: 'no-round' | 'round';
}

const TextButton = (props: TextButtonProps) => {
  const {
    buttonType = 'no-round',
    variant,
    size,
    children,
    ...rest
  } = props;
  const themeStyle = useStyleConfig('TextButton', { size, variant });

  const style: IStyleSheet = {
    button: {
      borderRadius: buttonType === 'no-round' ? '.5rem' : '10rem'
    }
  };

  return (
    <Button
      __css={themeStyle}
      {...rest}
      sx={style.button}
      layerStyle={TextLayer.smallBoldNormalX}
    >
      {children}
    </Button>
  );
};

export default TextButton;
