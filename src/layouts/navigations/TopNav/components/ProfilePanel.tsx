import {
  Collapse,
  Flex,
  chakra,
  Text,
  Center,
  Divider,
  HStack,
  Box
} from '@chakra-ui/react';
import { styles } from './styles';
import cover from 'theme/icons/Images/cover01.jpg';
import ProfilePanelCover from './ProfilePanelCover';
import BadgeInfo from 'component-ui/Badges/BadgeInfor';
import { TextLayer } from 'theme/typography/interfaces';
import { PriscoinIconFilled } from 'theme/icons/SVGs/priscoin';
import { ColorToken } from 'theme/base/interfaces';
import { CourseIconFilled } from 'theme/icons/SVGs/course';
import PrisButton from 'component-ui/buttons/PrisButton';
import TextButton from 'component-ui/buttons/TextButton';
import ProfilePanelSettingNav from './ProfilePanelSettingNav';
import { ProfileIconOutlined } from 'theme/icons/SVGs/profile';
import { ThemeIconOutlined } from 'theme/icons/SVGs/theme';
import { LanguageIconOutlined } from 'theme/icons/SVGs/language';
import { LogoutIconOutlined } from 'theme/icons/SVGs/logOut';
import { ExtendedColor } from 'theme/colors/interfaces';
import { UserType } from 'models/user';
import { camelCase, startCase } from 'lodash';

export interface IProfilePanelProps {
  isShow: boolean;
  imgSrc: string;
  userName: string;
  userType: UserType;
}

const ProfilePanel = (props: IProfilePanelProps) => {
  const { isShow, imgSrc, userName, userType } = props;

  const _renderCourseAndPointInfo = () => {
    return (
      <Flex alignItems={'center'}>
        <HStack mr="1rem">
          <Center
            p="4px"
            borderRadius={'50%'}
            mr=".1rem"
            bg={ColorToken.warning_darker}
          >
            <PriscoinIconFilled
              boxSize={'1rem'}
              fill={ColorToken.warning_light}
            />
          </Center>
          <Text layerStyle={TextLayer.smallBoldNormalX}>1245</Text>
        </HStack>
        <Divider orientation="vertical" h="8px" />
        <HStack ml="1rem">
          <Center
            p="4px"
            borderRadius={'50%'}
            bg={ColorToken.primary_base}
            mr=".1rem"
          >
            <CourseIconFilled
              boxSize={'1rem'}
              fill={ColorToken.primary_lighter}
            />
          </Center>
          <Text layerStyle={TextLayer.smallBoldNormalX}>21</Text>
        </HStack>
      </Flex>
    );
  };

  const _renderMenuLists = () => {
    const data = [
      {
        Icon: ProfileIconOutlined,
        title: 'Profile',
        subTitle: 'Learner',
        className: 'settingNav'
      },
      {
        Icon: ThemeIconOutlined,
        title: 'Theme',
        subTitle: 'System default',
        className: 'settingNav'
      },
      {
        Icon: LanguageIconOutlined,
        title: 'Language',
        subTitle: 'English',
        className: 'settingNav'
      }
    ];
    return (
      <Box px="1rem">
        {data.map((itemProps) => (
          <ProfilePanelSettingNav {...itemProps} />
        ))}
      </Box>
    );
  };

  const bgColor =
    userType === 'learner'
      ? ExtendedColor['darkLevel.100']
      : ColorToken.primary_base;

  const color =
    userType === 'learner'
      ? ExtendedColor['darkLevel.800']
      : ExtendedColor['darkLevel.200'];
  return (
    <Collapse in={isShow} unmountOnExit>
      <Flex sx={styles.profilePanel}>
        <ProfilePanelCover imgSrc={cover} />
        <Flex direction="column" alignItems={'center'}>
          <chakra.img
            sx={styles.bigProfileImg}
            borderColor={`${bgColor} !important`}
            src={imgSrc}
          />
          <BadgeInfo
            className="avatarBadge"
            bgColor={bgColor}
            color={color}
          >
            {startCase(userType)}
          </BadgeInfo>
        </Flex>
        <Text layerStyle={TextLayer.largeBoldX}>{userName}</Text>
        {_renderCourseAndPointInfo()}
        <Box px="1rem" w="100%">
          <PrisButton size={'lg'} w="100%" mt="1.5rem">
            View profile
          </PrisButton>
        </Box>
        <Divider my="1.5rem" />
        <HStack px="1rem" w="100%">
          <Text layerStyle={TextLayer.mediumBold} mr="auto">
            Settings
          </Text>
          <TextButton size={'sm'}>More</TextButton>
        </HStack>
        {_renderMenuLists()}
        <Box px="1rem" w="100%" mb="1.75rem">
          <PrisButton
            size={'lg'}
            w="100%"
            mt="1.5rem"
            variant={'tertiary'}
          >
            <LogoutIconOutlined
              boxSize={'1.5rem'}
              fill={ExtendedColor['darkLevel.200']}
              mr=".75rem"
            />
            <Text layerStyle={TextLayer.baseBoldNormal}>Log out</Text>
          </PrisButton>
        </Box>
      </Flex>
    </Collapse>
  );
};

export default ProfilePanel;
