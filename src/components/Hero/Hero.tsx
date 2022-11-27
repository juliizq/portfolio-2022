import React, { useEffect, useRef } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import gsap from "gsap";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import arrowAnimation from "../../assets/arrowAnimation.json";

export default function Hero() {
  const [t, i18n] = useTranslation("global");
  const tl = gsap.timeline({ delay: 1 });
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);
  const el5 = useRef(null);
  const el6 = useRef(null);
  const el7 = useRef(null);
  useEffect(() => {
    const els = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current,
      el6.current,
      el7.current,
    ];
    const tween = gsap.fromTo(
      els,
      {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 2,
        skewY: 10,
        stagger: 0.4,
      },
      {
        x: 0,
        y: 0,
        duration: 2,
        opacity: 1,
        skewY: 0,
        ease: "power4.out",
        stagger: 0.4,
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <Center flexDirection={"column"} h={"100%"}>
      <Flex zIndex={"10"}>
        <Text
          className="text"
          color={"black"}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl", xl: "8xl" }}
        >
          <span ref={el1}>{t("hero.code")}</span>
          <span ref={el2}>&nbsp;{t("hero.and")}</span>&nbsp;
          <span ref={el3} className={"underline"}>
            {t("hero.design")}
          </span>
          <br />
          <span ref={el4}>{t("hero.create")}</span>
          <span ref={el5}>&nbsp;{t("hero.and")}</span>&nbsp;
          <span ref={el6} className={"underline"}>
            {t("hero.develop")}
          </span>
        </Text>
      </Flex>
      <Box
        ref={el7}
        position={"absolute"}
        bottom={["10%", "20%", "10%", "0"]}
        left={["30%", "30%", "20%", "18%"]}
        w={["10rem", "10rem", "14rem", "18rem"]}
      >
        <Lottie animationData={arrowAnimation} loop={true} />
      </Box>
    </Center>
  );
}
