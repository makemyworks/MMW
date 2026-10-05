
import React from "react";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const whyAIPoweredItems = [
  {
    title: "Faster Turnaround",
    description:
      "We deploy complete high-fidelity variations in days rather than waiting for weeks of scheduling.",
  },
  {
    title: "Lower Production Costs",
    description:
      "Omit studio fees, model casting, travel, and complex logistics of classical filming.",
  },
  {
    title: "A/B Hook Testing at Scale",
    description:
      "Test dozens of dynamic script hooks and visual clips to instantly optimize ad spend.",
  },
];

const whoIsThisForItems = [
  {
    title: "D2C Brands",
    description:
      "Brands running high-velocity paid acquisition looking to scale hook testing.",
  },
  {
    title: "E-Commerce Builders",
    description:
      "Curated shops looking to populate hundreds of product lines with sleek short video reels.",
  },
  {
    title: "Startups & Growth Teams",
    description:
      "Agile teams that need automated customer funnels on social platforms.",
  },
];

const WhyAIPoweredSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
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
        color: "#111827",
        px: {
          xs: 2.5,
          sm: 4,
          md: 6,
          lg: 8,
        },
        py: {
          xs: 7,
          sm: 8,
          md: 10,
          lg: 12,
        },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #E8E7F0",
        overflow: "hidden",
      }}
    >
      {/* Main Two Column Layout */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: {
            xs: 6,
            md: 8,
            lg: 10,
          },
        }}
      >
        {/* ======================================
            LEFT COLUMN — WHY AI-POWERED?
        ======================================= */}

        <Box>
          {/* Heading Animation */}
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
              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                margin: 0,
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                  md: "38px",
                },
                lineHeight: 1.2,
                letterSpacing: "-0.8px",

                background:
                  "linear-gradient(90deg, #111827 0%, #3B2FA3 50%, #6655EB 100%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why AI-Powered?
            </Typography>
          </MotionBox>

          {/* Left Items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                xs: 3,
                md: 3.5,
              },
            }}
          >
            {whyAIPoweredItems.map((item) => (
              <MotionBox
                key={item.title}
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
                whileHover={{
                  x: 6,
                }}
                sx={{
                  position: "relative",
                  pl: {
                    xs: 2,
                    md: 2.5,
                  },
                  borderLeft: "2px solid #DDD9FF",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    borderLeftColor: "#6655EB",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    margin: 0,
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      xs: "16px",
                      sm: "17px",
                      md: "18px",
                    },
                    lineHeight: "26px",

                    color: "#5141D9",

                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      md: "15px",
                    },
                    lineHeight: "22px",

                    color: "#687080",

                    m: 0,
                  }}
                >
                  {item.description}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </Box>

        {/* ======================================
            RIGHT COLUMN — WHO IS THIS FOR?
        ======================================= */}

        <Box>
          {/* Heading Animation */}
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
              mb: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                margin: 0,
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: {
                  xs: "28px",
                  sm: "32px",
                  md: "38px",
                },
                lineHeight: 1.2,
                letterSpacing: "-0.8px",

                background:
                  "linear-gradient(90deg, #111827 0%, #3B2FA3 50%, #6655EB 100%)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Who Is This For?
            </Typography>
          </MotionBox>

          {/* Right Items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                xs: 3,
                md: 3.5,
              },
            }}
          >
            {whoIsThisForItems.map((item) => (
              <MotionBox
                key={item.title}
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
                whileHover={{
                  x: 6,
                }}
                sx={{
                  position: "relative",
                  pl: {
                    xs: 2,
                    md: 2.5,
                  },
                  borderLeft: "2px solid #DDD9FF",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    borderLeftColor: "#6655EB",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    margin: 0,
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      xs: "16px",
                      sm: "17px",
                      md: "18px",
                    },
                    lineHeight: "26px",

                    color: "#5141D9",

                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      md: "15px",
                    },
                    lineHeight: "22px",

                    color: "#687080",

                    m: 0,
                  }}
                >
                  {item.description}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Box>
    </MotionBox>
  );
};

export default WhyAIPoweredSection;
