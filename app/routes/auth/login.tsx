import { createFileRoute, Link } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.card)}>
        <h1 {...stylex.props(styles.title)}>Sign in</h1>
        <button {...stylex.props(styles.button)}>Continue with Google</button>
        <div {...stylex.props(styles.links)}>
          <Link to="/auth/register">Create an account</Link>
          <Link to="/auth/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "360px",
    padding: "32px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    margin: "0",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
});
