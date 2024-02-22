import { apiClient } from "@/shared/api/api-instance";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export type ContactFormData = {
  name: string;
  subject: string;
  answer: string;
};

export function useContactForm() {
  const { register, handleSubmit, formState, watch } =
    useForm<ContactFormData>();

  const { mutate, status, reset } = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiClient.post("/contact/", data);
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => reset());
    return () => subscription.unsubscribe();
  }, [watch, reset]);

  return {
    register,
    status,
    validationErrors: formState.errors,
    handleSubmit: handleSubmit((data) => mutate(data)),
  };
}
