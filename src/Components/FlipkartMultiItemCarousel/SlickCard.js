import React from "react";

import { Box } from "@chakra-ui/react";

const SlickCard = (props) => {
  return (
    <Box height="80vh" w="100%" mr="1rem">
      <Box mr="1rem" height="80vh" width="100%">
        <img
          src={props.img}
          alt="dh shop"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default SlickCard;
