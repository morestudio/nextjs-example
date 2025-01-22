import type { ResultError, ResultSuccess } from "@/types/utils.type";
import { z } from "zod";
import { safeDecodeForm } from "./parser";

type ActionStateSuccess<R> = ResultSuccess<R> & {
  successTitle?: string;
  successMessage?: string;
};
type ActionStateError<S extends z.ZodTypeAny = z.ZodTypeAny> = ResultError<
  z.infer<S>
> & { validationErrors?: z.ZodError<z.infer<S>> };

export type ActionState<
  R extends unknown | null = null,
  S extends z.ZodTypeAny = z.ZodTypeAny
> = ActionStateSuccess<R> | ActionStateError<S>;

// Form Actions
type ValidatedFormActionFunction<R, S extends z.ZodTypeAny> = (
  data: z.infer<S>,
  formData: FormData,
  previousState: ActionState
) => Promise<ActionState<R, S>>;

export function withValidatedFormAction<
  R,
  S extends z.ZodTypeAny = z.ZodTypeAny
>(
  schema: S,
  action: ValidatedFormActionFunction<R, S>
): (prevState: ActionState, formData: FormData) => Promise<ActionState<R, S>> {
  return async (prevState: ActionState, formData: FormData) => {
    const result = await safeDecodeForm(formData, schema);

    if (!result.success) {
      return {
        success: false,
        error: result.error.flatten().formErrors.join(", "),
        validationErrors: result.error,
      };
    }

    const data = result.data;
    return action(data, formData, prevState);
  };
}

// Actions
type ValidatedActionFunction<R, S extends z.ZodTypeAny> = (
  data: z.infer<S>
) => Promise<ActionState<R, S>>;

export function withValidateAction<R, S extends z.ZodTypeAny = z.ZodTypeAny>(
  schema: S,
  action: ValidatedActionFunction<R, S>
) {
  return async (data: z.infer<S>): Promise<ActionState<R, S>> => {
    const result = schema.safeParse(data);
    if (!result.success) {
      return {
        success: false,
        error: result.error.errors[0].message,
        validationErrors: result.error,
      };
    }

    const validData: z.infer<S> = result.data;
    return action(validData);
  };
}
