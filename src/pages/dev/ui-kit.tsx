import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { useState } from "react";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiError } from "@/shared/ui/ui-error";

export default function UiKitPage() {
  const [loaderShown, setLoaderShown] = useState(false);

  // TODO: Fix loading buttons center
  // TODO: Introduce modals / form component
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
    <div className={`min-h-screen bg-slate-100`}>
      <UiHeader
        rightContent={
          <UiButton variant="primary" onClick={showLoader}>
            Show fullscreen loader
          </UiButton>
        }
      />
      <div className="pt-10">
        <div className="flex items-center justify-between px-[25%]">
          <UiButton variant="primary">primary button</UiButton>
          <UiButton variant="secondary">secondary button</UiButton>
          <UiButton variant="outlined">secondary button</UiButton>
        </div>
        <div className="flex items-center justify-between px-[25%] mt-5">
          <UiButton variant="primary" disabled>
            primary button
          </UiButton>
          <UiButton variant="secondary" disabled>
            secondary button
          </UiButton>
          <UiButton variant="outlined" disabled>
            secondary button
          </UiButton>
        </div>
        <div className="flex items-center justify-between px-[25%] mt-5">
          <UiButton variant="primary" isLoading />
          <UiButton variant="secondary" isLoading />
          <UiButton variant="outlined" isLoading />
        </div>
        <div className="flex items-center justify-between px-[25%] mt-5">
          <UiButton variant="primary" isLoading disabled />
          <UiButton variant="secondary" isLoading disabled />
          <UiButton variant="outlined" isLoading disabled />
        </div>
        <div className="flex items-center justify-between px-[25%] pt-24">
          <div className="rounded-xl border border-slate-300 px-14 py-8 w-full max-w-[400px] bg-white self-center">
            <div className="flex flex-col gap-4">
              <UiTextField
                label="Text field"
                inputProps={{ placeholder: "Placeholder" }}
              />
              <UiTextField
                label="Error text field"
                error="Text field error"
                inputProps={{ placeholder: "Placeholder" }}
              />
              <UiTextField
                inputProps={{ placeholder: "Text field with placeholder only" }}
              />
              <UiSelectField
                options={[
                  {
                    value: "1",
                    label: "Select menu",
                  },
                  {
                    value: "2",
                    label: "Other option",
                  },
                ]}
              />
            </div>
          </div>
          <div className="rounded-xl border border-slate-300 px-14 py-8 w-full max-w-[400px] bg-white self-center">
            <div className="flex flex-col gap-4">
              <UiLink href="">Some text as link...</UiLink>
              <UiSpinner className="text-teal-600 v-20 h-20" />
              <UiError title="Error title (as badge)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
