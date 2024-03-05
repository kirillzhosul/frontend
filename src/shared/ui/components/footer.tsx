import clsx from "clsx";
import { ButtonLink } from ".";
import { AR_One_Sans } from "next/font/google";

const logoFont = AR_One_Sans({ weight: "700", subsets: ["latin"] });

export function Footer() {
  return (
    <footer className="shadow bg-gray-900 mt-10">
      <div className="max-w-screen-xl mx-auto p-4 py-8">
        <div className="flex items-center justify-between">
          <ButtonLink
            href="/"
            variant="linkAnimated"
            size="xl"
            className={clsx(
              "text-bold text-white hover:text-gray-300",
              logoFont.className,
            )}
          >
            Kirill Zhosul
          </ButtonLink>
          <ul className="flex">
            <li>
              <ButtonLink
                href="/"
                variant="link"
                className="text-gray-500 hover:underline me-4"
              >
                Home page
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                href="mailto: admin@kirillzhosul.ru"
                variant="link"
                className="text-gray-500 hover:underline me-4"
              >
                Contact Admin
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                href="/privacy"
                variant="link"
                className="text-gray-500 hover:underline me-4"
              >
                Privacy Policy
              </ButtonLink>
            </li>
          </ul>
        </div>
        <hr className="mx-auto border-gray-700 my-5" />
        <span className="block text-sm text-gray-500 text-center">
          <p>
            Powered by Next.js and Nginx, source code is available{" "}
            <ButtonLink
              href="https://github.com/kirillzhosul/frontend"
              variant="link"
              className="text-white"
            >
              here
            </ButtonLink>
          </p>
          <p className="mt-2">© 2024 Kirill Zhosul. All Rights Reserved.</p>
        </span>
      </div>
    </footer>
  );
}
