import Head from "next/head";
import { useRouter } from "next/router";
import { Center, Text, Button, VStack, Box } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function NotFoundPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="title" content={t("page-not-found")} />
        <title>{t("page-not-found")}</title>
      </Head>
      <Center h="100vh">
        <VStack>
          <Text as={"b"} fontSize="5xl" color="#dc3545">
            {t("page-not-found-title")}
          </Text>
          <Text as="samp" fontSize="xl">
            {t("page-not-found-description")}
          </Text>
          <Box>
            <Button
              ml="3px"
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"blue.400"}
              href={"/"}
              onClick={() => {
                router.replace("/");
              }}
              size="sm"
              _hover={{
                bg: "blue.300",
              }}
            >
              {t("go-home")}
            </Button>
          </Box>
        </VStack>
      </Center>
    </>
  );
}
