import { UiButton } from "./ui-button";
import { UiLink } from "./ui-link";

export function UiHeaderRightContent() {
  return (
    <div className="flex flex-col-1 gap-2">
      <UiLink href={"/"}>
        <UiButton variant="outlined">Home</UiButton>
      </UiLink>
      <UiLink href={"/"}>
        <UiButton variant="primary" disabled>
          Showcase
        </UiButton>
      </UiLink>
      <UiLink href={"/"}>
        <UiButton variant="primary" disabled>
          Blog
        </UiButton>
      </UiLink>
      <UiLink href={"/contact"}>
        <UiButton variant="primary">Contact me</UiButton>
      </UiLink>
    </div>
  );
}
