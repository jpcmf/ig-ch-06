import { Grid, GridItem } from "@chakra-ui/react";
import TravelType from "./TravelType";

export default function TravelTypes() {
  return (
    <Grid
      h="100%"
      w="100%"
      mx="auto"
      maxW="1160px"
      align="center"
      justifyContent="space-between"
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(5, 1fr)",
      ]}
      mt={["10", "32"]}
      gap={[1, 5]}
    >
      <GridItem>
        <TravelType icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <TravelType icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelType icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
