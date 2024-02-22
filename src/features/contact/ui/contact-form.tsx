import { UiButton } from "@/shared/ui/ui-button";
import { UiLink } from "@/shared/ui/ui-link";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useContactForm } from "../model/use-contact-form";
import { UiError } from "@/shared/ui/ui-error";

export function ContactForm() {
  const { handleSubmit, register, validationErrors, status } = useContactForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UiTextField
        label="Your name"
        inputProps={{
          type: "text",
          ...register("name", { required: true, maxLength: 30 }),
        }}
        error={validationErrors.name ? "Name invalid" : undefined}
      />
      <UiTextField
        label="Subject or reason"
        inputProps={{
          type: "text",
          ...register("subject", { required: true, maxLength: 40 }),
        }}
        error={validationErrors.subject ? "Subject invalid" : undefined}
      />

      {status === "error" && (
        <UiError className="mt-3" title="Server error occured!" />
      )}
      <UiButton
        variant="primary"
        className="my-5"
        isLoading={status === "pending"}
        disabled={status === "success"}
      >
        Submit
      </UiButton>
      <p>
        By submitting, you are accepting{" "}
        <UiLink href="#">Privacy Policy</UiLink> and{" "}
        <UiLink href="#">User Agreement</UiLink>
      </p>
    </form>
  );
}
