import { Avatar, AvatarBadge, useDisclosure } from '@chakra-ui/react';
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

  return (
    <div>
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
        onClickOutSide={onClose}
      />
    </div>
  );
};

export default TopBarAvatar;
