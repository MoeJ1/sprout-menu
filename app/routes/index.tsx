import { createFileRoute, Link } from "@tanstack/react-router";
import * as stylex from "@stylexjs/stylex";
import config from "../../design/config.json";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Welcome to {config.brand.name}</h1>
      <div {...stylex.props(styles.actions)}>
        <Link to="/auth/login" {...stylex.props(styles.buttonPrimary)}>
          Login
        </Link>
        <button {...stylex.props(styles.buttonSecondary)}>Request Demo</button>
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    gap: "32px",
    fontFamily: "Geist, sans-serif",
  },
  title: {
    fontSize: "40px",
    fontWeight: "700",
    margin: "0",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  buttonPrimary: {
    padding: "10px 24px",
    borderRadius: "6px",
    backgroundColor: "#111827",
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
  },
  buttonSecondary: {
    padding: "10px 24px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },
});
