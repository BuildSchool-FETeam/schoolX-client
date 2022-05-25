import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Tooltip,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { styles } from "./styles";
import { ExtendsColorEnum } from "theme/colors/interfaces";
import { ExtendVariantEnum } from "theme/components/interfaces";
import { TextLayerEnum } from "theme/typography/interfaces";
import { FullDarkLogo } from "svgs/logos/fullLogos/FullDarkLogo";
import { FullLightLogo } from "svgs/logos/fullLogos/FullLightLogo";
import { OriginalLogo } from "svgs/logos/fullLogos/OriginalLogo";
import { DarkAndBlueLogo } from "svgs/logos/fullLogos/DarkAndBlueLogo";
import { DarkCircleOriginLogo } from "svgs/logos/symbolLogo/DarkCircleOriginLogo";
import { DarkSquareOriginLogo } from "svgs/logos/symbolLogo/DarkSquareOriginLogo";
import { DarkCircleWhiteLogo } from "svgs/logos/symbolLogo/DarkCircleWhiteLogo";
import { DarkSquareWhiteLogo } from "svgs/logos/symbolLogo/DarkSquareWhiteLogo";
import { OriginSquareWhiteLogo } from "svgs/logos/symbolLogo/OriginSquareWhiteLogo";
import { OriginCircleWhiteLogo } from "svgs/logos/symbolLogo/OriginCircleWhiteLogo";
import { WhiteCircleDarkLogo } from "svgs/logos/symbolLogo/WhiteCircleDarkLogo";
import { WhiteSquareDarkLogo } from "svgs/logos/symbolLogo/WhiteSquareDarkLogo";
import { DisplayContainer } from "component-ui/DisplayContainer/DisplayContainer";

export const DemoComponent = () => {
  const boxColor = useColorModeValue(
    ExtendsColorEnum["darkLevel.50"],
    ExtendsColorEnum["darkLevel.950"]
  );

  const renderTooltipContent = () => {
    return (
      <HStack>
        <Text
          layerStyle={TextLayerEnum.labelLg500}
          color={ExtendsColorEnum["secondary.500"]}
        >
          Tooltip
        </Text>
        <Text
          layerStyle={TextLayerEnum.labelLg500}
          color={ExtendsColorEnum["grayScale.400"]}
        >
          shortcut
        </Text>
      </HStack>
    );
  };

  return (
    <Box py={"3rem"}>
      <DisplayContainer>
        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Button>Enabled</Button>
          <Button disabled>Disabled</Button>

          <Button leftIcon={<AddIcon h={3} w={3} color={"white"} mr={2} />}>
            Icon Btn
          </Button>
          <Button
            disabled
            leftIcon={
              <AddIcon
                h={3}
                w={3}
                color={ExtendsColorEnum["grayScale.200"]}
                mr={2}
              />
            }
          >
            Disabled
          </Button>
        </SimpleGrid>

        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Button variant={"info"}>Enabled</Button>
          <Button variant={"info"} disabled>
            Disabled
          </Button>

          <Button
            variant={"info"}
            leftIcon={<AddIcon h={3} w={3} color={"white"} mr={2} />}
          >
            Icon Btn
          </Button>
          <Button
            variant={"info"}
            disabled
            leftIcon={
              <AddIcon
                h={3}
                w={3}
                color={ExtendsColorEnum["grayScale.200"]}
                mr={2}
              />
            }
          >
            Disabled
          </Button>
        </SimpleGrid>

        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Button variant={ExtendVariantEnum.ghost}>Enabled</Button>
          <Button variant={ExtendVariantEnum.ghost} disabled>
            Enabled
          </Button>

          <Button
            variant="ghost"
            colorScheme={ExtendsColorEnum["secondary.500"]}
            leftIcon={
              <AddIcon
                h={3}
                w={3}
                color={ExtendsColorEnum["secondary.500"]}
                mr={2}
              />
            }
          >
            Icon Btn
          </Button>
          <Button
            variant="ghost"
            disabled
            leftIcon={
              <AddIcon
                h={3}
                w={3}
                color={ExtendsColorEnum["grayScale.600"]}
                mr={2}
              />
            }
          >
            Disabled
          </Button>
        </SimpleGrid>

        <SimpleGrid
          spacing={10}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <Tooltip label="Default tooltip" placement="bottom">
            <Button colorScheme={"gray"}>Default tooltip</Button>
          </Tooltip>

          <Tooltip label={renderTooltipContent()} placement="bottom">
            <Button colorScheme={"gray"}>Shortcut tooltip</Button>
          </Tooltip>
        </SimpleGrid>

        <Box>
          <Text layerStyle={TextLayerEnum.headlineSm} mb="2rem">
            Demo responsive
          </Text>
          <Box display={{ base: "block", md: "flex" }} maxW="30rem">
            <Text
              layerStyle={TextLayerEnum.titleLg500}
              color={ExtendsColorEnum["secondary.500"]}
              mr={{ md: "2rem" }}
            >
              The heading
            </Text>
            <Text layerStyle={TextLayerEnum.bodyLg400}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              laboriosam, minus provident ex fuga, asperiores veniam magni, est
              temporibus vel explicabo? Inventore optio officiis, necessitatibus
              dolores dolorem quae perspiciatis odit.
            </Text>
          </Box>
        </Box>

        <Text layerStyle={TextLayerEnum.headLineMd} my="1.5rem">
          Logo and demo
        </Text>
        <SimpleGrid
          spacing={8}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
        >
          <FullDarkLogo sx={styles.logo} />
          <FullLightLogo sx={styles.logo} />
          <OriginalLogo sx={styles.logo} />
          <DarkAndBlueLogo sx={styles.logo} />
        </SimpleGrid>

        <SimpleGrid
          spacing={8}
          columns={{ base: 1, sm: 2, md: 4 }}
          bg={boxColor}
          sx={styles.listBtns}
          justifyItems={"center"}
        >
          <DarkCircleOriginLogo sx={styles.logoSymbol} />
          <DarkSquareOriginLogo sx={styles.logoSymbol} />
          <DarkCircleWhiteLogo sx={styles.logoSymbol} />
          <DarkSquareWhiteLogo sx={styles.logoSymbol} />

          <OriginSquareWhiteLogo sx={styles.logoSymbol} />
          <OriginCircleWhiteLogo sx={styles.logoSymbol} />
          <WhiteSquareDarkLogo sx={styles.logoSymbol} />
          <WhiteCircleDarkLogo sx={styles.logoSymbol} />
        </SimpleGrid>
      </DisplayContainer>

      <DisplayContainer isFluid mb="1.5">
        <Text layerStyle={TextLayerEnum.bodyLg400}>
          This is the fluid text. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Fugit impedit iure quam ex, porro quae rem? Sint
          accusamus odit, dolor facere ducimus quo. Voluptatem reprehenderit
          numquam alias asperiores incidunt molestiae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Perferendis assumenda rem iure,
          reiciendis quis, ducimus possimus similique iusto quod atque nihil ea
          laudantium quae tenetur! Asperiores nihil error ut optio.
        </Text>
      </DisplayContainer>

      <DisplayContainer>
        <Text layerStyle={TextLayerEnum.bodyLg400}>
          This is safe text. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Fugit impedit iure quam ex, porro quae rem? Sint accusamus odit,
          dolor facere ducimus quo. Voluptatem reprehenderit numquam alias
          asperiores incidunt molestiae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates vero deserunt cum cumque inventore,
          voluptatum corrupti? Ex harum ullam excepturi maxime nam odit non
          eveniet debitis! Aliquam, tempore officia. Porro?
        </Text>
      </DisplayContainer>
    </Box>
  );
};
