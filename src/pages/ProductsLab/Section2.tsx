import React from "react";

import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const WhyWeBuildOurOwnProductsSection: React.FC = () => {
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
          lg: 15,
        },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #EAEAEA",
        overflow: "hidden",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.09) 0%, rgba(102,85,235,0) 70%)",
          top: "-330px",
          left: "-220px",
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
          bottom: "-280px",
          right: "-180px",
          pointerEvents: "none",
        },
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "5fr 7fr",
          },
          columnGap: {
            xs: 6,
            md: 8,
            lg: 10,
          },
          rowGap: {
            xs: 6,
            md: 8,
          },
          alignItems: "start",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ================= LEFT COLUMN ================= */}
        <Box>
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
          >
            <Typography
              component="h2"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: {
                  xs: "32px",
                  sm: "40px",
                  md: "46px",
                  lg: "52px",
                },
                lineHeight: 1.15,
                letterSpacing: "-1.2px",
                color: "#111111",
                mb: 3,
                maxWidth: "520px",
              }}
            >
              Why We Build{" "}
              <Box
                component="span"
                sx={{
                  color: "#6655EB",
                }}
              >
                Our Own Products
              </Box>
            </Typography>
          </MotionBox>

          {/* Purple Decorative Line */}
          <MotionBox
            variants={{
              hidden: {
                opacity: 0,
                width: 0,
              },
              visible: {
                opacity: 1,
                width: "60px",
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                },
              },
            }}
            sx={{
              height: "3px",
              width: "60px",
              background:
                "linear-gradient(90deg, #6655EB 0%, #9A8FFF 100%)",
              borderRadius: "10px",
            }}
          />
        </Box>

        {/* ================= RIGHT COLUMN ================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: "760px",
          }}
        >
          {/* First Paragraph */}
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
          >
            <Box
              sx={{
                p: { xs: 2.5, sm: 3, md: 3.5 },
                borderRadius: "18px",
                backgroundColor: "#F8F7FF",
                border: "1px solid #EBE8FF",
                transition:
                  "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "#D8D2FF",
                  boxShadow: "0 12px 30px rgba(102, 85, 235, 0.08)",
                },
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "17px",
                  },
                  lineHeight: "28px",
                  color: "#555555",
                  m: 0,
                }}
              >
                We don't just build for clients — we build for ourselves. Our
                proprietary products demonstrate our complete concept —
                development — launch — monetization capability.
              </Typography>
            </Box>
          </MotionBox>

          {/* Second Paragraph */}
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
                },
                lineHeight: "27px",
                color: "#707070",
                m: 0,
              }}
            >
              By operating our own software businesses, we encounter and solve
              the exact same challenges our clients face: user acquisition,
              scaling infrastructure, platform analytics, and direct commercial
              monetization. It serves as live, tangible proof of our engineering
              and execution standards.
            </Typography>
          </MotionBox>

          {/* Small Supporting Accent */}
          <MotionBox
            variants={{
              hidden: {
                opacity: 0,
                x: -15,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.15,
                },
              },
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              mt: 1,
            }}
          >
            <Box
              sx={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#6655EB",
                boxShadow: "0 0 0 5px rgba(102, 85, 235, 0.08)",
              }}
            />

            <Typography
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                color: "#888888",
              }}
            >
              Built. Operated. Proven.
            </Typography>
          </MotionBox>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default WhyWeBuildOurOwnProductsSection;