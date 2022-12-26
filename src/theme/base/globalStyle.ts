import { IStyleSheet } from 'theme/interfaces';

export const globalStyle: IStyleSheet = {
  html: {
    fontSize: {
      base: '85%',
      sm: '90%',
      md: '100%'
    }
  },
  body: {
    fontFamily: 'Inter',
    fontSize: '1rem',
    color: 'gray.900'
  }
};
