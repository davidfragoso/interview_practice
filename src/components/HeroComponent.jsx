import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import rutasImg from "../config/rutasImg";

const HeroComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const textStyles = {
    fontWeight: 500,
    fontSize: "64px",
    lineHeight: "96px",
    "& span": {
      background: "linear-gradient(45deg, #007E15, #294979)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    fontFamily: "'Poppins', sans-serif",
  };

  const bodyTextStyles = {
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "32px",
    marginBottom: "1.5rem",
  };

  const iconButtonStyles = {
    background: "#F0F0F0",
    borderRadius: "50%",
    padding: "0.5rem",
    "&:hover": {
      background: "#F0F0F0",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        color: "black",
        boxSizing: "border-box",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
          maxWidth: isMobile ? "90%" : "33%",
          left: isMobile ? "5%" : "12%",
          transform: "translateY(-50%)",
          top: "50%",
          padding: "2rem",
        }}
      >
        <Typography variant="h1" sx={textStyles}>
          Lorem ipsum dolor sit <span>amet</span>
        </Typography>
        <Typography variant="body1" sx={bodyTextStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis. Phasellus lobortis vitae elit non dictum. Vestibulum feugiat ex vitae pulvinar ornare.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: "1rem",
            mt: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#f3f3f3",
              borderRadius: "25px",
              padding: "0.75rem 1.5rem",
              gap: "2rem",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                whiteSpace: "nowrap",
              }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #007E15, #294979)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "25px",
              minWidth: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              "&:hover": {
                background: "linear-gradient(45deg, #00B71F, #3D6CB2)",
              },
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Get started
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            mt: "6rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton sx={iconButtonStyles}>
              <FacebookIcon sx={{ color: "#00677E" }} />
            </IconButton>
            <Typography sx={{ fontWeight: "bold" }}>@x-capital</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton sx={iconButtonStyles}>
              <LinkedInIcon sx={{ color: "#00677E" }} />
            </IconButton>
            <Typography sx={{ fontWeight: "bold" }}>@x-capital</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <IconButton sx={iconButtonStyles}>
              <InstagramIcon sx={{ color: "#00677E" }} />
            </IconButton>
            <Typography sx={{ fontWeight: "bold" }}>@x-capital</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <img
          src={rutasImg.burbuja}
          alt="Bubble"
          style={{
            width: isMobile ? "200px" : "950px",
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: isMobile ? "10%" : "16%",
          width: isMobile ? "300px" : "450px",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "16.5rem",
        }}
      >
        <img
          src={rutasImg.celularHero}
          alt="celularHero"
        />
      </Box>
    </Box>
  );
};

export default HeroComponent;
