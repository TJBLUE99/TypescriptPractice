// src/components/AtomicInput.tsx
import React from "react";
import TextField from "@mui/material/TextField";

interface AtomicInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

const AtomicInput: React.FC<AtomicInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error = false,
  helperText,
}) => {
  return (
    <TextField
      sx={{ marginBottom: "1rem" }}
      label={label}
      size="small"
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      fullWidth
    />
  );
};

export default AtomicInput;
