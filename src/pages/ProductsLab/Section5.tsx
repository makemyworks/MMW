import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ClientAdvantageSection: React.FC = () => {
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
        px: { xs: 2.5, sm: 4, md: 8, lg: 14 },
        py: { xs: 8, sm: 10, md: 14 },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #EAEAEA",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.08) 0%, rgba(102,85,235,0) 70%)",
          top: "-350px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.045) 0%, rgba(102,85,235,0) 70%)",
          bottom: "-180px",
          right: "-100px",
          pointerEvents: "none",
        },
      }}
    >
      {/* Client Advantage Tag */}
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
          mb: { xs: 3, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Chip
          label="THE CLIENT ADVANTAGE"
          variant="outlined"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "9px", sm: "10px" },
            letterSpacing: "0.12em",
            color: "#6655EB",
            borderColor: "#D8D3FF",
            borderRadius: "100px",
            backgroundColor: "#F8F7FF",
            height: "32px",
            boxShadow: "0 5px 20px rgba(102, 85, 235, 0.06)",

            "& .MuiChip-label": {
              px: 2.5,
            },
          }}
        />
      </MotionBox>

      {/* Main Quote */}
      <MotionBox
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7 },
          },
        }}
        sx={{
          mb: { xs: 4, md: 5 },
          width: "100%",
          maxWidth: "1100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Decorative Quote Mark */}
        <Typography
          component="span"
          sx={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: {
              xs: "60px",
              sm: "80px",
              md: "100px",
            },
            lineHeight: 0.5,
            color: "#6655EB",
            opacity: 0.15,
            display: "block",
            mb: { xs: 2, md: 3 },
          }}
        >
          “
        </Typography>

        <Typography
          component="blockquote"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: "20px",
              sm: "27px",
              md: "35px",
              lg: "41px",
            },
            lineHeight: {
              xs: 1.45,
              md: 1.28,
            },
            letterSpacing: {
              xs: "-0.3px",
              md: "-0.8px",
            },
            color: "#151515",
            maxWidth: "1050px",
            m: 0,
            p: 0,
          }}
        >
          When you hire{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
              fontWeight: 700,
            }}
          >
            Alpha Zeta World
          </Box>
          , you are working with developers and strategists who have built and
          shipped real commercial products — not just client websites. We
          understand the full lifecycle because we live it every day.
        </Typography>
      </MotionBox>

      {/* Signature */}
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Small Divider */}
        <Box
          sx={{
            width: "45px",
            height: "2px",
            borderRadius: "10px",
            background:
              "linear-gradient(90deg, #6655EB, #9A8FFF)",
            mb: 2,
          }}
        />

        <Typography
          component="cite"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "9px",
              sm: "10px",
            },
            letterSpacing: "0.14em",
            color: "#777777",
            fontStyle: "normal",
            display: "block",
          }}
        >
          — ALPHA ZETA WORLD SYSTEM DIRECTIVE
        </Typography>
      </MotionBox>
    </MotionBox>
  );
};

export default ClientAdvantageSection;