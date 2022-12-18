import { CSSObject } from '@emotion/react';

/**
 * @param fontSize px
 * @param fontWeight number 100/200/.../900
 * @param lineHeight px
 * @return CSS Object with rem
 */
function generateHeadingStyle(
  fontSize: number,
  fontWeight: number,
  lineHeight: number
): CSSObject {
  return {
    color: 'gray.900',
    fontSize: (fontSize / 16).toFixed(1) + 'rem',
    fontWeight,
    lineHeight: (lineHeight / 16).toFixed(1) + 'rem'
  };
}

function generateSubTitleStyle(
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
  letter = 0.1
): CSSObject {
  return {
    fontFamily: 'content',
    color: 'gray.900',
    fontSize: (fontSize / 16).toFixed(1) + 'rem',
    fontWeight,
    lineHeight: (lineHeight / 16).toFixed(1) + 'rem',
    letterSpacing: letter
  };
}

export const textLayerStyle = {
  displayLg: generateHeadingStyle(56, 500, 64),
  displayMd: generateHeadingStyle(44, 500, 52),
  displaySm: generateHeadingStyle(36, 600, 44),

  headLineLg: generateHeadingStyle(32, 600, 40),
  headLineMd: generateHeadingStyle(28, 600, 36),
  headlineSm: generateHeadingStyle(24, 700, 32),

  titleLg900: generateSubTitleStyle(24, 900, 32, 0.5),
  titleLg700: generateSubTitleStyle(24, 700, 32),
  titleLg500: generateSubTitleStyle(24, 500, 32, 0),
  titleMd900: generateSubTitleStyle(16, 900, 24, 0.3),
  titleMd700: generateSubTitleStyle(16, 700, 24),
  titleMd500: generateSubTitleStyle(16, 500, 24),

  bodyLg700: generateSubTitleStyle(16, 700, 24, 0.5),
  bodyLg400: generateSubTitleStyle(16, 400, 24, 0.5),
  bodySm700: generateSubTitleStyle(12, 700, 16, 0.4),
  bodySm400: generateSubTitleStyle(12, 400, 16, 0.4),

  labelLg800: generateSubTitleStyle(16, 800, 20, 0.3),
  labelLg500: generateSubTitleStyle(16, 500, 20),
  labelMd800: generateSubTitleStyle(12, 800, 16, 0.5),
  labelMd500: generateSubTitleStyle(12, 500, 16, 0.5),
  labelSm800: generateSubTitleStyle(10, 800, 16, 0.7),
  labelSm500: generateSubTitleStyle(10, 600, 16, 0.5)
};
