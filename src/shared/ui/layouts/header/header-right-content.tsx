import { Button } from "@ui";
import { Link } from "@ui";
import { ROUTES } from "@/shared/constants";

export function HeaderRightContent() {
  return (
    <div className="flex flex-col-1 gap-2">
      <Link href={ROUTES.home}>
        <Button variant="outlined">Home</Button>
      </Link>
      <Link href={ROUTES.showcase}>
        <Button variant="primary" disabled>
          Showcase
        </Button>
      </Link>
      <Link href={ROUTES.blog}>
        <Button variant="primary">Blog</Button>
      </Link>
      <Link href={ROUTES.contact}>
        <Button variant="primary">Contact me</Button>
      </Link>
    </div>
  );
}
