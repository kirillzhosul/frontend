import { Header } from "@/shared/ui/layouts/header/header";
import { FormPageLayout } from "@/shared/ui/layouts/form-page/form-page-layout";
import { HeaderRightContent } from "@/shared/ui/layouts/header/header-right-content";
import { Link } from "@/shared/ui/components/link/link";

export function HomePage() {
  return (
    <FormPageLayout
      header={<Header rightContent={<HeaderRightContent />} />}
      form={
        <div>
          <p>Sorry, but this page is currently under construction </p>
          <hr />
          <p>
            Built with <u>Next.js</u>, <u>FSD</u>, <u>Tailwind CSS</u>
          </p>
          <p>
            <Link href="/ui-kit">UI-kit</Link>
          </p>
          <p>
            <Link href="https://github.com/kirillzhosul/web">GitHub</Link>
          </p>
        </div>
      }
      title="Welcome there!"
    />
  );
}
