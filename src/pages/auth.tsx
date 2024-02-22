import { AuthForm } from "@/features/auth";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UiHeaderRightContent } from "@/shared/ui/ui-header-right-content";
export function AuthPage() {
  return (
    <UiFormPageLayout
      header={<UiHeader rightContent={<UiHeaderRightContent />} />}
      form={<AuthForm />}
      title="Authentication"
    />
  );
}
