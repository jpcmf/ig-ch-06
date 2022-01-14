import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Separator from "../components/Separator";
import Slider from "../components/Slider";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <div>
      <Flex direction="column">
        <Header />
        <Banner />
        <TravelTypes />
        <Separator />
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
        <Slider />
      </Flex>
    </div>
  );
}
