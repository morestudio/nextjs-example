// Result types
export type ResultSuccess<Data> = {
  success: true;
  data: Data;
};

export type ResultError<
  ErrorData extends Record<string, unknown> = Record<string, unknown>
> = {
  success: false;
  error: {
    message?: string;
    code?: string;
  } & Partial<ErrorData>;
};

/**
 * Result type for handling success/error outcomes without throwing exceptions
 * @template Data - The type of data returned on success
 * @template ErrorData - Additional error properties (extends Record<string, unknown>)
 */
export type Result<
  Data,
  ErrorData extends Record<string, unknown> = Record<string, unknown>
> = ResultSuccess<Data> | ResultError<ErrorData>;

/**
 * Infer the data type from a Result type
 * @template T - The Result type
 */
export type InferData<T> = T extends ResultSuccess<infer Data> ? Data : never;

/**
 * Promise wrapper for Result type
 * @template Data - The type of data returned on success
 * @template ErrorData - Additional error properties
 */
export type PromiseResult<
  Data,
  ErrorData extends Record<string, unknown> = Record<string, unknown>
> = Promise<Result<Data, ErrorData>>;

/**
 * Awaited version of Result type
 * @template Data - The type of data returned on success
 * @template ErrorData - Additional error properties
 */
export type AwaitedResult<
  Data,
  ErrorData extends Record<string, unknown> = Record<string, unknown>
> = Awaited<Result<Data, ErrorData>>;
