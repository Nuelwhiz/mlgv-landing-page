import React from "react";
import cardData from "./cardsData";
import CustomCard from "./cads";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  ThemeProvider,
  CssBaseline,
  CardActions,
  CardActionArea,
  Stack,
} from "@mui/material";
import "../App.css";
import logo from "../images/logo.png";
import hero from "../images/hero-bg.png";
import children from "../images/children-hug.jpg";
import nigas from "../images/nigas.jpg";
import chap from "../images/chap.jpg";
import chear from "../images/chear.png";
import smile from "../images/smile.jpg";

export default function Mui() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          px: { xs: "20px", md: "20px" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "600px",

            bgcolor: "black",
            marginTop: "10px",
            borderRadius: "20px",
            backgroundImage: `url(${hero})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: "0",
              right: "0",
              bottom: "0",
              left: "0",
              background: "black",
              opacity: "0.5",
            }}
          />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBlock: "80px",
            alignItems: "center",
            height: "fit-content",
          }}
        >
          <Typography
            variant="h4"
            color="text.primary"
            gutterBottom
            sx={{ maxWidth: { xs: "350px", md: "550px" } }}
          >
            Our mission is simple, to inspire everyone to love just like Christ
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              marginTop: "40px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: { xs: "200px", md: "400px" },
                borderRadius: "20px",
                backgroundImage: `url(${children})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: { xs: "none", md: "block" },
              }}
            />

            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                height: "400px",
                borderRadius: "20px",
                backgroundImage: `url(${nigas})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "fitContent",
            background: "black",
            padding: "40px",
            borderRadius: "20px",
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "white",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Watch the movement
          </Typography>
          <Typography
            sx={{
              maxWidth: "800px",
              fontSize: "1.5rem",
              color: "white",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Watch real moment of our faith videos, outreaches and share in our
            experience
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            {cardData.map((item) => (
              <CustomCard
                key={item.id}
                image={item.image}
                title={item.title}
                discription={item.description}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "fitContent",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: { xs: "20px" },
              justifyContent: { md: "space-between", xs: "center" },
              alignItems: "center",
              marginBlock: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                maxWidth: {
                  xs: "100%",
                  md: "400px",
                },
                fontSize: "3rem",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Join our growing family
            </Typography>
            <Typography
              sx={{
                maxWidth: "350px",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              A family of people choosing love, support one another and growing
              in faith and character together
            </Typography>
          </Box>
          <Box
            sx={{
              width: "screen",
              height: "fitContent",
              bgcolor: "#05A3B2",
              borderRadius: "20px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { md: "space-between", xs: "center" },
              padding: "20px",
              alignItems: { xs: "center" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                maxWidth: "300px",
                color: "white",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Grow interntionanly with God
            </Typography>
            <Typography
              sx={{
                maxWidth: { md: "350px", color: "white" },
                marginBlock: { xs: "20px", md: "0" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              help you grown into a abetter Christian through intentional daily
              expression of love, kindness and character
            </Typography>
            <Box
              component="img"
              src={chap}
              alt=""
              sx={{
                height: { md: "120px", xs: "90px" },
                width: { md: "120px", xs: "100%" },
                borderRadius: "20px",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "screen",
              height: "fitContent",
              bgcolor: "black",
              borderRadius: "20px",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { md: "space-between", xs: "center" },

              padding: "20px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                maxWidth: "250px",
                color: "white",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Go back to the community
            </Typography>
            <Typography
              sx={{
                maxWidth: {
                  md: "350px",
                },
                color: "white",
                textAlign: { xs: "center", md: "start" },
                marginBlock: { xs: "20px", md: "0" },
              }}
            >
              take part in real outreach programms from school visit to
              community support and make a tangible difference
            </Typography>
            <Box
              component="img"
              src={chear}
              alt=""
              sx={{
                height: { md: "120px", xs: "90px" },
                width: { md: "120px", xs: "100%" },
                borderRadius: "20px",
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              background: "black",
              borderRadius: "20px",
              alignSelf: "center",
              marginBlock: "10px",
              paddingInline: "70px",
            }}
          >
            join our family
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              bgcolor: "black",
              width: "100%",
              marginTop: "50px",
              height: { xs: "fit-content", md: "500px" },
              padding: { xs: "20px", md: "150px" },

              backgroundImage: `url(${smile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: "0",
                right: "0",
                bottom: "0",
                left: "0",
                background: "black",
                opacity: "0.5",
              }}
            />
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                maxWidth: "100%",
                color: "white",
                outlineColor: "black",
                textAlign: "center",
                lineHeight: "80px",
                fontSize: "4rem",
                position: "relative",
                zIndex: "1",
              }}
            >
              {" "}
              " Not all of us can do greate things but we can do all small
              things with greate love"
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "black",
                borderRadius: "20px",
                position: "relative",
                zIndex: "1",
                paddingInline: "40px",
                paddingBlock: "10px",
              }}
            >
              join our family
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "fitContent",
            bgcolor: "black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: "50px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", marginBlock: "10px" }}
              >
                Quick links
              </Typography>
              <Button sx={{ color: "white" }}>Home</Button>
              <Button sx={{ color: "white" }}>Shop product</Button>
              <Button sx={{ color: "white" }}>About us</Button>
              <Button sx={{ color: "white" }}>Blog</Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", marginBlock: "10px" }}
              >
                Help
              </Typography>
              <Button sx={{ color: "white" }}>Contact us</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", marginBlock: "10px" }}
              >
                Get in touch
              </Typography>
              <Typography
                gutterBottom
                sx={{ color: "white", maxWidth: "300px" }}
              >
                {} our team atre available moday to friday, 9am till 6pm
              </Typography>
              <Typography gutterBottom sx={{ color: "white" }}>
                call us on 08023564788{" "}
              </Typography>
              <Typography sx={{ color: "white" }}>
                Email us at emmbbd@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                connect with us on social media
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyItems: "",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#FFFFF7",
                maxWidth: "800px",
                borderBottom: { md: "3px solid white", xs: "none" },
                paddingBottom: "20px",
                marginLeft: { xs: "20px", md: "70px" },
                textAlign: "start",
              }}
            >
              MAKE LOVE GO VIRAL.{" "}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              paddingInline: "30px",
              marginBlock: "20px",
              marginLeft: { xs: "20px", md: "100px" },

              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "whitesmoke" }}>
              Make love go viral
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <Button sx={{ color: "white" }}>Terms & condition</Button>
              <Button sx={{ color: "white" }}>Privacy policy</Button>
              <Button sx={{ color: "white" }}>Cookie policy</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
