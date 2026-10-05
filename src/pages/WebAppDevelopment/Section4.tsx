import React from "react";

import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const processSteps = [
  {
    step: "STEP 01",
    title: "Discovery",
    description:
      "Deconstruct product requirements and define the minimal architecture plan.",
  },
  {
    step: "STEP 02",
    title: "Design & UX",
    description:
      "Interactive Figma wireframes, style mapping, and complete system components.",
  },
  {
    step: "STEP 03",
    title: "Development",
    description:
      "Engineered cleanly with robust unit testing, active code reviews, and fluid CI/CD.",
  },
  {
    step: "STEP 04",
    title: "Deployment",
    description:
      "Secure cloud staging, performance tuning, and final production server release.",
  },
  {
    step: "STEP 05",
    title: "Support",
    description:
      "Active system health checks, package maintenance, and incremental feature updates.",
  },
];

const OurProcessSection: React.FC = () => {
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
        overflow: "hidden",
        borderBottom: "1px solid #EAEAEA",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.09) 0%, rgba(102,85,235,0) 70%)",
          top: "-380px",
          right: "-200px",
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
          left: "-200px",
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
            mb: 1.2,
          }}
        >
          How We Work
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
            lineHeight: 1.2,
            letterSpacing: {
              xs: "-0.5px",
              md: "-1px",
            },
            color: "#111111",
            mb: {
              xs: 1,
              md: 1.5,
            },
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              color: "#6655EB",
            }}
          >
            Process
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
          From early requirements mapping to scaled digital growth — we align
          at every milestone.
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

      {/* ================= PROCESS CARDS ================= */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          },
          gap: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {processSteps.map((item, index) => (
          <MotionBox
            key={index}
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
              y: -8,
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
              width: "100%",
              minHeight: {
                xs: "auto",
                sm: "200px",
                md: "220px",
              },
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              position: "relative",
              overflow: "hidden",
              transition:
                "border-color 0.3s ease, box-shadow 0.3s ease",

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
            {/* Step Number */}
            <MotionBox
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              sx={{
                mb: {
                  xs: 1.5,
                  md: 2,
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "28px",
                  px: 1.3,
                  borderRadius: "100px",
                  backgroundColor: "#F8F7FF",
                  border: "1px solid #E6E1FF",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    xs: "10px",
                    sm: "11px",
                  },
                  letterSpacing: "0.06em",
                  color: "#6655EB",
                }}
              >
                {item.step}
              </Typography>
            </MotionBox>

            {/* Title */}
            <Typography
              component="h3"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                fontSize: {
                  xs: "18px",
                  sm: "19px",
                  md: "20px",
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
              {item.title}
            </Typography>

            {/* Description */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 400,
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                },
                lineHeight: {
                  xs: "21px",
                  md: "22px",
                },
                color: "#707070",
                m: 0,
              }}
            >
              {item.description}
            </Typography>

            {/* Step Indicator */}
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
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#F8F7FF",
                  border: "1px solid #E6E1FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6655EB",
                  fontSize: "12px",
                  fontWeight: 700,
                  transition:
                    "background-color 0.25s ease, color 0.25s ease, transform 0.25s ease",
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
        ))}
      </Box>
    </MotionBox>
  );
};

export default OurProcessSection;