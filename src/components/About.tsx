import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [t, i18n] = useTranslation("global");
  const tl = gsap.timeline();
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);
  const el5 = useRef(null);
  const el6 = useRef(null);
  const el7 = useRef(null);
  const el8 = useRef(null);

  useEffect(() => {
    const els = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current,
      el6.current,
      el7.current,
      el8.current,
    ];
    const tween = gsap.fromTo(
      els,
      {
        y: 100,
        opacity: 0,
        ease: "power1.out",
        duration: 1,
        skewY: 10,
        stagger: 0.3,
      },
      {
        scrollTrigger: els,
        x: 0,
        y: 0,
        duration: 1,
        opacity: 1,
        skewY: 0,
        ease: "power1.out",
        stagger: 0.3
      }
    );

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <Flex
      p={["0 5%", "0 7%", "0 10%"]}
      flexDirection={["column"]}
      justifyContent={["center"]}
      textAlign={"center"}
      position={"relative"}
    >
      <Text
        mt={["10px"]}
        fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
        lineHeight={["1.3rem", "1.4rem", "1.7rem", "1.9rem", "2.3rem"]}
        whiteSpace={"pre-wrap"}
      >
        <span ref={el1}>{t("about.years")}</span>
        <br />
        <span ref={el2}>
          {t("about.from")}
          {t("about.argentina")}
        </span>
        <br />
        <span ref={el3}>{t("about.currently")}</span>
        <br />
        <br />
        <span ref={el4}>{t("about.thanks-to")}</span>
        <br />
        <br />
        <span ref={el5}>{t("about.content-creator")}</span>
        <br />
        <br />
        <span ref={el6}>{t("about.code-design")}</span>
        <br />
        <br />
        <span ref={el7}>{t("about.languages")}</span>
        <br />
        <br />
        <span ref={el8}>{t("about.work-motivation")}</span>
      </Text>
    </Flex>
  );
}
