import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const login = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData.entries());
    console.log("login with:", data);
  };

  return (
    <div>
      <form action={login} className="space-y-4">
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
