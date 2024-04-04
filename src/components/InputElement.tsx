"use client";
import React, { Attributes, InputHTMLAttributes } from "react";

type Props = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputElement = ({ className, ...props }: Props) => {
  return <input className={"w-full " + className} {...props} />;
};

export default InputElement;
