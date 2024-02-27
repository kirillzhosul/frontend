import { ButtonLink } from "@/shared/ui/components";
import {
  GitHubIcon,
  MailIcon,
  RoundedIcon,
  TelegramIcon,
} from "@/shared/ui/icons";

export function IconsBlock() {
  return (
    <div className="mt-[2vh] flex">
      <ButtonLink
        href="https://t.me/kirillzhosul"
        size="xl"
        variant="linkAnimated"
      >
        <RoundedIcon>
          <TelegramIcon />
        </RoundedIcon>
      </ButtonLink>

      <ButtonLink
        href="https://github.com/kirillzhosul"
        size="xl"
        variant="linkAnimated"
      >
        <RoundedIcon>
          <GitHubIcon />
        </RoundedIcon>
      </ButtonLink>
      <ButtonLink
        href="mailto: kirillzhosul@florgon.com"
        size="xl"
        variant="linkAnimated"
      >
        <RoundedIcon>
          <MailIcon />
        </RoundedIcon>
      </ButtonLink>
    </div>
  );
}
