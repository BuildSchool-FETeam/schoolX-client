import { IStyleSheet } from 'theme/interfaces';

export const styles: IStyleSheet = {
  gridItem: {
    h: '6rem',
    width: 'full',
    columnSpan: '3',
    color: 'white',
    pt: '2rem',
    borderRadius: '10px',
    boxShadow: 'md'
  },

  listItems: {
    m: 4,
    w: '70rem',
    p: 4,
    borderRadius: '1rem',
    mb: 4
  },

  listBtns: {
    my: 4,
    w: { base: 'auto', md: '50rem' },
    p: 4,
    borderRadius: '1rem',
    mb: 4
  },

  listEmptyState: {
    m: 4,
    w: { base: 'auto', md: '56rem' },
    p: 4,
    borderRadius: '1rem',
    mb: 4
  },

  logo: {
    h: '3rem',
    w: '11rem'
  },

  logoSymbol: {
    h: '5.5rem',
    w: '5.5rem'
  }
};
