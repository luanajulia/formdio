import { Box, styled, AppBar, Toolbar, colors, Grid, FormControl, FormHelperText, InputLabel, Input, CircularProgress, Stack } from "@mui/material"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image from "../../../assets/banner.svg"; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import avatar from "../../../assets/avatar.jpg";
import React from "react";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const Feed = () => {
    const StyledInfo = styled("div")(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        gap: "20px",
       
    }))
    const Styledh = styled("h1")(({ theme }) => ({
        color: "#ffffff",
        fontSize: "18px",
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
            <Grid size={{ xs: 12, md: 8 }}   >
               <StyledInfo>
                    <Styledh>Feed</Styledh>
               </StyledInfo>
               <Stack spacing={5}> 
                 <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        />
                        <CardContent sx={{ backgroundColor: '#3B4651' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                        <Typography gutterBottom variant="h5" component="div"  sx={{ color: '#FFFFFF' }}>
                        <strong>Luana Vieira</strong><br></br><span style={{ color: '#FFFFFFB2', fontSize: '14px' }}>Ha 8 Minutos</span>
                        </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#FFFFFFB2' }}>
                            Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong><br></br><br></br>
                            <strong>#HTML #CSS #Javascript</strong>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        />
                        <CardContent sx={{ backgroundColor: '#3B4651' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                        <Typography gutterBottom variant="h5" component="div"  sx={{ color: '#FFFFFF' }}>
                        <strong>Luana Vieira</strong><br></br><span style={{ color: '#FFFFFFB2', fontSize: '14px' }}>Ha 8 Minutos</span>
                        </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#FFFFFFB2' }}>
                            Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong><br></br><br></br>
                            <strong>#HTML #CSS #Javascript</strong>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        />
                        <CardContent sx={{ backgroundColor: '#3B4651' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                        <Typography gutterBottom variant="h5" component="div"  sx={{ color: '#FFFFFF' }}>
                        <strong>Luana Vieira</strong><br></br><span style={{ color: '#FFFFFFB2', fontSize: '14px' }}>Ha 8 Minutos</span>
                        </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#FFFFFFB2' }}>
                            Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong><br></br><br></br>
                            <strong>#HTML #CSS #Javascript</strong>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card >
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        />
                        <CardContent sx={{ backgroundColor: '#3B4651' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                        <Typography gutterBottom variant="h5" component="div"  sx={{ color: '#FFFFFF' }}>
                        <strong>Luana Vieira</strong><br></br><span style={{ color: '#FFFFFFB2', fontSize: '14px' }}>Ha 8 Minutos</span>
                        </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#FFFFFFB2' }}>
                            Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong><br></br><br></br>
                            <strong>#HTML #CSS #Javascript</strong>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <StyledInfo>
                    <Styledh sx={{ color: '#FFFFFF' }}># RANKING 5 TOP DA SEMANA</Styledh>
               </StyledInfo>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                <ListItem>
                    <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                    </ListItemAvatar>
                    <ListItemText primary="Luana Vieira" secondary={
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    aria-label="Export data"
                    style={{ borderRadius: "20px", margin: "10px", marginLeft: "0px", padding: "5px", maxWidth: "200px", backgroundColor: "#FFFF"}}
                />
            </Stack>
          }  sx={{ color: '#FFFFFF' }}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                    </ListItemAvatar>
                    <ListItemText primary="Luana Vieira" secondary={
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    aria-label="Export data"
                    style={{ borderRadius: "20px", margin: "10px", marginLeft: "0px", padding: "5px", maxWidth: "200px", backgroundColor: "#FFFF" }}
                />
            </Stack>
          }  sx={{ color: '#FFFFFF' }}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                    </ListItemAvatar>
                    <ListItemText primary="Luana Vieira" secondary={
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    aria-label="Export data"
                    style={{ borderRadius: "20px", margin: "10px", marginLeft: "0px", padding: "5px", maxWidth: "200px", backgroundColor: "#FFFF"}}
                />
            </Stack>
          }  sx={{ color: '#FFFFFF' }}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                    </ListItemAvatar>
                    <ListItemText primary="Luana Vieira" secondary={
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    aria-label="Export data"
                    style={{ borderRadius: "20px", margin: "10px", marginLeft: "0px", padding: "5px", maxWidth: "200px", backgroundColor: "#FFFF" }}
                />
            </Stack>
          }  sx={{ color: '#FFFFFF' }}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                    </ListItemAvatar>
                    <ListItemText primary="Luana Vieira" secondary={
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    aria-label="Export data"
                    style={{ borderRadius: "20px", margin: "10px", marginLeft: "0px", padding: "5px", maxWidth: "200px", backgroundColor: "#FFFF" }}
                />
            </Stack>
          }  sx={{ color: '#FFFFFF' }}/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                     <Avatar alt="Remy Sharp" src={avatar} style={{ border: '2px solid #FFFFFF' }}/>
                    </ListItemAvatar>
                    <ListItemText primary="Luana Vieira" secondary={
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <LinearProgress
                    variant="determinate"
                    value={50}
                    aria-label="Export data"
                    style={{ borderRadius: "20px", margin: "10px", marginLeft: "0px", padding: "5px", maxWidth: "200px", backgroundColor: "#FFFF" }}
                />
            </Stack>
          }  sx={{ color: '#FFFFFF' }}/>
                </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}   
export default Feed;