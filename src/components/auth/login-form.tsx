"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginParamsSchema } from "@/lib/modules/auth/auth.schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginAction } from "@/lib/modules/auth/auth.actions";
import { toast } from "@/hooks/use-toast";

const formSchema = loginParamsSchema;
type FormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await loginAction(values);
    if (result.success) {
      toast({
        title: result.successTitle ?? "เข้าสู่ระบบสำเร็จ",
        description: result.successMessage,
        variant: "success",
      });
    } else {
      toast({
        title: "เข้าสู่ระบบไม่สำเร็จ",
        description: result.error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
      <h1 className="text-2xl font-semibold text-center mb-4">เข้าสู่ระบบ</h1>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">
              {form.formState.isSubmitting || form.formState.isValidating
                ? "กำลังเข้าสู่ระบบ..."
                : "เข้าสู่ระบบ"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
