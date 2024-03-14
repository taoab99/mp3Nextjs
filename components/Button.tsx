"use client";

import React from "react";
import { ButtonHTMLAttributes, ReactNode, memo } from "react";

type Props = {
  className: string;
  icon?: ReactNode;
  text?: string;
  onBtn: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = memo(
  ({ className, icon, text, onBtn, ...props }: Props) => {
    return (
      <button
        type="button"
        className={"" + className}
        onClick={() => onBtn()}
        {...props}
      >
        {icon}
        {text}
      </button>
    );
  }
);
