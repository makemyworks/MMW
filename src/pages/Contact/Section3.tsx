import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const StrategySessionSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f9fa",
        boxSizing: "border-box",
        px: {
          xs: "12px",
          sm: "20px",
          md: "16px",
          lg: "20px",
        },
        py: {
          xs: "24px",
          sm: "32px",
          md: "40px",
          lg: "48px",
        },
        overflow: "hidden",
      }}
    >
      {/* Inner Banner Box */}
      <MotionBox
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        sx={{
          position: "relative",
          width: "100%",
          minHeight: {
            xs: "240px",
            sm: "260px",
            md: "280px",
          },
          backgroundColor: "#ffffff",
          border: "1px solid #e2e8f0",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.04)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: {
            xs: "24px",
            sm: "28px",
            md: "32px",
          },
          borderRadius: {
            xs: "12px",
            sm: "14px",
            md: "16px",
          },
          padding: {
            xs: "30px 20px",
            sm: "35px 30px",
            md: "40px",
          },
          boxSizing: "border-box",
          margin: "0 auto",
          overflow: "hidden",

          "&::before": {
            content: '""',
            position: "absolute",
            width: {
              xs: "180px",
              md: "300px",
            },
            height: {
              xs: "180px",
              md: "300px",
            },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)",
            top: "-120px",
            left: "-80px",
            pointerEvents: "none",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: {
              xs: "200px",
              md: "350px",
            },
            height: {
              xs: "200px",
              md: "350px",
            },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(79,70,229,0.04), transparent 70%)",
            bottom: "-160px",
            right: "-100px",
            pointerEvents: "none",
          },
        }}
      >
        {/* Heading Animation */}
        <MotionBox
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: 0,
              fontFamily: "Sora, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: {
                xs: "22px",
                sm: "28px",
                md: "34px",
                lg: "36px",
              },
              lineHeight: {
                xs: "32px",
                sm: "38px",
                md: "44px",
                lg: "100%",
              },
              letterSpacing: "0%",
              color: "#0f172a",
              textAlign: "center",
              maxWidth: {
                xs: "100%",
                sm: "700px",
                md: "900px",
              },
            }}
          >
            Prefer a quick call? Book a free strategy session.
          </Typography>
        </MotionBox>

        {/* Button Animation */}
        <MotionBox
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px rgba(99,102,241,0.2)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          sx={{
            position: "relative",
            zIndex: 1,
            display: "inline-flex",
            borderRadius: "28px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              // Add your click handler here
            }}
            sx={{
              minWidth: {
                xs: "145px",
                sm: "150px",
              },
              minHeight: {
                xs: "46px",
                sm: "48px",
              },
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
              lineHeight: "24px",
              textTransform: "none",
              backgroundColor: "#4f46e5",
              color: "#ffffff",
              borderRadius: "28px",
              px: {
                xs: "24px",
                sm: "32px",
                md: "40px",
              },
              py: {
                xs: "10px",
                sm: "12px",
              },
              boxShadow: "0 4px 14px rgba(79, 70, 229, 0.35)",

              "&:hover": {
                backgroundColor: "#4338ca",
                boxShadow: "0 6px 20px rgba(79, 70, 229, 0.45)",
              },
            }}
          >
            Book My Call
          </Button>
        </MotionBox>
      </MotionBox>
    </Box>
  );
};

export default StrategySessionSection;