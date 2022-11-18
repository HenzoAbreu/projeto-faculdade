import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="bg-zinc-800 text-white outline-none h-10 focus:outline-teal-400 px-16 rounded text-sm placeholder:text-zinc-500"
    />
  );
}
