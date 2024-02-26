import { AuthForm } from "@/features/auth";
import { Header } from "@/shared/ui/layouts/header/header";
import { FormPageLayout } from "@/shared/ui/layouts/form-page/form-page-layout";
import { HeaderRightContent } from "@/shared/ui/layouts/header/header-right-content";
export function AuthPage() {
  return (
    <FormPageLayout
      header={<Header rightContent={<HeaderRightContent />} />}
      form={<AuthForm />}
      title="Authentication"
    />
  );
}
