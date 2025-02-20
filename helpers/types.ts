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

export type ReqResponseType = {
  success: boolean;
  data?: any;
  message: string;
};

export interface NewsArticle {
  title: string;
  description: string;
  url: string;
}