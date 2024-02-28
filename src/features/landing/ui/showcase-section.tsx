import Image from "next/image";

import { Button, ButtonLink } from "@/shared/ui/components";

export function ShowcaseSection() {
  return (
    <div>
      {" "}
      <section id="showcase" className="bg-gray-50 h-[90vh] mt-[5vh]">
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-500 text-2xl mt-[10vh]">Showcase Portfolio</p>
          <p className="text-5xl">
            <b>Recent Works</b>
          </p>
          <p className="text-gray-400 text-md max-w-[20%] mt-5">
            Showcase of some amount of projects to you to see what i`ve already
            done
          </p>
        </div>
        <div className="flex flex-row justify-around h-[55vh] mt-[5vh]">
          <div
            className="max-w-md w-[50%] border rounded-xl border-gray-200 p-10 shadow-xl shadow-gray-300 hover:scale-110 transition-all cursor-pointer hover:shadow-blue-200 hover:p-8 hover:ring ring-blue-100"
            style={{
              zIndex: 2,
            }}
          >
            <ButtonLink href="/" variant="none" className="text-left">
              <Image
                className="rounded-xl"
                src="/showcase1.png"
                alt="test"
                width={1317}
                height={670}
                loading="lazy"
              ></Image>
              <p className="text-2xl mt-5">
                <b>Portfolio Website</b>
              </p>
              <p className="text-gray-400 mt-3 max-w-[20vw]">
                This page that you looking at, place with information about me
                (landing)
              </p>
              <div className="mt-[40%] flex">
                <Button variant="success" size="sm" disabled>
                  Next.js
                </Button>
                <Button variant="primary" size="sm" disabled>
                  Tailwind
                </Button>
              </div>
            </ButtonLink>
          </div>
          <div
            className="max-w-md w-[50%] border rounded-xl border-gray-200 p-10 shadow-xl shadow-gray-300 hover:scale-110 transition-all cursor-pointer hover:shadow-blue-200 hover:p-8 hover:ring ring-blue-100"
            style={{
              zIndex: 2,
            }}
          >
            <ButtonLink href="/" variant="none" className="text-left">
              <Image
                className="rounded-xl"
                src="/showcase2.jpg"
                alt="test"
                width={100}
                height={100}
              ></Image>
              <p className="text-2xl mt-5">
                <b>Florgon</b>
              </p>
              <p className="text-gray-400 mt-3 max-w-[15vw]">
                My own project that combines multiple services for users,
                currently unavailable for some period of time
              </p>
              <div className="text-gray-400 mt-3 max-w-[30vw]">
                <p>What I done</p>
                <u>Error logging service</u>, <u>SSO</u>, <u>OAuth2</u>
              </div>
              <div className="mt-[20%]">
                <div>
                  <Button variant="success" size="sm" disabled>
                    Next.js
                  </Button>
                  <Button variant="primary" size="sm" disabled>
                    Tailwind
                  </Button>
                </div>
                <div className="mt-1">
                  <ButtonLink href="/" variant="primary" size="sm" disabled>
                    Docker
                  </ButtonLink>
                  <ButtonLink href="/" variant="secondary" size="sm" disabled>
                    PostgreSQL
                  </ButtonLink>
                </div>
              </div>
            </ButtonLink>
          </div>
          <div
            className="max-w-md w-[50%] border rounded-xl border-gray-200 p-10 shadow-xl shadow-gray-300 hover:scale-110 transition-all cursor-pointer hover:shadow-blue-200 hover:p-8 hover:ring ring-blue-100"
            style={{
              zIndex: 2,
            }}
          >
            <ButtonLink href="/#contact" variant="none" className="text-left">
              <p className="text-2xl mt-5">
                <b>Place for your project!</b>
              </p>
              <p className="text-gray-400 mt-3 max-w-[15vw]">
                Reach me out and contact about developing project that suits
                your requirements!
              </p>
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
