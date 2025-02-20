import { Link } from "react-router";

import Logo from "@/components/ui/logo";
import LoginForm from "@/features/authentication/components/login-form";

function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Logo className="h-9 w-auto" />
          <span className="text-xl font-semibold">The Wild Oasis</span>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
