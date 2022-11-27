import { Flex } from "@chakra-ui/react";
import React from "react";
import Interest from "./Interest";
import Technolgies from "./Technolgies";

export default function Stacks() {
  return (
    <Flex flexDirection={["column", "row", "row"]}>
      <Technolgies />
      <Interest />
    </Flex>
  );
}
