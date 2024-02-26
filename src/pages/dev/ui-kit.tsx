import { Button } from "@/shared/ui/components/button/button";
import { Input } from "@/shared/ui/components/input/input";
import { Select } from "@/shared/ui/components/input/select";
import { Link } from "@/shared/ui/components/link/link";
import { Spinner } from "@/shared/ui/components/spinner/spinner";
import { Header } from "@/shared/ui/layouts/header/header";
import { useState } from "react";
import { UiPageSpinner } from "@/shared/ui/components/spinner/page-spinner";
import { Alert } from "@/shared/ui/components/alert/alert";

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
      <Header
        rightContent={
          <Button variant="primary" onClick={showLoader}>
            Show fullscreen loader
          </Button>
        }
      />
      <div className="pt-10">
        <div className="flex items-center justify-between px-[25%]">
          <Button variant="primary">primary button</Button>
          <Button variant="secondary">secondary button</Button>
          <Button variant="outlined">secondary button</Button>
        </div>
        <div className="flex items-center justify-between px-[25%] mt-5">
          <Button variant="primary" disabled>
            primary button
          </Button>
          <Button variant="secondary" disabled>
            secondary button
          </Button>
          <Button variant="outlined" disabled>
            secondary button
          </Button>
        </div>
        <div className="flex items-center justify-between px-[25%] mt-5">
          <Button variant="primary" isLoading />
          <Button variant="secondary" isLoading />
          <Button variant="outlined" isLoading />
        </div>
        <div className="flex items-center justify-between px-[25%] mt-5">
          <Button variant="primary" isLoading disabled />
          <Button variant="secondary" isLoading disabled />
          <Button variant="outlined" isLoading disabled />
        </div>
        <div className="flex items-center justify-between px-[25%] pt-24">
          <div className="rounded-xl border border-slate-300 px-14 py-8 w-full max-w-[400px] bg-white self-center">
            <div className="flex flex-col gap-4">
              <Input
                label="Text field"
                inputProps={{ placeholder: "Placeholder" }}
              />
              <Input
                label="Error text field"
                error="Text field error"
                inputProps={{ placeholder: "Placeholder" }}
              />
              <Input
                inputProps={{ placeholder: "Text field with placeholder only" }}
              />
              <Select
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
              <Link href="">Some text as link...</Link>
              <Spinner className="text-teal-600 v-20 h-20" />
              <Alert title="Error title (as badge)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
