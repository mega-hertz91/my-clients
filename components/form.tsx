"use client";

import { FormSchema, FormState } from "@/lib/interfaces";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

type FormProps = {
  schema: FormSchema;
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
};

export const Form = ({ schema, action }: FormProps) => {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    action,
    {
      message: "",
      timestamp: 0,
      errors: {},
    },
  );

  return (
    <form action={formAction}>
      <FieldSet className="mb-8">
        <FieldGroup>
          {schema.fields.map((field) => (
            <Field key={field.name}>
              <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
              <Input
                id={field.name}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                name={field.name}
                aria-invalid={
                  Object.hasOwn(state.errors, field.name) ? true : false
                }
                defaultValue={state?.values?.[field.name]}
              />
              {Object.hasOwn(state.errors, field.name) && (
                <FieldError>{state.errors[field.name].join(",")}</FieldError>
              )}
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>
      <Button size="lg" className="w-full" type="submit" disabled={pending}>
        {schema.submitLabel}
      </Button>
    </form>
  );
};
