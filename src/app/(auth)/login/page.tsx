import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main>
      <div className="relative z-10 flex items-center justify-center p-4 sm:mt-8">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};
