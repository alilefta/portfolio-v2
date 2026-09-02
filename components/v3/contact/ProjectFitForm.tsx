"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, CircleAlert } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/v3/ui/Button";
import { EMAIL } from "@/lib/info";

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  projectType: "",
  message: "",
  website: "",
};

export function ProjectFitForm() {
  const t = useTranslations("V3.Contact.Form");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "unconfigured"
  >("idle");

  const inputClass =
    "mt-2 min-h-12 w-full border border-v3-line bg-v3-paper px-4 py-3 font-v3-text text-sm text-v3-ink outline-none transition-[border-color,box-shadow] placeholder:text-v3-muted/70 focus:border-v3-blue focus:ring-2 focus:ring-v3-blue/20";

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  }

  function validate() {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = t("Required");
    if (!values.email.trim()) {
      nextErrors.email = t("Required");
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = t("InvalidEmail");
    }
    if (!values.projectType) nextErrors.projectType = t("Required");
    if (!values.message.trim()) {
      nextErrors.message = t("Required");
    } else if (values.message.trim().length < 20) {
      nextErrors.message = t("MessageShort");
    }
    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { ok?: boolean; code?: string };

      if (!response.ok || !result.ok) {
        setStatus(
          result.code === "delivery_unconfigured" ? "unconfigured" : "error",
        );
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="border-v3-line bg-v3-paper border p-6 sm:p-8 lg:p-10">
      <div className="border-v3-line border-b pb-7">
        <p className="v3-label text-v3-coral">{t("Eyebrow")}</p>
        <h2 className="font-v3-display mt-5 text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.92] font-bold tracking-[-0.06em] text-balance">
          {t("Title")}
        </h2>
        <p className="v3-body text-v3-muted mt-5 max-w-xl">
          {t("Description")}
        </p>
      </div>

      <form className="mt-8" onSubmit={onSubmit} noValidate>
        <div hidden aria-hidden="true">
          <label htmlFor="project-fit-website">Website</label>
          <input
            id="project-fit-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => updateValue("website", event.target.value)}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="project-fit-name"
              className="v3-label text-v3-muted"
            >
              {t("Name")}
            </label>
            <input
              id="project-fit-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(event) => updateValue("name", event.target.value)}
              placeholder={t("NamePlaceholder")}
              className={inputClass}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? "project-fit-name-error" : undefined
              }
            />
            {errors.name ? (
              <p
                id="project-fit-name-error"
                className="font-v3-text text-v3-coral mt-2 text-xs"
              >
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="project-fit-email"
              className="v3-label text-v3-muted"
            >
              {t("Email")}
            </label>
            <input
              id="project-fit-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
              placeholder={t("EmailPlaceholder")}
              className={inputClass}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "project-fit-email-error" : undefined
              }
            />
            {errors.email ? (
              <p
                id="project-fit-email-error"
                className="font-v3-text text-v3-coral mt-2 text-xs"
              >
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="project-fit-type" className="v3-label text-v3-muted">
            {t("ProjectType")}
          </label>
          <select
            id="project-fit-type"
            name="projectType"
            value={values.projectType}
            onChange={(event) => updateValue("projectType", event.target.value)}
            className={`${inputClass} appearance-none`}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "project-fit-type-error" : undefined
            }
          >
            <option value="">{t("SelectPlaceholder")}</option>
            <option value="Product">{t("ProjectTypes.Product")}</option>
            <option value="Workflow">{t("ProjectTypes.Workflow")}</option>
            <option value="Review">{t("ProjectTypes.Review")}</option>
            <option value="Other">{t("ProjectTypes.Other")}</option>
          </select>
          {errors.projectType ? (
            <p
              id="project-fit-type-error"
              className="font-v3-text text-v3-coral mt-2 text-xs"
            >
              {errors.projectType}
            </p>
          ) : null}
        </div>

        <div className="mt-6">
          <label
            htmlFor="project-fit-message"
            className="v3-label text-v3-muted"
          >
            {t("Message")}
          </label>
          <textarea
            id="project-fit-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            placeholder={t("MessagePlaceholder")}
            className={`${inputClass} min-h-36 resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "project-fit-message-error" : undefined
            }
          />
          {errors.message ? (
            <p
              id="project-fit-message-error"
              className="font-v3-text text-v3-coral mt-2 text-xs"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        {status === "error" ? (
          <div
            role="alert"
            className="border-v3-coral/50 bg-v3-coral/10 text-v3-ink mt-6 flex gap-3 border p-4 text-sm"
          >
            <CircleAlert
              className="text-v3-coral mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold">{t("ErrorTitle")}</p>
              <p className="font-v3-text text-v3-muted mt-1">
                {t("ErrorDescription")}
              </p>
            </div>
          </div>
        ) : null}

        {status === "unconfigured" ? (
          <div
            role="alert"
            className="border-v3-yellow bg-v3-yellow/10 text-v3-ink mt-6 flex gap-3 border p-4 text-sm"
          >
            <CircleAlert
              className="text-v3-coral mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold">{t("UnavailableTitle")}</p>
              <p className="font-v3-text text-v3-muted mt-1">
                {t("UnavailableDescription")}
              </p>
              <a
                className="font-v3-text text-v3-blue hover:text-v3-blue-strong mt-3 inline-flex items-center gap-2 text-sm font-bold"
                href={`mailto:${EMAIL}`}
              >
                {t("Fallback")}{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : null}

        {status === "success" ? (
          <div
            role="status"
            className="border-v3-blue/30 bg-v3-blue/5 text-v3-ink mt-6 flex gap-3 border p-4 text-sm"
          >
            <Check
              className="text-v3-blue mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold">{t("SuccessTitle")}</p>
              <p className="font-v3-text text-v3-muted mt-1">
                {t("SuccessDescription")}
              </p>
              <a
                className="font-v3-text text-v3-blue hover:text-v3-blue-strong mt-3 inline-flex items-center gap-2 text-sm font-bold"
                href={`mailto:${EMAIL}`}
              >
                {t("Fallback")}{" "}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        ) : null}

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="large" disabled={status === "submitting"}>
            {status === "submitting" ? t("Submitting") : t("Submit")}
            <ArrowUpRight aria-hidden="true" />
          </Button>
          <p className="font-v3-text text-v3-muted max-w-xs text-xs leading-5">
            {t("Privacy")}
          </p>
        </div>
      </form>
    </div>
  );
}
