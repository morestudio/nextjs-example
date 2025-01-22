export const NUMBER_FORMATS_PRESETS = {
  none: {},
  currency: {
    style: "currency",
    currency: "USD",
  },
  percent: {
    style: "percent",
  },
} as const satisfies {
  [key: string]: Intl.NumberFormatOptions;
};

type NumberType = number | string;

type NumberFormatterOptions = {
  preset?: keyof typeof NUMBER_FORMATS_PRESETS;
  fallback?: string | null;
};

export function formatNumber(
  number: NumberType,
  { preset = "none", fallback }: NumberFormatterOptions = {}
): string | null {
  try {
    const num = Number(number);
    if (isNaN(num)) {
      throw new Error(`Invalid number value with ${number}`);
    }

    const options = NUMBER_FORMATS_PRESETS[preset];
    const formattedNumber = new Intl.NumberFormat(undefined, options).format(
      num
    );

    return formattedNumber;
  } catch (error) {
    console.warn("Invalid formatting number:", {
      number,
      preset,
      error,
    });
    return fallback ?? null;
  }
}
