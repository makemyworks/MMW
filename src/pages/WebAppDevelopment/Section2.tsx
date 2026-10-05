import React from "react";

import { Box, Typography, Grid } from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const servicesData = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Complex architectures built cleanly using React, Next.js, Node.js, and robust Python backends.",
  },
  {
    title: "SaaS Platform Dev",
    description:
      "Subscription-based multi-tenant software designed for modern customer acquisition and scaling.",
  },
  {
    title: "Responsive Corporate Sites",
    description:
      "Stunning corporate sites and high-converting marketing landers styled cleanly with Tailwind CSS.",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Native-performing iOS & Android mobile apps compiled elegantly with Flutter and React Native.",
  },
  {
    title: "App Store Deployment",
    description:
      "End-to-end release workflows for the Apple App Store and Google Play, handling all compliance rules.",
  },
  {
    title: "Interactive Portals & Dashboards",
    description:
      "Data-heavy client portals, administration panels, and stateful interactive visual charts.",
  },
  {
    title: "REST & GraphQL APIs",
    description:
      "Extremely fast, secure, and self-documenting server endpoints built for fluid front-end integration.",
  },
  {
    title: "Database Architecture",
    description:
      "Expert PostgreSQL design, clustering, and cloud management using Supabase, Firebase, and Prisma.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automated scaling, serverless microservices, CI/CD pipelines, and secure cloud environments on AWS.",
  },
  {
    title: "Performance Optimization",
    description:
      "Refactoring database queries, caching layers, and front-end bundles to hit a 100 on Lighthouse/Core Web Vitals.",
  },
];

const WhatWeBuildSection: React.FC = () => {
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
            staggerChildren: 0.12,
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
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.09) 0%, rgba(102,85,235,0) 70%)",
          top: "-400px",
          right: "-220px",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(154,143,255,0.07) 0%, rgba(154,143,255,0) 70%)",
          bottom: "-300px",
          left: "-220px",
          pointerEvents: "none",
        },
      }}
    >
      {/* ================= SECTION HEADER ================= */}
      <MotionBox
        variants={{
          hidden: {
            opacity: 0,
            y: 40,
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
          mb: {
            xs: 5,
            sm: 6,
            md: 7,
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Small Section Label */}
        <Typography
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 600,
            fontSize: {
              xs: "10px",
              sm: "11px",
              md: "12px",
            },
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: "#6655EB",
            mb: 1.5,
          }}
        >
          Engineering Capabilities
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "30px",
              sm: "36px",
              md: "44px",
              lg: "48px",
            },
            lineHeight: {
              xs: 1.2,
              md: 1.2,
            },
            letterSpacing: {
              xs: "-0.5px",
              md: "-1.2px",
            },
            color: "#111111",
            mb: {
              xs: 1,
              md: 1.5,
            },
          }}
        >
          What We{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
            }}
          >
            Build
          </Box>
        </Typography>

        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "18px",
            },
            lineHeight: {
              xs: "23px",
              sm: "25px",
              md: "28px",
            },
            color: "#6B6B6B",
            maxWidth: {
              xs: "100%",
              sm: "550px",
              md: "620px",
            },
            m: 0,
          }}
        >
          An overview of our core engineering capabilities and high-fidelity
          tech deployment.
        </Typography>

        {/* Accent Line */}
        <Box
          sx={{
            width: "60px",
            height: "3px",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #6655EB, #9A8FFF)",
            mt: 3,
          }}
        />
      </MotionBox>

      {/* ================= SERVICES GRID ================= */}
      <Grid
        container
        spacing={{
          xs: 2,
          sm: 2.5,
          md: 3,
        }}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {servicesData.map((service, index) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={index}
          >
            <MotionBox
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -7,
                borderColor: "#D8D2FF",
                boxShadow: "0 16px 40px rgba(102, 85, 235, 0.10)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              sx={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E7E7E7",
                borderRadius: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                },
                p: {
                  xs: 2.5,
                  sm: 3,
                  md: 3.5,
                },
                minHeight: {
                  xs: "auto",
                  sm: "190px",
                  md: "210px",
                },
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #6655EB, #9A8FFF)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },

                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >
              {/* Service Number */}
              <Typography
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: "10px",
                  letterSpacing: "1px",
                  color: "#A0A0A0",
                  mb: 2,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Typography>

              <MotionTypography
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    md: "19px",
                  },
                  lineHeight: {
                    xs: "25px",
                    md: "28px",
                  },
                  color: "#161616",
                  mb: {
                    xs: 1,
                    md: 1.5,
                  },
                }}
              >
                {service.title}
              </MotionTypography>

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
                  lineHeight: {
                    xs: "21px",
                    md: "24px",
                  },
                  color: "#707070",
                  m: 0,
                }}
              >
                {service.description}
              </Typography>

              {/* Bottom Accent */}
              <Box
                sx={{
                  mt: "auto",
                  pt: 2.5,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#F8F7FF",
                    border: "1px solid #E6E1FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6655EB",
                    fontSize: "11px",
                    fontWeight: 700,
                    transition:
                      "background-color 0.25s ease, transform 0.25s ease",
                    ".MuiBox-root:hover &": {
                      backgroundColor: "#6655EB",
                      color: "#FFFFFF",
                      transform: "rotate(45deg)",
                    },
                  }}
                >
                  ↗
                </Box>
              </Box>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default WhatWeBuildSection;