import { ChipToken } from 'theme/base/interfaces';
import { IStyleSheet } from 'theme/interfaces';

export const styles: IStyleSheet = {
  filterChip: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '32px',
    w: '108px',
    border: '1px solid',
    cursor: 'pointer',
    overflow: 'hidden',
    position: 'relative',
    borderColor: ChipToken.cpn_chips_stroke_00_default,

    _hover: {
      bg: ChipToken.cpn_chips_bg0_00_hovered,
      borderColor: ChipToken.cpn_chips_stroke_00_hovered
    },

    _active: {
      bg: ChipToken.cpn_chips_bg0_00_hovered,
      borderColor: ChipToken.cpn_chips_stroke_00_pressed
    }
  },

  closeBox: {
    height: '2rem',
    width: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    transition: 'all .5s ease',
    bg: ChipToken.cpn_chips_icon_bg_s0_hovered
  },

  filterChipSelected: {
    bgColor: ChipToken.cpn_chips_bg0_s0_default,
    borderColor: ChipToken.cpn_chips_content_s0_hovered,

    _hover: {
      borderColor: ChipToken.cpn_chips_content_s0_hovered,
      bgColor: ChipToken.cpn_chips_bg0_s0_default
    },

    _active: {
      bg: ChipToken.cpn_chips_bg0_s0_pressed,
      borderColor: ChipToken.cpn_chips_content_s0_hovered
    }
  }
};
