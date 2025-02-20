"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContactFormValues } from "../../../helpers/types";
import { FlatInput, FlatTextarea } from "../../_shared/input_comps/inputFeilds";
import { SolidPrimaryButton } from "../../_shared/input_comps/buttons";
import { postRequest } from "../../queries/requests";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
const ContactForm = () => {
  const initialValues: ContactFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    help: "",
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters"),
    lastname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name cannot exceed 50 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phonenumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only numbers")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits"),
    help: Yup.string()
      .required("Please describe how we can help you")
      .max(500, "Help description cannot exceed 500 characters"),
  });
 

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // getinfo(values)
      submitContact(values);
    },
  });
   
  const { mutate: submitContact, isPending  ,isSuccess} = useMutation({
    mutationKey: ["submit_contact"],
    mutationFn: (data: ContactFormValues) => postRequest(data, `contact`),
    onSuccess: (data) => {
      if (data?.success) {
        console.log(data);
        toast(data?.message, {
          toastId: `toast`,
          type: "success",
        });
        formik.resetForm( )
        return;
      }
      toast(data?.message, {
        toastId: `toast`,
        type: "error",
      });
    },
    onError(error, variables, context) {
      toast("Failed to submit", {
        toastId: `toast`,
        type: "error",
      });
    },
  });
  console.log(isSuccess)
  console.log(isPending)
  return (
    <div className=" bg-white rounded-xl py-[3rem] px-[2rem] shadow-2xl">
      <h3 className="text-[2.5rem] font-bold">Get in Touch</h3>
      <p className="text-greytext">You can reach us anytime</p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 mt-5">
        <div className="flex gap-5">
          <FlatInput
            label="Firstname"
            name="firstname"
            value={formik.values.firstname}
            onChange ={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.firstname && formik.errors.firstname)}
          />
          <FlatInput
            label="Lastname"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.lastname && formik.errors.lastname)}
          />
        </div>
        <FlatInput
          label="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
        />
        <FlatInput
          label="Phonenumber"
          name="phonenumber"
          value={formik.values.phonenumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.phonenumber && formik.errors.phonenumber
          )}
        />
        <FlatTextarea
          label="How can we help"
          name="help"
          value={formik.values.help}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.help && formik.errors.help)}
        />
        <SolidPrimaryButton type="submit" fullWidth isLoading={isPending}>
          Submit
        </SolidPrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
