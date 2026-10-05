import React from "react";

import { Box, Typography, Chip } from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const DevelopmentServicesSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.2,
          },
        },
      }}
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        color: "#111111",
        px: {
          xs: 2.5,
          sm: 4,
          md: 6,
          lg: 8,
        },
        py: {
          xs: 8,
          sm: 10,
          md: 13,
          lg: 15,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        overflow: "hidden",
        position: "relative",
        borderBottom: "1px solid #EAEAEA",

        "&::before": {
          content: '""',
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.10) 0%, rgba(102,85,235,0) 70%)",
          top: "-420px",
          right: "-180px",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(154,143,255,0.07) 0%, rgba(154,143,255,0) 70%)",
          bottom: "-300px",
          left: "-180px",
          pointerEvents: "none",
        },
      }}
    >
      {/* ================= SERVICE TAG ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 25,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        whileHover={{
          scale: 1.05,
        }}
        sx={{
          mb: {
            xs: 2.5,
            sm: 3,
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Chip
          label="SERVICES / DEVELOPMENT"
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: "10px",
              sm: "11px",
              md: "12px",
            },
            letterSpacing: "0.5px",
            height: {
              xs: "30px",
              sm: "32px",
              md: "34px",
            },
            color: "#6655EB",
            borderColor: "#D8D2FF",
            backgroundColor: "#F8F7FF",
            borderRadius: "100px",
            transition: "all 0.3s ease",

            "&:hover": {
              backgroundColor: "#F1EFFF",
              borderColor: "#BDB5FF",
            },

            "& .MuiChip-label": {
              px: {
                xs: 1.5,
                sm: 2,
              },
            },
          }}
        />
      </MotionBox>

      {/* ================= MAIN HEADING ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "850px",
            md: "1000px",
            lg: "1200px",
          },
          mb: {
            xs: 2.5,
            sm: 3,
            md: 3.5,
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          component="h1"
          sx={{
            width: "100%",
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "34px",
              sm: "42px",
              md: "52px",
              lg: "64px",
              xl: "72px",
            },
            lineHeight: {
              xs: 1.15,
              sm: 1.15,
              md: 1.15,
              lg: "76px",
              xl: "84px",
            },
            letterSpacing: {
              xs: "-1px",
              sm: "-1.5px",
              md: "-2px",
              lg: "-2.5px",
            },
            color: "#111111",
            m: 0,
          }}
        >
          Web & Mobile App{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
            }}
          >
            Development
          </Box>
        </Typography>
      </MotionBox>

      {/* ================= DESCRIPTION ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "680px",
          },
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
              xs: "14px",
              sm: "15px",
              md: "16px",
              lg: "18px",
            },
            lineHeight: {
              xs: "23px",
              sm: "25px",
              md: "27px",
              lg: "29px",
            },
            color: "#6B6B6B",
            m: 0,
          }}
        >
          Custom responsive websites, SaaS platforms, and cross-platform mobile
          applications engineered for exceptional performance, modern design,
          and robust scalability.
        </Typography>
      </MotionBox>

      {/* ================= BOTTOM ACCENT ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            scaleX: 0,
          },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: {
              duration: 0.8,
              delay: 0.25,
            },
          },
        }}
        sx={{
          width: "70px",
          height: "3px",
          borderRadius: "10px",
          background: "linear-gradient(90deg, #6655EB, #9A8FFF)",
          mt: 5,
          transformOrigin: "left",
          position: "relative",
          zIndex: 1,
        }}
      />
    </MotionBox>
  );
};

export default DevelopmentServicesSection;