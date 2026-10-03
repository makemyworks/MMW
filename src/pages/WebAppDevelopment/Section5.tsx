import React from "react";

import { Box, Typography, Button, Stack } from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ReadyToBuildSection: React.FC = () => {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        borderBottom: "1px solid #EAEAEA",

        "&::before": {
          content: '""',
          position: "absolute",
          width: {
            xs: "300px",
            md: "550px",
          },
          height: {
            xs: "300px",
            md: "550px",
          },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.10) 0%, rgba(102,85,235,0) 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(154,143,255,0.07) 0%, rgba(154,143,255,0) 70%)",
          bottom: "-180px",
          right: "-100px",
          pointerEvents: "none",
        },
      }}
    >
      {/* ================= CONTENT ================= */}
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
        {/* ================= HEADING ================= */}
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
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "650px",
              md: "800px",
            },
            mb: {
              xs: 1.5,
              md: 2,
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
              lineHeight: {
                xs: 1.2,
                md: 1.2,
              },
              letterSpacing: {
                xs: "-0.5px",
                md: "-1px",
              },
              color: "#111111",
              m: 0,
            }}
          >
            Ready to Build{" "}
            <Box
              component="span"
              sx={{
                color: "#6655EB",
              }}
            >
              Your Platform?
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
              m: 0,
            }}
          >
            We work as an elegant extension of your product team. Let's
            schedule a deep-dive call and architecture review.
          </Typography>
        </MotionBox>

        {/* ================= BUTTONS ================= */}
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
            display: "flex",
            justifyContent: "center",
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
              width: {
                xs: "100%",
                sm: "auto",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* ================= PRIMARY BUTTON ================= */}
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
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },
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
                  background:
                    "linear-gradient(135deg, #6655EB 0%, #8577F5 100%)",
                  color: "#FFFFFF",
                  borderRadius: "100px",
                  px: {
                    xs: 3,
                    md: 4,
                  },
                  py: {
                    xs: 1.3,
                    md: 1.5,
                  },
                  boxShadow: "0 10px 25px rgba(102, 85, 235, 0.18)",
                  transition:
                    "background 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5B4BE0 0%, #7869ED 100%)",
                    boxShadow:
                      "0 14px 32px rgba(102, 85, 235, 0.28)",
                  },
                }}
              >
                Start a Project&nbsp; ↗
              </Button>
            </MotionBox>

            {/* ================= SECONDARY BUTTON ================= */}
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
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },
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
                  color: "#222222",
                  borderColor: "#DCDCDC",
                  borderRadius: "100px",
                  px: {
                    xs: 3,
                    md: 4,
                  },
                  py: {
                    xs: 1.3,
                    md: 1.5,
                  },
                  boxShadow: "none",
                  transition:
                    "background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    backgroundColor: "#F8F7FF",
                    borderColor: "#BDB5FF",
                    color: "#6655EB",
                    boxShadow:
                      "0 10px 30px rgba(102, 85, 235, 0.08)",
                  },
                }}
              >
                Book a Strategy Call&nbsp; ↗
              </Button>
            </MotionBox>
          </Stack>
        </MotionBox>

        {/* ================= ACCENT ================= */}
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
            mt: 5,
            transformOrigin: "center",
          }}
        />
      </Box>
    </MotionBox>
  );
};

export default ReadyToBuildSection;