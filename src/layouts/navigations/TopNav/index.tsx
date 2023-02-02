import { navStyle } from './styles';
import {
  Avatar,
  AvatarBadge,
  Divider,
  Flex,
  Img
} from '@chakra-ui/react';
import DraggableIcon from 'theme/icons/SVGs/draggable';
import Section from 'component-ui/factoryComponent/SectionFactory';
import Nav from 'component-ui/factoryComponent/NavFactory';
import LogoNav from 'theme/icons/Images/LogoNav.png';
import NavSearchInput from 'component-ui/inputs/NavSearchInput.tsx';
import PrisButton from 'component-ui/buttons/PrisButton';
import NotificationBell from 'component-ui/notification/NotificationBell';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';

interface ITopNavProps {
  userName: string;
  imgSrc: string;
}

const TopNav = (props: ITopNavProps) => {
  const { userName, imgSrc } = props;

  const _renderFirstSection = () => {
    return (
      <Flex align={'center'}>
        <DraggableIcon sx={navStyle.dragIcon} />
        <Img src={LogoNav} w="6.5rem" ml="1rem" />
      </Flex>
    );
  };

  const _renderCenterSection = () => {
    return <NavSearchInput />;
  };

  const _renderRightSection = () => {
    return (
      <Flex alignItems={'center'}>
        <PrisButton variant={'primary'} disabled>
          Focus Now
        </PrisButton>
        <Divider
          variant={'v2'}
          orientation="vertical"
          marginLeft={'.8rem'}
          h="1rem"
        ></Divider>
        <NotificationBell />
        <Avatar
          name={userName}
          src={imgSrc}
          ml="1.5rem"
          boxSize={'40px'}
          cursor="pointer"
        >
          <AvatarBadge
            borderColor={NavTokenColor.alias_neutral_bg_2}
            bg={ExtendedColor['success_dark.500']}
            boxSize="1rem"
            border="2px solid"
          />
        </Avatar>
      </Flex>
    );
  };

  return (
    <Nav sx={navStyle.root}>
      <Section id="left">{_renderFirstSection()}</Section>
      <Section id="center">{_renderCenterSection()}</Section>
      <Section id="right">{_renderRightSection()}</Section>
    </Nav>
  );
};

export default TopNav;
