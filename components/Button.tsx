import { Button as MuiButton } from "@mui/material"

interface ButtonProps {
    variant: 'contained' | 'outlined' | 'text'
    color: String,
    value: String
}

const Button = ({ variant, color, value }: ButtonProps) => {
    return (
        <>
            <MuiButton variant={variant} sx={{ backgroundColor: `${color}`, borderRadius: 0, padding: '1rem' }}>{value}</MuiButton>
        </>
    )
}

export default Button
