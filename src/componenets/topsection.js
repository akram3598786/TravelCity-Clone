import { Link } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const TopSection = () => {
  return (
    <Link color="teal.500" href="#">
      <ArrowBackIcon />
      See all cars
    </Link>
  );
};

export default TopSection;
