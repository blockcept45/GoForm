import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login with Google</h2>
      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}
