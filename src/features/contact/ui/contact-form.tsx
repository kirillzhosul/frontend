import { Button } from "@/shared/ui/components/button/button";
import { Link } from "@/shared/ui/components/link/link";
import { Input } from "@/shared/ui/components/input/input";
import { useContactForm } from "../model/use-contact-form";
import { Alert } from "@/shared/ui/components/alert/alert";

export function ContactForm() {
  const { handleSubmit, register, validationErrors, status } = useContactForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Your name"
        inputProps={{
          type: "text",
          ...register("name", { required: true, maxLength: 30 }),
        }}
        error={validationErrors.name ? "Name invalid" : undefined}
      />
      <Input
        label="Subject or reason"
        inputProps={{
          type: "text",
          ...register("subject", { required: true, maxLength: 40 }),
        }}
        error={validationErrors.subject ? "Subject invalid" : undefined}
      />

      {status === "error" && (
        <Alert className="mt-3" title="Server error occured!" />
      )}
      <Button
        variant="primary"
        className="my-5"
        isLoading={status === "pending"}
        disabled={status === "success"}
      >
        Submit
      </Button>
      <p>
        By submitting, you are accepting <Link href="#">Privacy Policy</Link>{" "}
        and <Link href="#">User Agreement</Link>
      </p>
    </form>
  );
}
