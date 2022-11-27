import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Title from "../shared/Title";
import StackItem from "./StackItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Interest() {
  const [t, i18n] = useTranslation("global");
  const el1 = useRef(null);

  useEffect(() => {
    const els = [el1.current];
    const tween = gsap.fromTo(
      els,
      {
        x: -500,
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
          scrub: true,
          end: "center center-=100"
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
      alignItems={["flex-end"]}
      justifyContent={["flex-end"]}
      className={"trigger"}
      ref={el1}
    >
      <Title child={t("stacks.interests")} />
      <Flex
        flexDirection={"column"}
        alignItems={"flex-end"}
        gap={["3"]}
        mr={["10px", "20px", "30px"]}
      >
        <StackItem bgColor="blue" child={t("stacks.animations")} />
        <StackItem bgColor="lila" child={t("stacks.graphic")} />
        <StackItem bgColor="green" child={t("stacks.responsive")} />
      </Flex>
    </Flex>
  );
}
