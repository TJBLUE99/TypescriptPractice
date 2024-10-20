import MuiButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material";
import React from "react";

interface CustomProps extends ButtonProps {
  disabled: boolean;
  title: string;
  handleClick: () => void;
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  transition: "background-color 0.3s, transform 0.2s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    transform: "scale(1.05)",
  },
  "&:focus": {
    outline: `2px solid ${theme.palette.primary.main}`,
  },
}));

const Button: React.FC<CustomProps> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  handleClick,
  onClick,
  onFocus,
  children,
  disabled = false,
  title,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      onClick={handleClick}
      onFocus={onFocus}
      disabled={disabled}
      {...rest}
    >
      {children}
      {title}
    </StyledButton>
  );
};

export default Button;
