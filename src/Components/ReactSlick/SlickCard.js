import React from "react";

import { Box } from "@chakra-ui/react";

import dhShop from "../../assets/dh-shop.png";

const SlickCard = () => {
  return (
    <Box
    m='0 1rem'
      bg="goldenrod"
      // padding="2rem"
      min-height="20rem"
      maxW="20rem"
      borderRadius="4px"
    >
      <img src={dhShop} alt="dh shop" />
      {/* <h1>Hello</h1> */}
    </Box>
  );
};

export default SlickCard;
