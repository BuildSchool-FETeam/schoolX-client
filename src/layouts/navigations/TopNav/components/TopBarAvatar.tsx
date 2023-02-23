import {
  Avatar,
  AvatarBadge,
  useDisclosure,
  useOutsideClick
} from '@chakra-ui/react';
import { useRef } from 'react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import ProfilePanel from './ProfilePanel';

export interface ITopBarNavProps {
  userName: string;
  imgSrc: string;
}

const TopBarAvatar = (props: ITopBarNavProps) => {
  const { userName, imgSrc } = props;
  const { isOpen, onToggle, onClose } = useDisclosure();
  const avaRef = useRef(null);
  useOutsideClick({
    handler: () => onClose(),
    ref: avaRef
  });

  return (
    <div ref={avaRef}>
      <Avatar
        name={userName}
        src={imgSrc}
        ml="1.5rem"
        boxSize={'40px'}
        cursor="pointer"
        onClick={onToggle}
      >
        <AvatarBadge
          borderColor={NavTokenColor.alias_neutral_bg_2}
          bg={ExtendedColor['success_dark.500']}
          boxSize="1rem"
          border="2px solid"
        />
      </Avatar>
      <ProfilePanel
        isShow={isOpen}
        imgSrc={imgSrc}
        userName={userName}
        userType="learner"
      />
    </div>
  );
};

export default TopBarAvatar;
