import { Button } from "@/shared/ui/components/button/button";
import { Link } from "@/shared/ui/components/link/link";

export function AuthForm() {
  return (
    <div>
      Authentication is made via Florgon SSO, so please continue with Florgon!
      <p className="text-rose-500 py-5">
        Sorry, but that feature is currently under maintenance! Please return
        later...
      </p>
      <Link href="/sso-callback">
        <Button variant="primary" disabled>
          Authenticate with Florgon
        </Button>
      </Link>
    </div>
  );
}
