import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeaderRightContent } from "@/shared/ui/ui-header-right-content";

export function HomePage() {
  return (
    <UiFormPageLayout
      header={<UiHeader rightContent={<UiHeaderRightContent />} />}
      form={<div>Sorry, but this page is currently under construction</div>}
      title="Welcome there!"
    />
  );
}
