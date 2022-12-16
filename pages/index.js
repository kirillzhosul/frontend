import Footer from "../components/footer";
import SidebarWithHeader from "../components/sidebar";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";

import React, { ReactNode } from "react";
import { Center, Container, HStack } from "@chakra-ui/react";

export default function Home() {
  const { t, lang } = useTranslation("common");

  return (
    <SidebarWithHeader>
      {/*<div className="bc-logo bc-logo-userpic">
          <Image
            style={{ borderRadius: "80px" }}
            className="bc-logo-image"
            src="https://avatars.githubusercontent.com/u/79853674"
            width="80"
            height="80"
            alt="avatar"
          />
        </div>*/}
      <Container maxW="full" centerContent overflow="hidden">
        <Center h="88vh">
          <HStack>
            <b>
              <i>{t("about-me-text")}</i>
            </b>
          </HStack>
        </Center>
      </Container>
    </SidebarWithHeader>
  );
}
