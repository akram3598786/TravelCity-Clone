import { Link } from "@chakra-ui/react";
import { ArrowForwardIcon,CheckIcon,ArrowDownIcon,ExternalLinkIcon} from "@chakra-ui/icons";
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
    Checkbox,
    Select
  } from "@chakra-ui/react";

const Grid2=()=>{
    return (
        <>
        <Grid
        h="150px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(16, 1fr)"
        X
        gap={4}
        pt="20px"
        bg="#f0f8fb"
      >
        <GridItem  rowSpan={2}
        colStart={2}
        colSpan={9}
        bg="white"
        border="o.1px"
        borderRadius="7px"
        p="10px"
        mt={"-60px"}>
         <Heading as='h4' size='md'>
         Cleaning and safety practices
         </Heading>
         <Flex>
          <Text fontSize="sm" mt="15px">Information provided by Budget</Text>
          <Spacer />
          <Image
              src="https://c.travel-assets.com/static/cars/cleanliness/Sanitize_Budget_Zd.png"
             w="100px"/>
          </Flex>
          <Link color="teal.500" href="#">
          See Details
          <ArrowForwardIcon/>
         </Link>
        </GridItem>
        <GridItem
        rowSpan={2}
        colStart={11}
        colSpan={5}
        bg="white"
        border="o.1px"
        borderRadius="7px"
        p="10px"
        height={"100px"}
        marginTop={"-120px"} >
         <Flex>
        <Box p='3' borderRadius={"50%"} alignItems={"center"} bg={"white"}>
        <Stack direction='row'>
        <Image
          boxSize='40px'
            objectFit='cover'
          src='https://cdn-icons-png.flaticon.com/128/2107/2107783.png'
          alt='Dan Abramov'
          height={"30px"}
           width={"30px"}/>
          </Stack>
         </Box>
        <Spacer />
        <Box p='4' bg='white' width={"500px"}>
        <Heading as='h6' size='xs'>
           Great Deal
        </Heading>
        <Text fontSize='xs'>This car is $11 cheaper than the average car in Economy category on our website.</Text>
        </Box>
        </Flex>
      </GridItem>
      </Grid>
      <Grid
      h="230px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(16, 1fr)"
      X
      gap={4}
      pt="20px"
      bg="#f0f8fb"
    >
      <GridItem  rowSpan={1}
      colStart={2}
      colSpan={9}
      bg="white"
      border="o.1px"
      borderRadius="7px"
      p="10px">
       <Heading as='h4' size='md'>
       Protect your rental car at $12 per rental day
       </Heading>
       <Flex>
         <Box>
         <Text fontSize="sm" mt="15px"><CheckIcon/>Information provided by Budget</Text>
        <Text fontSize="sm" mt="15px"><CheckIcon/>Information provided by Budget</Text>
         </Box>
        <Spacer />
        <Image
            src="https://a.travel-assets.com/egds/illustrations/uds-default/shield__xsmall.svg"
           w="70px"/>
        </Flex>
        <Link color="teal.500" href="#" mt="25px">
         What is $0 deducation
        <ArrowForwardIcon/>
       </Link>
       <Divider orientation="horizontal" mt="15px" mb="15px" />
       <Text fontSize="sm" mt="15px"><CheckIcon/>Interested? Just add it on the next step.</Text>
      </GridItem>
    </Grid>
    <Heading as='h3' size='lg' pl="90px" pt="20px" bg="#f0f8fb">
     Rental policy
  </Heading>
  <Grid
        h="100px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(16, 1fr)"
        X
        gap={4}
        pt="20px"
        bg="#f0f8fb"
      >
       <GridItem  rowSpan={1}
        colStart={2}
        colSpan={9}
        bg="white"
        border="o.1px"
        borderRadius="7px"
        p="10px"> 
          <Flex>
         <Box>
         <Heading as='h5' size='sm'>
           Cancillation and no show-policy
         </Heading>
         <Text fontSize="sm" mt="15px">Free Cancillation Up to Pick Up</Text>
         </Box>
        <Spacer />
           <Link>
           <ArrowDownIcon/>
           </Link>
        </Flex>
        </GridItem>
   </Grid>
   <Grid
        h="100px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(16, 1fr)"
        X
        gap={4}
        pt="20px"
        bg="#f0f8fb"
        mb="20px"
      >
       <GridItem  rowSpan={1}
        colStart={2}
        colSpan={9}
        bg="white"
        border="o.1px"
        borderRadius="7px"
        p="10px"> 
          <Flex>
         <Box>
         <Heading as='h5' size='sm'>
           Age Surge
         </Heading>
         <Text fontSize="sm" mt="15px">Applicable for Drivers Under 25</Text>
         </Box>
        <Spacer />
           <Link>
           <ArrowDownIcon/>
           </Link>
        </Flex>
        </GridItem>
   </Grid>
  <Heading as='h6' size='xs' bg="#f0f8fb" mt="-20px" pt="20px" pl="90px">
  <Link href='https://chakra-ui.com' isExternal color="blue"  bg="#f0f8fb" mt="85px">
      View rules and restrictions <ExternalLinkIcon mx='2px' />
    </Link>
  </Heading>
   <Box bg='#f0f8fb' w='100%' p={4} color='white' textAlign={"center"}>
   <Text fontSize='md' textColor={"black"}>(xs) In love with React & Next</Text>
   <Button colorScheme='teal' size='md' bg={"white"} textColor={"blue"} pt="10px" pb={"10px"}>
    Share Feedback
  </Button>
   </Box>
   <Grid
      h="325px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(16, 1fr)"
       gridGap={"0px"}
      bg="#f0f8fb"
    >
     <GridItem
        colStart={2}
        colSpan={5}
        bg="white"
        border="o.1px"
        borderRadius="7px"
      >
        <Box boxSize='sm'>
        <Image src='https://a.travel-assets.com/mad-service/footer/marquee/TVLY_App_Footer_v1.jpg' h="325px" alt='Dan Abramov' w="450px"/>
        </Box>
      </GridItem>
      <GridItem
        colStart={7}
        colSpan={9}
        bg="white"
        border="o.1px"
        borderRadius="7px"
      >
        <Flex>
         <Box p='4' bg='white'>
          <Heading as='h4' size='lg' fontSize={"25px"}>
          Wander Wisely with the Travelocity app
           </Heading>
           <Text fontSize='sm' mt="20px"><CheckIcon mr="10px"/>Get helpful alerts about flight status and gate numbers</Text>
           <Text fontSize='sm' mt="10px"><CheckIcon mr="10px"/>Access all your travel details, even when offline</Text>
           <Text fontSize='sm' mt="10px"><CheckIcon mr="10px"/> Easily contact your hotel by messaging them right in the app</Text>
           <Heading as='h4' size='md' mt="25px">
           Text yourself a download link
           </Heading>
           <Flex mt="15px">
            <Select placeholder='Select option' w="140px" border={"1px"} borderColor={"black"} bg={"white"}>
           <option value='option1'>Option 1</option>
           <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
           </Select>
            <Spacer />
            <Button w="140px" border={"1px"} bg="white">Phone Number</Button>
            <Spacer />
            <Button w="140px" border={"0.1px"} bg={"#1130bd"} textColor={"white"}>Get The App</Button>
           </Flex>
           <Text fontSize='xs' mt="20px">By providing your number, you agree to receive a one-time automated text message with a link 
           to get the app. Standard text message rates may apply.</Text>
         </Box>
         <Spacer />
         <Box p='4' bg='white'>
         <Image src='https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_travelocity.png' w="250px" height={"200px"} alt='Dan Abramov' />
         <Heading as='h6' size='xs' mt="5px" ml="13px">
           Scan A QR Code
         </Heading>
        </Box>
        </Flex>
      </GridItem>
    </Grid>
    </>
    )
}
export default Grid2;