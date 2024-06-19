import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import rutasImg from "../config/rutasImg";

const MuestraProducto = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f9f9f9",
        color: "black",
        padding: "4rem 2rem",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          fontSize: isMobile ? "2rem" : "3rem",
          textAlign: "center",
          marginBottom: "2rem",
          "& span": {
            background: "#007E15",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Lorem ipsum dolor sit <span>amet</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "32px",
          textAlign: "center",
          maxWidth: "800px",
          marginBottom: "4rem",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis. Phasellus lobortis vitae elit non dictum. Vestibulum feugiat ex vitae pulvinar ornare. Morbi in dui semper, ultrices orci ut, malesuada tellus.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          gap: isMobile ? "2rem" : "1rem",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            src: rutasImg.celularProducto,
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis.",
          },
          {
            src: rutasImg.bolsaProducto,
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis.",
          },
          {
            src: rutasImg.bolsaProducto,
            title: "Lorem ipsum",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin sit amet dolor ac lobortis.",
          },
        ].map((product, index) => (
          <Box
            key={index}
            sx={{
              background: 'rgba(236, 236, 236, .3)',
              borderRadius: "16px",
              padding: "2rem",
              textAlign: "center",
              width: isMobile ? "80%" : "350px",
              height: isMobile ? "auto" : "350px",
              margin: '0.5rem',
            }}
          >
            <img
              src={product.src}
              alt={product.title}
              style={{
                width: isMobile ? "100px" : "200px",
                height: "200px",
                marginBottom: "1rem",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#007E15",
                marginBottom: "1rem",
              }}
            >
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {product.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MuestraProducto;
