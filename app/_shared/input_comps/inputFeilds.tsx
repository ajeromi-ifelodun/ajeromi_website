"use client";
import { Input, InputProps, Select, SelectProps } from "@nextui-org/react";import React from 'react'

export const InputOutline = ({ ...InputProps }: InputProps) => {
  return (
    <Input
      {...InputProps}
      variant="bordered"
      size="lg"
      classNames={{
        innerWrapper: "bg-[var(--bg-secondary)]",
        input: "text-[#9FA6B2] bg-[var(--bg-secondary)] text-sm",
      }}
    />
  );
};

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  isDisabled?: boolean;
}

interface CustomTextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  value: any; // Type for the textarea value
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange handler
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void; // onBlur handler (optional)
  error?: boolean; // Error message (optional)
  isDisabled?: boolean;
}
export const FlatInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = "text",
  placeholder = ` ${label}`,
  value,
  onChange,
  onBlur,
  error,
  isDisabled,
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {/* <label>{label}</label> */}
      <div
        className={`w-full rounded-[8px] overflow-hidden border ${
          error ? "border-danger" : "border-transparent"
        }`}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full py-[10px] px-4 bg-[white] rounded-[8px] border-solid border-[#CCCCCC] border-[1px]  text-[#8C8C8C] focus:text-[#000000] placeholder:text-[#8A8A8A]`}
          placeholder={placeholder}
          disabled={isDisabled}
        />
      </div>
      {/* {Boolean(error) && <div className="text-danger">{error}</div>} */}
    </div>
  );
};

export const FlatTextarea: React.FC<CustomTextareaProps> = ({
  label,
  name,
  placeholder = `Add ${label.toLowerCase()}`,
  value,
  onChange,
  onBlur,
  error,
  isDisabled,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {/* <label>{label}</label> */}
      <div
        className={`w-full rounded-[8px] overflow-hidden border ${
          error ? "border-danger" : "border-transparent"
        }`}
      >
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          onBlur={onBlur}
          
          className={`w-full py-[10px] px-6 bg-[white] rounded-[8px] border-solid border-[#CCCCCC] border-[1px]  text-[#8C8C8C] focus:text-[#000000] placeholder:text-[#8A8A8A]`}
          placeholder={placeholder}
          style={{ maxHeight: "180px", minHeight: "120px", resize: "vertical" }}
        />
      </div>
      {/* {error && <div className="text-danger">{error}</div>} */}
    </div>
  );
};