import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  variant: "contained" | "outlined" | "text";
  color: String;
  children: any;
  sx?: any;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  children,
  sx,
  onClick,
}) => {
  return (
    <>
      <MuiButton
        variant={variant}
        onClick={onClick}
        sx={{ backgroundColor: `${color}`, borderRadius: 0, padding: "1rem" }}
      >
        {children}
      </MuiButton>
    </>
  );
};

export default Button;
