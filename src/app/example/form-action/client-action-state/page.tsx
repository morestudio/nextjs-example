"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginActionState } from "../actions";
import { useActionState } from "react";

const initialState = { data: {}, message: "" };

export default function Page() {
  const [state, formAction, pending] = useActionState(
    loginActionState,
    initialState
  );

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" />
        </div>

        <Button type="submit">{pending ? "Logging in..." : "Login"}</Button>
      </form>
      {state.message && (
        <p className="text-green-600 mt-5 text-xl">{state.message}</p>
      )}
    </div>
  );
}
