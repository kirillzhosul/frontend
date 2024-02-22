import { ContactForm } from "@/features/contact";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeaderRightContent } from "@/shared/ui/ui-header-right-content";

export function ContactPage() {
  return (
    <UiFormPageLayout
      header={<UiHeader rightContent={<UiHeaderRightContent />} />}
      form={<ContactForm />}
      title="Contact or request me"
    />
  );
}
