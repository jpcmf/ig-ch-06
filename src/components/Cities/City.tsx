import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius="4" overflow="hidden">
      <Image src="/londres.png" display="block" w="100%" h="170px" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>
          <Text mt="3" fontSize="md" fontWeight="500" color="gray.500">
            Reino Unido
          </Text>
        </Flex>
        <Image src="/reinounido.png" display="flex" w="30px" h="30px" />
      </Flex>
    </Box>
  );
}
