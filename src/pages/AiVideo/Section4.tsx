
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ReadyToBuildSection = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.18,
          },
        },
      }}
      sx={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        color: "#111827",

        px: {
          xs: 2.5,
          sm: 4,
          md: 6,
          lg: 8,
        },

        py: {
          xs: 8,
          sm: 10,
          md: 12,
          lg: 14,
        },

        width: "100%",
        boxSizing: "border-box",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        overflow: "hidden",

        borderTop: "1px solid #E8E7F0",

        // Subtle purple ambient glow
        "&::before": {
          content: '""',
          position: "absolute",

          width: {
            xs: "280px",
            sm: "380px",
            md: "550px",
          },

          height: {
            xs: "280px",
            sm: "380px",
            md: "550px",
          },

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(102,85,235,0.14) 0%, rgba(139,92,246,0.06) 35%, rgba(102,85,235,0) 70%)",

          top: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",

          pointerEvents: "none",
        },
      }}
    >
      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <MotionBox
          variants={{
            hidden: {
              opacity: 0,
              y: 45,
              filter: "blur(8px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
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
                xs: "30px",
                sm: "38px",
                md: "44px",
                lg: "48px",
              },

              lineHeight: 1.2,

              letterSpacing: {
                xs: "-0.5px",
                md: "-1px",
              },

              // Navy → purple → violet gradient
              background:
                "linear-gradient(90deg, #111827 0%, #3B2FA3 45%, #6655EB 75%, #8B5CF6 100%)",

              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",

              mb: {
                xs: 1.5,
                md: 2,
              },

              maxWidth: {
                xs: "100%",
                sm: "650px",
                md: "800px",
              },
            }}
          >
            Ready to Scale Your Content?
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
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
                md: "18px",
              },

              lineHeight: {
                xs: "23px",
                sm: "25px",
                md: "28px",
              },

              color: "#687080",

              maxWidth: {
                xs: "100%",
                sm: "550px",
                md: "650px",
              },

              mb: {
                xs: 4,
                sm: 4.5,
                md: 5,
              },
            }}
          >
            Get custom high-fidelity commercial creatives or weeks of
            native vertical content queued up effortlessly. Let's draft
            your script.
          </Typography>
        </MotionBox>

        {/* Buttons */}
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
        >
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={{
              xs: 1.5,
              sm: 2,
            }}
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Primary Button */}
            <MotionBox
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },

                  minWidth: {
                    xs: "220px",
                    sm: "170px",
                  },

                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,

                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  textTransform: "none",

                  // Purple gradient
                  background:
                    "linear-gradient(135deg, #5141D9 0%, #6655EB 50%, #8B5CF6 100%)",

                  color: "#FFFFFF",

                  borderRadius: "28px",

                  px: {
                    xs: 3,
                    md: 4,
                  },

                  py: {
                    xs: 1.3,
                    md: 1.5,
                  },

                  boxShadow:
                    "0 8px 25px rgba(102, 85, 235, 0.22)",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #4535C5 0%, #5A49E2 50%, #7C4FE8 100%)",

                    boxShadow:
                      "0 12px 35px rgba(102, 85, 235, 0.30)",
                  },
                }}
              >
                Start a Project
              </Button>
            </MotionBox>

            {/* Secondary Button */}
            <MotionBox
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },

                  minWidth: {
                    xs: "220px",
                    sm: "200px",
                  },

                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,

                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  textTransform: "none",

                  backgroundColor: "#FFFFFF",

                  color: "#3B2FA3",

                  border: "1px solid #D9D5F5",

                  borderRadius: "28px",

                  px: {
                    xs: 3,
                    md: 4,
                  },

                  py: {
                    xs: 1.3,
                    md: 1.5,
                  },

                  boxShadow: "none",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: "#F7F5FF",

                    borderColor: "#6655EB",

                    color: "#5141D9",

                    boxShadow:
                      "0 10px 30px rgba(102, 85, 235, 0.10)",
                  },
                }}
              >
                Book a Strategy Call
              </Button>
            </MotionBox>
          </Stack>
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default ReadyToBuildSection;
