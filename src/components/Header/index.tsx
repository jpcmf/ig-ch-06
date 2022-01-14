import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        w="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <Flex as="a" cursor="pointer">
              <Icon as={RiArrowLeftSLine} fontSize={["20", "40"]} />
            </Flex>
          </Link>
        )}
        <Image
          src="/logo.svg"
          alt="Worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
