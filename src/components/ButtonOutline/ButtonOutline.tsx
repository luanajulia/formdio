import { styled } from "@mui/material"
import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom";

const ButtonOutline = styled("button")(({ theme }) => ({
        backgroundColor: "#E4105D",         
        color: "#FFFFFF",                
        padding: "12px 36px",            
        fontSize: "18px",
        fontFamily: '"Open Sans", sans-serif', 
        fontWeight: 400,

        borderRadius: "50px",            
        border: "2px solid #E4105D",      
        outline: "4px solid #1E192C",     
        outlineOffset: "-6px",   
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
            backgroundColor: "#c70d4f",
            borderColor: "#c70d4f",
        }
    }));

interface StyledButtonsProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
}


export const BtnOutline = ({ to, children, ...props }: StyledButtonsProp) => {
  const navigate = useNavigate();

  return (
    <ButtonOutline onClick={() => navigate(to)} {...props}>
      {children}
    </ButtonOutline>
  );
};
