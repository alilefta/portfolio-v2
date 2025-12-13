"use client";

import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes, useState } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { EyeClosed, EyeIcon } from "lucide-react";
import clsx from "clsx";

// Generic S for Schema
type Props<S extends FieldValues> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
  fieldState: ControllerFieldState;
  field: ControllerRenderProps<S>;
  placeholderMessage?: string;
  isPassword?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithLabel<S extends FieldValues>({
  fieldTitle,
  nameInSchema,
  className,
  fieldState,
  field,
  isPassword = false,
  ...props
}: Props<S>) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isPassword) {
    return (
      <Field data-invalid={fieldState.invalid}>
        <FieldLabel htmlFor={nameInSchema}>{fieldTitle}</FieldLabel>
        <Input
          type="text"
          {...field}
          {...props}
          id={nameInSchema}
          aria-invalid={fieldState.invalid}
          className={className}
        />
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
    );
  } else {
    return (
      <Field data-invalid={fieldState.invalid} className="relative">
        <FieldLabel htmlFor={nameInSchema}>{fieldTitle}</FieldLabel>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...field}
            {...props}
            id={nameInSchema}
            aria-invalid={fieldState.invalid}
            className={`ltr:pr-10 rtl:pl-10 ${className}`}
          />
          <Button
            className={clsx(
              "absolute top-1/2 right-1 bottom-0 -translate-y-1/2 rounded-full transition-opacity duration-200 hover:opacity-70",
              {
                hidden: !fieldState.isDirty,
              },
            )}
            variant={"ghost"}
            size={"icon"}
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeIcon /> : <EyeClosed />}
          </Button>
        </div>
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </Field>
    );
  }
}
