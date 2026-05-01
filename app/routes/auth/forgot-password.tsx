import { createFileRoute, Link } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";

export const Route = createFileRoute("/auth/forgot-password")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.card)}>
        <h1 {...stylex.props(styles.title)}>Forgot password</h1>
        <p {...stylex.props(styles.description)}>
          Enter your email and we'll send you a reset link.
        </p>
        <button {...stylex.props(styles.button)}>Send reset link</button>
        <div {...stylex.props(styles.links)}>
          <Link to="/auth/login">Back to sign in</Link>
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
  description: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#111827",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  links: {
    fontSize: "14px",
  },
});
