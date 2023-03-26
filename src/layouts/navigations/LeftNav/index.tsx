import { Box, Text, VStack } from '@chakra-ui/react';
import CollapsibleNavigation from 'component-ui/CollapsibleNavigation';
import CollapsibleNavItem from 'component-ui/CollapsibleNavigation/CollasibleNavItem';
import { TextLayer } from 'theme/typography/interfaces';
import { style } from './styles';
import { navList } from './navList';

interface ILeftNavProps {
  isLeftNavExpand: boolean;
  isFixed: boolean;
  onMouseEnter(): void;
  onMouseOut(): void;
}

const LeftNav = (props: ILeftNavProps) => {
  const { isLeftNavExpand, onMouseEnter, onMouseOut, isFixed } =
    props;
  const styles = style(isLeftNavExpand, isFixed);

  return (
    <VStack
      sx={styles.root}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseOut}
    >
      <Text
        sx={styles.menuTitle}
        layerStyle={TextLayer.smallBoldNormal}
      >
        Menu
      </Text>
      <Box w="100%">
        {navList.map((item) => {
          const { subItems, ...rest } = item;
          const listSubItems = subItems.map((subItem) => {
            return (
              <CollapsibleNavItem key={subItem.title}>
                {subItem.title}
              </CollapsibleNavItem>
            );
          });
          return (
            <CollapsibleNavigation
              key={rest.title}
              {...rest}
              mt=".6rem"
              isMinimize={!isLeftNavExpand && !isFixed}
            >
              {listSubItems}
            </CollapsibleNavigation>
          );
        })}
      </Box>
    </VStack>
  );
};

export default LeftNav;
