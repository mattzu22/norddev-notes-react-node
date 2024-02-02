import { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
}

export function TextArea({ value, ...rest }: TextArea) {
  return <Container {...rest} value={value} />;
}
