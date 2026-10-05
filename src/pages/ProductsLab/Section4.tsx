import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: "01",
    title: "Ideate & Vet",
    description:
      "We analyze market pain-points, validate keyword search demand, and run cost-benefit simulations before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "We craft lightweight high-fidelity user experiences focused strictly on core features and conversion loops.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "We utilize our optimized tech stacks (Next.js, FastAPI, Flutter) for rapid product deployment to edge cloud servers.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We trigger organic growth plans, SEO strategies, and automated ad campaigns to gain initial traffic instantly.",
  },
  {
    number: "05",
    title: "Monetize",
    description:
      "We integrate transactional Stripe architecture, subscription analytics, and paywalls from Day 1.",
  },
];

const FromConceptToRevenueSection: React.FC = () => {
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
            staggerChildren: 0.12,
          },
        },
      }}
      sx={{
        backgroundColor: "#FFFFFF",
        color: "#111111",
        px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        py: { xs: 7, sm: 8, md: 10, lg: 12 },
        width: "100%",
        boxSizing: "border-box",
        borderBottom: "1px solid #EAEAEA",
        overflow: "hidden",
        position: "relative",

        // subtle background glow
        "&::before": {
          content: '""',
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.08) 0%, rgba(102,85,235,0) 70%)",
          top: "-180px",
          right: "-100px",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.05) 0%, rgba(102,85,235,0) 70%)",
          bottom: "-180px",
          left: "-120px",
          pointerEvents: "none",
        },
      }}
    >
      {/* Section Header */}
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
          mb: { xs: 6, md: 10 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Small Label */}
        <Typography
          sx={{
            fontFamily: "Sora, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6655EB",
            mb: 2,
          }}
        >
          Our Process
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "48px",
              lg: "56px",
            },
            lineHeight: 1.12,
            letterSpacing: "-1.5px",
            color: "#111111",
            mb: 2,
          }}
        >
          From Concept to{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
            }}
          >
            Revenue
          </Box>
        </Typography>

        <Typography
          component="p"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", sm: "16px", md: "17px" },
            lineHeight: "27px",
            color: "#6B6B6B",
            maxWidth: "650px",
            m: 0,
          }}
        >
          Our strict end-to-end operational playbook utilized on every
          proprietary build inside the Lab.
        </Typography>
      </MotionBox>

      {/* Steps Grid */}
      <Grid
        container
        spacing={{ xs: 5, sm: 4, md: 3 }}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {stepsData.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={step.number}>
            <MotionBox
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
                height: "100%",
                p: { xs: 0, md: 2 },
                borderRadius: "18px",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#F8F7FF",
                },
              }}
            >
              {/* Connecting Line */}
              {index < stepsData.length - 1 && (
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    top: "24px",
                    left: "60px",
                    width: "calc(100% + 12px)",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, #D8D3FF 0%, #EEEEEE 100%)",
                    zIndex: -1,
                  }}
                />
              )}

              {/* Step Number */}
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #6655EB 0%, #8A7CFF 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  boxShadow: "0 8px 25px rgba(102, 85, 235, 0.22)",
                  position: "relative",
                  zIndex: 2,

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: "-5px",
                    borderRadius: "50%",
                    border: "1px solid rgba(102, 85, 235, 0.15)",
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    color: "#FFFFFF",
                  }}
                >
                  {step.number}
                </Typography>
              </Box>

              {/* Title */}
              <MotionTypography
                variant="h3"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "18px", md: "19px" },
                  lineHeight: "28px",
                  color: "#161616",
                  mb: 1.5,
                }}
              >
                {step.title}
              </MotionTypography>

              {/* Description */}
              <Typography
                component="p"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "13px", sm: "14px" },
                  lineHeight: "23px",
                  color: "#707070",
                  m: 0,
                  maxWidth: "240px",
                }}
              >
                {step.description}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default FromConceptToRevenueSection;