"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";

import { InputWithLabel } from "./ui/inputs/InputWithLabel";
import { SelectWithLabel } from "./ui/inputs/SelectWithLabel";
import { TextAreaWithLabel } from "./ui/inputs/TextAreaWithLabel";
import { Button } from "@/components/ui/custom/Button";
import { useTranslations } from "next-intl";

export const formSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name must be at least 1 character.")
    .max(32, "First name must be at most 32 characters."),
  lastName: z
    .string()
    .min(1, "Last name must be at least 1 character.")
    .max(32, "Last name must be at most 32 characters."),
  email: z.email("Email is required"),
  service: z.string().min(1, "Please select a service category."),
  message: z
    .string("Message is required")
    .min(20, "Message must be at least 20 characters.")
    .max(100, "Message must be at most 100 characters."),
});

export type FormSchema = z.infer<typeof formSchema>;

export function ContactForm() {
  const tServices = useTranslations("ContactPage.Services");
  const t = useTranslations("ContactPage.Form");

  const services = [
    { id: 1, label: tServices("AI"), value: "ai-integration" },
    { id: 2, label: tServices("FullStack"), value: "full-stack" },
    { id: 3, label: tServices("Websites"), value: "websites" },
    { id: 4, label: tServices("Healthcare"), value: "healthcare" },
    { id: 5, label: tServices("Desktop"), value: "desktop" },
    { id: 6, label: tServices("CodeReview"), value: "code-review" },
    { id: 7, label: tServices("Other"), value: "other" },
  ];

  const precisionInputStyle =
    "bg-transparent! border-0 border-b  border-white/20 rounded-none px-2 h-12 focus-visible:ring-0 focus-visible:border-blue-400 focus-visible:shadow-[0_1px_0_0_#60a5fa] placeholder:text-white/30 text-white transition-all shadow-none!";
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      service: "",
    },
  });

  function onSubmit(data: FormSchema) {
    toast(t("Toast.Title"), {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
    });
  }

  return (
    <Card className="rtl:font-alexandria w-full border-none bg-transparent shadow-none">
      <CardHeader>
        {form.formState.errors.root && (
          <p className="text-sm text-red-500">
            {form.formState.errors.root.message}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-0">
        <form onSubmit={form.handleSubmit(onSubmit)} id="contact-form">
          <FieldGroup className="gap-6">
            {/* ROW 1: NAMES */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <InputWithLabel<FormSchema>
                    field={field}
                    fieldState={fieldState}
                    nameInSchema="firstName"
                    fieldTitle={t("FirstName")}
                    placeholder={t("Placeholders.FirstName")}
                    className={precisionInputStyle}
                  />
                )}
              />

              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <InputWithLabel<FormSchema>
                    field={field}
                    fieldState={fieldState}
                    nameInSchema="lastName"
                    fieldTitle={t("LastName")}
                    placeholder={t("Placeholders.LastName")}
                    className={precisionInputStyle}
                  />
                )}
              />
            </div>

            {/* ROW 2: EMAIL */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <InputWithLabel<FormSchema>
                  nameInSchema="email"
                  field={field}
                  fieldState={fieldState}
                  placeholder={t("Placeholders.Email")}
                  fieldTitle={t("Email")}
                  type="email"
                  className={precisionInputStyle}
                />
              )}
            />

            {/* ROW 3: SERVICE (Select needs slightly different handling for the trigger) */}
            <Controller
              name="service"
              control={form.control}
              render={({ field, fieldState }) => (
                <SelectWithLabel<FormSchema>
                  nameInSchema="service"
                  field={field}
                  fieldState={fieldState}
                  fieldTitle={t("Service")}
                  placeholder={t("Select")}
                  data={services}
                  // We style the Trigger here
                  className={`${precisionInputStyle} font-normal`}
                />
              )}
            />

            {/* ROW 4: MESSAGE */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <TextAreaWithLabel<FormSchema>
                  nameInSchema="message"
                  field={field}
                  fieldState={fieldState}
                  placeholder={t("Placeholders.Message")}
                  fieldTitle={t("Message")}
                  className={`${precisionInputStyle} min-h-[100px] resize-none pt-4`}
                />
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col items-center px-0 pt-8">
        <Button
          type="submit"
          form="contact-form"
          variant={"primary"}
          className="w-full cursor-pointer"
        >
          {t("Submit")}
        </Button>
      </CardFooter>
    </Card>
  );
}
