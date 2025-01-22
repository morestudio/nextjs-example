import { type SafeParseReturnType, z } from "zod";

export const decodeForm = async <Schema extends z.ZodTypeAny>(
  formDataOrRequest: FormData | Request,
  schema: Schema
) => {
  const formData =
    formDataOrRequest instanceof FormData
      ? formDataOrRequest
      : await formDataOrRequest.clone().formData();

  return schema.parse(Object.fromEntries(formData)) as z.infer<Schema>;
};

export const safeDecodeForm = async <Schema extends z.ZodTypeAny>(
  formDataOrRequest: FormData | Request,
  schema: Schema
) => {
  const formData =
    formDataOrRequest instanceof FormData
      ? formDataOrRequest
      : await formDataOrRequest.clone().formData();

  return schema.safeParse(Object.fromEntries(formData)) as SafeParseReturnType<
    z.input<Schema>,
    z.output<Schema>
  >;
};
