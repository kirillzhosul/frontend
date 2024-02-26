import { ContactForm } from "@/features/contact";
import { Header } from "@/shared/ui/layouts/header/header";
import { FormPageLayout } from "@/shared/ui/layouts/form-page/form-page-layout";
import { HeaderRightContent } from "@/shared/ui/layouts/header/header-right-content";

export function ContactPage() {
  return (
    <FormPageLayout
      header={<Header rightContent={<HeaderRightContent />} />}
      form={<ContactForm />}
      title="Contact or request me"
    />
  );
}
