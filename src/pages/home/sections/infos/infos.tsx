import { Box, styled, AppBar, Toolbar, colors, Grid } from "@mui/material"; 
import image_info from "../../../../assets/info.svg";
import ButtonOutline from "../../../../components/ButtonOutline/ButtonOutline";

const Infos = () => {
    const StyledInfo = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
       
    }))
    const Styledh = styled("h1")(({ theme }) => ({
        color: "#E4105D",
        fontSize: "50px",
        margin: "0",
        fontWeight: "700",
        lineHeight: "100%",
        marginBottom: "20px",
    }))
    return (
        <Grid container  spacing={{ xs: 0, md: 40 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "calc(100vh - 50px)" }}>
            <Grid size={{ xs: 12, md: 5 }} style={{  paddingLeft: "50px" }} sx={{ paddingRight: "0px", paddingTop: "50px" }} >
                <StyledInfo>
                    <Styledh style={{ lineHeight: "0px" }}>Implemente</Styledh>
                    <Styledh style={{ color: "#fff" }}>o seu futuro global agora!</Styledh>
                    <p style={{ color: "#fff", fontSize: "18px" }}>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</p>
                </StyledInfo>
                <ButtonOutline onClick={() => {}}>Comecar Agora</ButtonOutline>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} style={{ paddingRight: "50px" }}>
                <img src={image_info} alt="infos" style={{ width: "100%" }} />
            </Grid>
        </Grid>
    )
}   
export default Infos;