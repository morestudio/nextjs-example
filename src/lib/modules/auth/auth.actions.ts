"use server";

import { loginParamsSchema } from "./auth.schema";
import type { User } from "@/types/user.type";
import { delay } from "@/lib/utils";
import { z } from "zod";
import {
  withValidateAction,
  withValidatedFormAction,
} from "@/lib/utils/actions-helper";

export const loginAction = withValidateAction<User>(
  loginParamsSchema,
  async (data: z.infer<typeof loginParamsSchema>) => {
    //    ^?
    console.log("Login action", data);

    await delay(1000);

    const emailDomain = data.email.split("@")[1];
    if (emailDomain !== "email.com") {
      return {
        success: false,
        error: {
          message: "Invalid User or Password",
        },
      };
    }

    // TypeScript will now properly suggest these properties
    return {
      success: true,
      data: {
        id: "1",
        name: "John Doe",
      },
      successTitle: "Login successful",
    };
  }
);

export const loginFormAction = withValidatedFormAction<User>(
  loginParamsSchema,
  async (data, formData, previousState) => {
    console.log("Login form action", data);

    await delay(1000);

    return {
      success: true,
      data: {
        id: "1",
        name: "John Doe",
      },
      successTitle: "Login successful",
    };
  }
);
