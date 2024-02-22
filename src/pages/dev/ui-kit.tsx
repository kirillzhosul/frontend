import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { useState } from "react";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";

export default function UiKitPage() {
  const [loaderShown, setLoaderShown] = useState(false);

  if (loaderShown) {
    return <UiPageSpinner />;
  }

  const showLoader = () => {
    setTimeout(() => {
      setLoaderShown(false);
    }, 1000);
    setLoaderShown(true);
  };

  return (
    <main className={`min-h-screen`}>
      <UiHeader
        rightContent={
          <UiButton variant="primary" onClick={showLoader}>
            Show fullscreen loader
          </UiButton>
        }
      />
      <UiButton variant="primary">primary button</UiButton>
      <UiButton variant="secondary">secondary button</UiButton>
      <UiButton variant="outlined">secondary button</UiButton>
      <UiButton disabled variant="primary">
        secondary disabled button
      </UiButton>
      <UiTextField
        label="Text field label"
        inputProps={{ placeholder: "Placeholder" }}
      />
      <UiTextField
        label="Text field label"
        error="Text field error"
        inputProps={{ placeholder: "Placeholder" }}
      />
      <UiTextField inputProps={{ placeholder: "Placeholder" }} />
      <UiSelectField
        options={[
          {
            label: "label",
            value: "value",
          },
        ]}
      />
      <UiLink href="">link text</UiLink>
      <UiSpinner className="text-teal-600 v-20 h-20" />
    </main>
  );
}
