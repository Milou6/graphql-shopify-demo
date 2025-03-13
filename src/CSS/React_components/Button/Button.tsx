"use client";

import { MouseEventHandler } from "react";

import "@/CSS/components/button.scss";
import styles from "./styles.module.scss";

export default function Button({
  children,
  className = undefined,
  ariaLabel = undefined,
  loading = false,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={[styles.customButton, `${className ?? ""}`].join(" ")}
      onClick={onClick}
      disabled={loading}
      aria-label={ariaLabel}
    >
      {loading ? <span className="loader"></span> : children}
    </button>
  );
}
