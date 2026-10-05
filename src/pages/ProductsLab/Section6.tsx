import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const WantToBuildSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {
          opacity: 0,
        },
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
        },
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
            "radial-gradient(circle, rgba(102,85,235,0.10) 0%, rgba(102,85,235,0) 70%)",
          top: "-380px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(154,143,255,0.08) 0%, rgba(154,143,255,0) 70%)",
          bottom: "-220px",
          right: "-120px",
          pointerEvents: "none",
        },
      }}
    >
      {/* Main Heading */}
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
              duration: 0.6,
            },
          },
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
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
              xs: "30px",
              sm: "38px",
              md: "48px",
              lg: "56px",
            },
            lineHeight: {
              xs: 1.2,
              md: 1.15,
            },
            letterSpacing: "-1.5px",
            color: "#111111",
            mb: 2,
            maxWidth: "900px",
          }}
        >
          Want to Build{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
            }}
          >
            Something Like This?
          </Box>
        </Typography>
      </MotionBox>

      {/* Description */}
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
              duration: 0.6,
            },
          },
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
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
              md: "17px",
            },
            lineHeight: {
              xs: "24px",
              md: "28px",
            },
            color: "#6B6B6B",
            maxWidth: "650px",
            mb: 5,
            m: 0,
          }}
        >
          Whether you want to license one of our proprietary tools or construct
          a custom product for your business — our team is ready to scale.
        </Typography>
      </MotionBox>

      {/* CTA Buttons */}
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
              duration: 0.6,
            },
          },
        }}
        sx={{
          mt: 3,
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Primary CTA */}
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
              boxShadow:
                "0 10px 25px rgba(102, 85, 235, 0.20)",
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #5B4BE0 0%, #7869ED 100%)",
                boxShadow:
                  "0 14px 32px rgba(102, 85, 235, 0.28)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Start a Project&nbsp; ↗
          </Button>

          {/* Secondary CTA */}
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
            Book a Strategy Call&nbsp; ↗
          </Button>
        </Stack>
      </MotionBox>

      {/* Bottom Accent */}
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
              delay: 0.3,
            },
          },
        }}
        sx={{
          width: "70px",
          height: "3px",
          borderRadius: "10px",
          background:
            "linear-gradient(90deg, #6655EB, #9A8FFF)",
          mt: 6,
          position: "relative",
          zIndex: 1,
        }}
      />
    </MotionBox>
  );
};

export default WantToBuildSection;