import React from "react";

import { Box } from "@chakra-ui/react";

const SlickCard = (props) => {
  return (
    <Box height="50vh" maxW="25rem" mr="1rem">
      <img
        src={props.img}
        alt="dh shop"
        style={{ height: "100%", width: "100%" }}
      />
    </Box>
  );
};

export default SlickCard;
