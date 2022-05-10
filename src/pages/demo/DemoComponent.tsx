import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import {AddIcon} from '@chakra-ui/icons'
import { styles } from "./styles"
import { ExtendsColorEnum } from "theme/colors/interfaces"
import { ExtendVariantEnum } from "theme/components/interfaces"

export const DemoComponent = () => {

	return(
		<Box >
			<SimpleGrid spacing={4} columns={4} bg="gray.100" sx={styles.listBtns}>
				<Button colorScheme={'blue'}>Enabled</Button>
				<Button colorScheme={'blue'} disabled>Disabled</Button>
			</SimpleGrid>

			<SimpleGrid spacing={4} columns={4} bg="gray.100" sx={styles.listBtns}>
				<Button 
					colorScheme={'blue'} 
					leftIcon={<AddIcon h={4} w={4} color='gray.100' mr={2} />}>
					Icon Btn
				</Button>
				<Button 
					colorScheme={'blue'}
					disabled
					leftIcon={<AddIcon h={4} w={4} color='gray.100' mr={2} />}>
					Disabled
				</Button>
			</SimpleGrid>

			<SimpleGrid spacing={4} columns={4} bg={ExtendsColorEnum["base.700"]} sx={styles.listBtns}>
				<Button variant={ExtendVariantEnum.ghosh}>
					Enabled
				</Button>
				<Button variant={ExtendVariantEnum.ghosh} disabled>
					Enabled
				</Button>
			</SimpleGrid>
		</Box>
	)
}