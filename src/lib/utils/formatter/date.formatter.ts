import { format, type FormatDateOptions } from "date-fns";

export const DATE_FORMATS_STYLES = {
  short: "dd/MM/yyyy",
  long: "dd/MM/yyyy HH:mm:ss",
};

type DateType = Date | number | string;
type DateFormatOptions = {
  style?: keyof typeof DATE_FORMATS_STYLES;
  fallback?: string | null;
} & FormatDateOptions;

export function formatDate(
  date: DateType,
  formatStr: string,
  options?: DateFormatOptions
): string | null {
  const defaultFormat = DATE_FORMATS_STYLES.short;
  const { style, fallback, ...restOptions } = options ?? {};

  try {
    const formatString =
      formatStr ?? (style != null ? DATE_FORMATS_STYLES[style] : defaultFormat);
    const dateStr = format(date, formatString, restOptions);

    return dateStr;
  } catch (error) {
    console.warn("Invalid formatting date:", {
      date,
      formatStr,
      options,
      error,
    });
    return fallback ?? null;
  }
}

export function formatShortDate(
  date: DateType,
  options?: Omit<DateFormatOptions, "style">
) {
  return formatDate(date, DATE_FORMATS_STYLES.short, options);
}

export function formatLongDate(
  date: DateType,
  options?: Omit<DateFormatOptions, "style">
) {
  return formatDate(date, DATE_FORMATS_STYLES.long, options);
}
