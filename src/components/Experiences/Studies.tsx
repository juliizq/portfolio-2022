import { Box } from "@chakra-ui/react";
import { Chrono } from "react-chrono";
import { useTranslation } from "react-i18next";
import CardStudies from "./CardStudies";
import "./Chrono.css";

export default function Studies() {
  const [t, i18n] = useTranslation("global");

  return (
    <Box>
      <Chrono
        items={[
          {
            title: "01/2022 - 07/2022",
          },
          {
            title: "2021",
          },
          {
            title: "< 2020",
          },
        ]}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: "black",
          secondary: "primary",
          titleColor: "black",
          titleColorActive: "#5C2DFF",
        }}
        cardHeight={50}
        hideControls
      >
        <CardStudies
          title="TECHNOFUTUR TIC"
          where={t("studies.belgium")}
          body={t("studies.web-app")}
          align={"end"}
        />
        <Box>
          <CardStudies
            title="LINKEDIN"
            where="Online"
            body={t("studies.git-hub")}
            align={"start"}
          />
          <CardStudies
            title="FREECODECAMP"
            where="Online"
            body={t("studies.javascript")}
            align={"start"}
          />
          <CardStudies
            title="TECHNOFUTUR TIC"
            where={t("studies.charleroi-belgium")}
            body={t("studies.courses-technofutur")}
            align={"start"}
          />
        </Box>
        <CardStudies
          title="CONVIERTE MÁS"
          where="Online"
          body={t("studies.courses-convierte")}
          align={"end"}
        />
      </Chrono>
    </Box>
  );
}
