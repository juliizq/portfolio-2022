import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Title from "../shared/Title";
import StackItem from "./StackItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Technolgies() {
  const el1 = useRef(null);

  useEffect(() => {
    const els = [el1.current];
    const tween = gsap.fromTo(
      els,
      {
        x: 500,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        trigger: ".trigger",
        skewY: 3,
        stagger: 0.3,
      },
      {
        scrollTrigger: {
          trigger: ".trigger",
          // markers: true,
          // start: "top center",
          end: "center center-=100",
          scrub: true
        },
        x: 0,
        y: 0,
        duration: 2,
        ease: "power2.out",
        opacity: 1,
        skewY: 0,
        stagger: 0.3,
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <Flex
      flexDirection={"column"}
      flex={["4"]}
      gap={["3"]}
      className={"trigger"}
      ref={el1}
    >
      <Title child="stacks" />
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={["3"]}
        ml={["10px", "20px", "30px"]}
      >
        <StackItem bgColor="red" child="FIGMA" />
        <Flex>
          <StackItem bgColor="turquoise" child="REACT" />
          <StackItem bgColor="lila" child="ANGULAR" />
        </Flex>
        <Flex>
          <StackItem bgColor="pink" child="TYPESCRIPT" />
          <StackItem bgColor="green" child="JAVASCRIPT" />
        </Flex>
        <Flex>
          <StackItem bgColor="blue" child="PRIMENG" />
          <StackItem bgColor="red" child="CHACKRA UI" />
        </Flex>
        <Flex>
          <StackItem bgColor="turquoise" child="CSS" />
          <StackItem bgColor="lila" child="SASS" />
          <StackItem bgColor="pink" child="HTML" />
        </Flex>
        <StackItem bgColor="green" child="GIT" />
      </Flex>
    </Flex>
  );
}
