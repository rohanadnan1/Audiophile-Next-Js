import { Button as MuiButton } from "@mui/material"

interface ButtonProps {
    variant: 'contained' | 'outlined' | 'text'
    color: String,
    children: any,
    sx?: any
}

const Button = ({ variant, color, children, sx }: ButtonProps) => {
    return (
        <>
            <MuiButton variant={variant} sx={{ backgroundColor: `${color}`, borderRadius: 0, padding: '1rem' }}>{children}</MuiButton>
        </>
    )
}

export default Button
