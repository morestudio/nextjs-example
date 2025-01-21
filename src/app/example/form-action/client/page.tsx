"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginActionParams } from "../actions";

export default function Page() {
  // const login = async (formData: FormData) => {
  //   "use server";
  //   const data = Object.fromEntries(formData.entries());
  //   console.log("login with:", data);
  // };

  const action = async (formData: FormData) => {
    //validate data
    // setLoading
    const email = formData.get("email");
    const password = formData.get("password");

    // const data = await loginAction(formData);
    const data = await loginActionParams(email as string, password as string);

    console.log("client login with:", data);
  };

  return (
    <div>
      <form action={action} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
