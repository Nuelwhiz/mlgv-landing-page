import { useState } from "react";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  ButtonGroup,
  Container,
  CssBaseline,
  Box,
  Card,
  CardMedia,
} from "@mui/material";

/* import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
 */
function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">photo</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography variant="h2" align="center" color="textPrimary">
              photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone this is a photo album i am trying to make this
              sentence as long as piossible
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                marginBlock: 4,
              }}
            >
              <Button variant="contained" color="primary">
                save me
              </Button>

              <Button variant="outlined" color="primary">
                save oh
              </Button>
            </Box>
          </Container>
        </div>

        {/* <div>
          <ButtonGroup variant="contained" color="primary" align="center" >
            <Button>one </Button>
            <Button>two</Button>
            <Button>three</Button>
          </ButtonGroup>
        </div> */}
        <Container>
          <Box sx={{}}>
            <Card>
              <CardMedia image=""></CardMedia>
            </Card>
          </Box>
        </Container>
      </main>
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "inherit",
            }}
          >
            Photos
          </Typography>
        </Toolbar>
      </AppBar> */}
    </>
  );
}

export default App;
