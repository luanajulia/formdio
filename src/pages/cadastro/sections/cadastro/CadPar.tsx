import { Box, styled, AppBar, Toolbar, colors, Grid, FormControl, FormHelperText, InputLabel, Input } from "@mui/material"; 
import { BtnOutline } from "../../../../components/ButtonOutline/ButtonOutline";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

const CadPar = () => {
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
        maxWidth: "100%",
    }))
    return (
        <Grid container spacing={{ xs: 0, md: 10 }} sx={{ 
                justifyContent: "center", 
                alignItems: "flex-start", 
                pt: "120px",              
                minHeight: "100vh",
                px: "60px"}}>
            <Grid size={{ xs: 12, md: 4 }}   >
               <StyledInfo>
                    <Styledh>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Styledh>
               </StyledInfo>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <StyledInfo>
                    <Styledh>Comece agora grátis</Styledh>
                    <p style={{ color: "#fff", margin: "0 0 10px 0", fontSize: "18px" }}>Crie sua conta e make the change._</p>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input" style={{ color: "#ffffff", fontSize: "18px" }}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <PersonIcon style={{ color: "#8647AD" }} /> Nome Completo
                            </Box>
                        </InputLabel>
                        <Input id="my-input" sx={{ color: "#fff", pt: "20px" }} />
                    </FormControl>

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
                <p style={{ color: "#fff", margin: "30px 0 10px 0", fontSize: "18px" }}>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </p>
                <div style={{ display: "inline-flex" }}>
                    <p style={{  color: "#FFFF" }}><strong>Ja tenho conta. </strong></p>
                    <a style={{ textDecoration: "none", color: "inherit" }} href="/login"><p style={{  color: "#23DD7A" }}> <strong> Fazer login</strong></p></a>
                </div>
                
            </Grid>
        </Grid>
    )
}   
export default CadPar;