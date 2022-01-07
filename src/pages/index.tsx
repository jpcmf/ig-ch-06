import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <div>
      <Flex direction="column">
        <Header />
        <Banner />
        <TravelTypes />
      </Flex>
    </div>
  );
}
