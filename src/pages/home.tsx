/**
 * Home page
 */

import { ButtonLink } from "@/shared/ui/components";
import clsx from "clsx";

/**
 * Bubble circle
 */
function Bubble({ size, className }: { size: number; className: string }) {
  return (
    <div
      className={clsx("absolute animate-pulse", className)}
      style={{
        borderRadius: "100%",
        width: size,
        height: size,
        zIndex: -1,
      }}
    ></div>
  );
}
export function HomePage() {
  return (
    <main className="pt-8">
      <section className="flex flex-col mx-[20vw] gap-1  mt-[25vh]">
        <div className="text-blue-600">Hey There 👋 I am</div>
        <div className="text-4xl">
          <b>Kirill Zhosul</b>
        </div>
        <div>
          <span className="text-gray-500">Professional</span>{" "}
          <b>Backend Developer </b>
        </div>
        <div className="text-gray-500 max-w-[50%] mt-[1vh]">
          This page is currently under construction, so please come back a bit
          later! For now you can find my contacts below!
        </div>
        <div className="mt-[2vh]">
          <ButtonLink
            href="https://t.me/kirillzhosul"
            size="sm"
            variant="primary"
          >
            Telegram
          </ButtonLink>
          <ButtonLink
            href="https://github.com/kirillzhosul"
            size="sm"
            variant="secondary"
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            href="mailto: kirillzhosul@florgon.com"
            size="sm"
            variant="secondary"
          >
            E-mail
          </ButtonLink>
          <ButtonLink
            href="https://github.com/kirillzhosul"
            size="sm"
            variant="secondary"
            disabled
          >
            CV
          </ButtonLink>
        </div>
      </section>
      <Bubble size={700} className="top-[0px] right-[500px] bg-blue-50" />
      <Bubble size={700} className="top-[300px] right-[1200px] bg-green-50" />
      <Bubble size={500} className="top-[400px] right-[100px] bg-red-50" />
    </main>
  );
}
