import { ReactNode } from "react";

export interface ContactFormValues {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  help: string;
}

export interface Department {
  icon: ReactNode
  title: string;
  content: string;
}