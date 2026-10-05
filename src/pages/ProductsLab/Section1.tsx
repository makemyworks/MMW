import React from "react";

import { Box, Typography, Button, Stack, Chip } from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const DigitalProductLabSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.15,
          },
        },
      }}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#111111",
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        py: { xs: 8, sm: 10, md: 13, lg: 15 },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #EAEAEA",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.10) 0%, rgba(102,85,235,0) 70%)",
          top: "-350px",
          right: "-180px",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(154,143,255,0.08) 0%, rgba(154,143,255,0) 70%)",
          bottom: "-260px",
          left: "-180px",
          pointerEvents: "none",
        },
      }}
    >
      {/* Proprietary Product Portfolio Tag */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          mb: 2.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Chip
          label="PROPRIETARY PRODUCT PORTFOLIO"
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "10px", sm: "11px" },
            letterSpacing: "0.6px",
            color: "#6655EB",
            borderColor: "#D9D4FF",
            borderRadius: "100px",
            backgroundColor: "#F8F7FF",
            height: "32px",
            "& .MuiChip-label": {
              px: 2,
            },
          }}
        />
      </MotionBox>

      {/* Main Heading */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          maxWidth: "900px",
          mb: 2.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "32px",
              sm: "44px",
              md: "56px",
              lg: "64px",
            },
            lineHeight: {
              xs: 1.15,
              md: 1.1,
            },
            letterSpacing: "-1.8px",
            color: "#111111",
            m: 0,
          }}
        >
          Digital{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
            }}
          >
            Product Lab
          </Box>
        </Typography>
      </MotionBox>

      {/* Description Text */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: "650px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: "15px",
              sm: "17px",
              md: "20px",
            },
            lineHeight: {
              xs: "26px",
              sm: "29px",
              md: "33px",
            },
            color: "#6B6B6B",
            m: 0,
          }}
        >
          Our proprietary suite of websites, applications, SaaS tools, and
          consumer digital products. Built, launched, and operated by Alpha
          Zeta World.
        </Typography>
      </MotionBox>

      {/* Buttons Action Group */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        sx={{
          mt: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            alignItems: {
              xs: "stretch",
              sm: "center",
            },
          }}
        >
          {/* Primary Button */}
          <Button
            variant="contained"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "none",
              background:
                "linear-gradient(135deg, #6655EB 0%, #8577F5 100%)",
              color: "#FFFFFF",
              borderRadius: "100px",
              px: 4,
              py: 1.5,
              minWidth: { xs: "220px", sm: "auto" },
              boxShadow: "0 10px 25px rgba(102, 85, 235, 0.20)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #5B4BE0 0%, #7869ED 100%)",
                boxShadow: "0 14px 32px rgba(102, 85, 235, 0.28)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Explore Products&nbsp; ↗
          </Button>

          {/* Secondary Button */}
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "none",
              backgroundColor: "#FFFFFF",
              color: "#222222",
              borderColor: "#DCDCDC",
              borderRadius: "100px",
              px: 4,
              py: 1.5,
              minWidth: { xs: "220px", sm: "auto" },
              boxShadow: "none",
              transition:
                "transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
              "&:hover": {
                backgroundColor: "#F8F7FF",
                borderColor: "#BDB5FF",
                color: "#6655EB",
                transform: "translateY(-2px)",
              },
            }}
          >
            Read Our Thesis&nbsp; ↗
          </Button>
        </Stack>
      </MotionBox>

      {/* Bottom Accent */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, scaleX: 0 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: {
              duration: 0.8,
              delay: 0.3,
            },
          },
        }}
        sx={{
          width: "70px",
          height: "3px",
          borderRadius: "10px",
          background: "linear-gradient(90deg, #6655EB, #9A8FFF)",
          mt: 6,
          position: "relative",
          zIndex: 1,
        }}
      />
    </MotionBox>
  );
};

export default DigitalProductLabSection;