import { Box, styled, AppBar, Toolbar, colors, Grid, FormControl, FormHelperText, InputLabel, Input } from "@mui/material"; 
import  { BtnOutline } from "../../../../components/ButtonOutline/ButtonOutline";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Paragrafo = () => {
    const StyledInfo = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
       
    }))
    const Styledh = styled("h1")(({ theme }) => ({
        color: "#ffffff",
        fontSize: "46px",
        margin: "0",
        fontWeight: "700",
        lineHeight: "100%",
        marginBottom: "20px",
    }))
    return (
        <Grid container  spacing={{ xs: 0, md: 10 }} sx={{display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-start", 
                pt: "120px",              
                minHeight: "100vh",
                px: "50px"}}>
            <Grid size={{ xs: 12, md: 6 }}   >
               <StyledInfo>
                    <Styledh>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Styledh>
               </StyledInfo>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <StyledInfo>
                    <Styledh>Faça seu Cadastro</Styledh>
                    <p style={{ color: "#fff", margin: "0 0 10px 0", fontSize: "18px" }}>Faça seu login e make the change._</p>
                    
                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input" style={{ color: "#ffffff", fontSize: "18px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <EmailIcon style={{ color: "#8647AD" }} /> E-mail
                            </Box>
                        </InputLabel>
                        <Input id="my-input" sx={{ color: "#fff", pt: "20px" }} />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="senha" style={{ color: "#ffffff", fontSize: "18px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <LockIcon style={{ color: "#8647AD" }} /> Senha
                            </Box>
                        </InputLabel>
                        <Input id="senha" type="password" sx={{ color: "#fff", pt: "20px" }} />
                    </FormControl>

                    <BtnOutline to="/userhome">Começar Agora</BtnOutline>
                </StyledInfo>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    <p style={{ color: "#E5E044", margin: 0, cursor: "pointer" }}><strong>Esqueci minha senha</strong></p>
                    <a style={{ textDecoration: "none", color: "inherit" }}href="/cadastro"><p style={{ color: "#23DD7A", margin: 0, cursor: "pointer" }}><strong>Criar Conta</strong></p></a>
                </Box>
                
            </Grid>
        </Grid>
    )
}   
export default Paragrafo;