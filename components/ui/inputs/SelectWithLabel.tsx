"use client";

import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { useLocale } from "next-intl";

type DataObj = {
  id: number;
  label: string;
  value: string;
  ar_label: string;
};

// Generic S for Schema
type Props<S extends FieldValues> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  data: DataObj[];
  fieldState: ControllerFieldState;
  field: ControllerRenderProps<S>;
  className?: string;
};

export function SelectWithLabel<S extends FieldValues>({
  fieldTitle,
  nameInSchema,
  className,
  field,
  fieldState,
  data,
}: Props<S>) {
  const locale = useLocale();
  return (
    <Field orientation="vertical" data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={nameInSchema}>{fieldTitle}</FieldLabel>

      <Select
        name={nameInSchema}
        value={field.value}
        onValueChange={field.onChange}
      >
        <SelectTrigger
          id={nameInSchema}
          aria-invalid={fieldState.invalid}
          className={`min-w-[120px] ${className}`}
        >
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          {data.map((service) => (
            <SelectItem key={service.value} value={service.value}>
              {locale === "ar" ? service.ar_label : service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}
