import { styled } from "@mui/material"
import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom";

const StyledButtons = styled("button")(({ theme }) => ({
        backgroundColor: "#565656",
        borderRadius: "15px",
        width: "120px",
        height: "25.98px",
        fontSize: "18px",
        border: "none",
        color: "#fff"
    }));

interface StyledButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
}


export const NavButton = ({ to, children, ...props }: StyledButtonsProps) => {
  const navigate = useNavigate();

  return (
    <StyledButtons onClick={() => navigate(to)} {...props}>
      {children}
    </StyledButtons>
  );
};
