import Links from "./links";
import PoweredBy from "./poweredBy";

export default function Footer({ lang }) {
  return (
    <>
      <Links />
      <PoweredBy lang={lang} />
    </>
  );
}
