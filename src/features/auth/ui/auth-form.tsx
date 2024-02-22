import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";

export function AuthForm() {
  return (
    <div>
      Authentication is made via Florgon SSO, so please continue with Florgon!
      <p className="text-rose-500 py-5">
        Sorry, but that feature is currently under maintenance! Please return
        later...
      </p>
      <UiLink href="/sso-callback">
        <UiButton variant="primary" disabled>
          Authenticate with Florgon
        </UiButton>
      </UiLink>
    </div>
  );
}
