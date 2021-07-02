import React from "react";

import { Box } from "@chakra-ui/react";

import dhShop from "../../assets/dh-shop.png";

const SlickCard = () => {
  return (
    <Box
      bg="goldenrod"
      // padding="2rem"
      min-height="20rem"
      maxW="20rem"
      borderRadius="4px"
    >
      <img src={dhShop} alt="dh shop" />
    </Box>
  );
};

export default SlickCard;
