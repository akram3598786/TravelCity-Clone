import {
    Grid,
    GridItem,
    Button,
    Heading,
    Stack,
    Text,
    Divider,
    Flex,
    Box,
    Spacer,
    Image,
    Link
  } from "@chakra-ui/react";
  import { CheckIcon } from "@chakra-ui/icons";
  const Grid1 = () => {
    return (
      <Grid
        h="850px"
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(16, 1fr)"
        X
        gap={4}
        bg="#ebf0f5"
      >
        <GridItem
          rowSpan={2}
          colStart={2}
          colSpan={9}
          bg="white"
          border="o.1px"
          borderRadius="7px"
          p="10px"
        >
          <Button colorScheme="teal" size="xs">
            Great Deal
          </Button>
          <Heading as="h3" size="lg">
            Economy
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="sm">Kia Rio or similar</Text>
          </Stack>
          <Flex>
            <Box p="4" bg="white">
            <Stack direction='row'>
             <Image
              boxSize='20px'
              src='https://cdn-icons-png.flaticon.com/512/456/456212.png'
               alt='Dan Abramov'
                />
                <Text fontSize="s">5 Passengers</Text>
              </Stack>
              <Stack direction='row'>
             <Image
              boxSize='20px'
              src='https://cdn-icons-png.flaticon.com/128/5557/5557951.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm">Air Conditioning</Text>
              </Stack>
              <Stack direction='row'>
             <Image
              boxSize='20px'
              src='https://cdn.iconscout.com/icon/premium/png-64-thumb/mileage-3914779-3256309.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm"> <Text fontSize="sm">Unlimited mileage</Text></Text>
              </Stack>
              <Link color='teal.500' href='#'>
                 See More
                </Link>
            </Box>
            <Spacer />
            <Box p="4" bg="white">
            <Stack direction='row'>
             <Image
              boxSize='20px'
              src='https://cdn.iconscout.com/icon/premium/png-64-thumb/car-door-3-971233.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm">4 Doors</Text>
              </Stack>
              <Stack direction='row'>
             <Image
              boxSize='20px'
              src='https://cdn.iconscout.com/icon/premium/png-64-thumb/car-door-3-971233.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm">Automatic</Text>
              </Stack>
              <Stack direction='row'>
             <Image
              boxSize='20px'
              src='https://cdn.iconscout.com/icon/premium/png-128-thumb/fuel-pump-1712365-1452682.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm">Fuel info: full to full</Text>
              </Stack>
              <Link color='teal.500' href='#'>
                 See More
                </Link>
            </Box>
            <Spacer />
            <Box p="4">
            <Image
                src="https://mediaim.expedia.com/cars/39/722c5046-97ee-4c11-a3da-564eb67c8e9c.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165"
                alt="Dan Abramov"
              />
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colStart={11}
          colSpan={5}
          bg="white"
          border="o.1px"
          borderRadius="7px"
          p="20px"
        >
          <Heading as="h3" size="lg">
            $59 per day
          </Heading>
          <Stack spacing={3}>
            <Text fontSize="sm">Free cancellation</Text>
            <Text fontSize="sm">Pay at pick-up</Text>
            <Text fontSize="sm">Reserve with a card and save</Text>
          </Stack>
          <Divider orientation="horizontal" mt="20px" mb="20px" />
          <Heading as="h6" size="xs">
            Additional benefits with this car rental
          </Heading>
          <CheckIcon mr="5px" />
          <span>Online check-in</span>
        </GridItem>
        <GridItem
          colStart={2}
          colSpan={9}
          bg="white"
          border="o.1px"
          borderRadius="7px"
          pl="10px"
        >
          <Heading as="h1" size="md">
            Customer recommendations
          </Heading>
          <Flex mt="20px">
            <Box w="450px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">58% recommend</Text>
                <Text fontSize="sm">
                  Liked for friendly customer service and convenient pick-up
                  location
                </Text>
              </Stack>
            </Box>
            <Spacer />
            <Box w="80px" h="10">
              <Image
                src="https://mediaim.expedia.com/cars/logos/ZD.png"
                alt="Dan Abramov"
                boxSize="40px"
              />
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={4}
          colStart={11}
          colSpan={5}
          bg="white"
          border="o.1px"
          borderRadius="7px"
          p="20px"
        >
          <Heading as="h4" size="md">
            Price Details
          </Heading>
          <Heading as="h6" size="xs" mt="15px">
            Pay at pick-up
          </Heading>
          <Flex mt="20px">
            <Box w="140px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">Car rental fee x 1 day $59.15 per day</Text>
              </Stack>
            </Box>
            <Spacer />
            <Box w="80px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">$59.15</Text>
              </Stack>
            </Box>
          </Flex>
          <Flex mt="20px">
            <Box w="140px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">Taxes and fees</Text>
              </Stack>
            </Box>
            <Spacer />
            <Box w="80px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">$19.42</Text>
              </Stack>
            </Box>
          </Flex>
          <Divider orientation="horizontal" mt="20px" mb="20px" />
          <Flex mt="20px">
            <Box w="140px" h="10">
              <Heading as="h4" size="md">
                TOTAL
              </Heading>
            </Box>
            <Spacer />
            <Box w="80px" h="10">
              <Heading as="h4" size="md">
                $78.57
              </Heading>
            </Box>
          </Flex>
          <Flex mt="20px">
            <Box w="140px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">Pay at pick-up</Text>
              </Stack>
            </Box>
            <Spacer />
            <Box w="80px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">$78.57</Text>
              </Stack>
            </Box>
          </Flex>
          <Flex mt="20px">
            <Box w="140px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">$78.57</Text>
              </Stack>
            </Box>
            <Spacer />
            <Box w="80px" h="10">
              <Stack spacing={3}>
                <Text fontSize="sm">$0.00</Text>
              </Stack>
            </Box>
          </Flex>
          <Button colorScheme="blue" size="lg" pr="150px" pl="150px">
            Button
          </Button>
        </GridItem>
        <GridItem
          colStart={2}
          colSpan={9}
          bg="white"
          border="o.1px"
          borderRadius="7px"
          pl="10px"
        >
          <Flex mt="20px">
            <Box w="140px" h="10">
              <Image
                src="https://a.travel-assets.com/travel-assets-manager/cars-messaging-cards-illustrations/calendar_shield.svg"
                alt="Dan Abramov"
                boxSize="40px"
              />
            </Box>
            <Spacer />
            <Box w="1700px" h="10">
              <Heading as="h6" size="xs">
                Free cancellation
              </Heading>
              <Text fontSize="sm">
                Lock in this price today, cancel free of charge anytime. Reserve
                now and pay at pick-up.
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={3}
          colStart={2}
          colSpan={9}
          bg="white"
          border="o.1px"
          borderRadius="7px"
          pl="10px"
          height={"300px"}
        >
          <Heading as="h4" size="md" pt="20px">
            Car rental location
          </Heading>
          <Flex mt="15px">
            <Box p="4" bg="white" w="300px">
              <Heading as="h5" size="sm">
                Pick-Up
              </Heading>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='20px'
              src='https://cdn.iconscout.com/icon/free/png-64/event-1782441-1512350.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm">Sun, Sep 18, 10:30am</Text>
              </Stack>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='20px'
              src='https://img.icons8.com/ios/2x/airport.png'
               alt='Dan Abramov'
                />
                 <Text fontSize="sm">
                DAL Airport 8008 Herb Kelleher Way, Dallas, Texas, USA 75235
              </Text>
              </Stack>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='20px'
              src='https://img.icons8.com/pastel-glyph/344/clock--v4.png'
               alt='Dan Abramov'
                />
                 <Text fontSize="sm">Hours of operation6:00am - 11:59pm</Text>
              </Stack>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='30px'
              src='https://img.icons8.com/sf-black-filled/2x/car.png'
               alt='Dan Abramov'
                />
                 <Text fontSize="sm">
                Counter and car in terminal Rental car counter and car in the
                airport.
              </Text>
              </Stack>
            </Box>
            <Spacer />
            <Box p="4" bg="white">
              <Heading as="h5" size="sm">
                Drop-Up
              </Heading>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='20px'
              src='https://cdn.iconscout.com/icon/free/png-64/event-1782441-1512350.png'
               alt='Dan Abramov'
                />
                <Text fontSize="sm">Sun, Sep 18, 10:30am</Text>
              </Stack>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='20px'
              src='https://img.icons8.com/ios/2x/airport.png'
               alt='Dan Abramov'
                />
                 <Text fontSize="sm">
                DAL Airport 8008 Herb Kelleher Way, Dallas, Texas, USA 75235
              </Text>
              </Stack>
              <Stack direction='row' mt="10px">
             <Image
              boxSize='20px'
              src='https://img.icons8.com/pastel-glyph/344/clock--v4.png'
               alt='Dan Abramov'
                />
                 <Text fontSize="sm">Hours of operation6:00am - 11:59pm</Text>
              </Stack>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    );
  };
  
  export { Grid1 };