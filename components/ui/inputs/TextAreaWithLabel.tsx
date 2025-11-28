"use client";

import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { TextareaHTMLAttributes } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "../textarea";

// Generic S for Schema
type Props<S extends FieldValues> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
  fieldState: ControllerFieldState;
  field: ControllerRenderProps<S>;
  placeholderMessage?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaWithLabel<S extends FieldValues>({
  fieldTitle,
  nameInSchema,
  className,
  fieldState,
  field,
  ...props
}: Props<S>) {
  return (
    <Field data-invalid={fieldState.invalid} className="relative">
      <FieldLabel htmlFor={nameInSchema}>{fieldTitle}</FieldLabel>
      <div className="relative">
        <Textarea
          {...field}
          {...props}
          id={nameInSchema}
          aria-invalid={fieldState.invalid}
          className={`${className}`}
        />
      </div>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}
