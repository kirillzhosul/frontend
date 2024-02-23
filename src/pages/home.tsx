import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeaderRightContent } from "@/shared/ui/ui-header-right-content";
import { UiLink } from "@/shared/ui/ui-link";

export function HomePage() {
  return (
    <UiFormPageLayout
      header={<UiHeader rightContent={<UiHeaderRightContent />} />}
      form={
        <div>
          <p>Sorry, but this page is currently under construction </p>
          <hr />
          <p>
            Built with <u>Next.js</u>, <u>FSD</u>, <u>Tailwind CSS</u>
          </p>
          <p>
            <UiLink href="/ui-kit">UI-kit</UiLink>
          </p>
          <p>
            <UiLink href="https://github.com/kirillzhosul/web">GitHub</UiLink>
          </p>
        </div>
      }
      title="Welcome there!"
    />
  );
}
