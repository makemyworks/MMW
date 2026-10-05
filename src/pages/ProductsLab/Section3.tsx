import React from "react";
import { Box, Typography, Grid, Chip, Link } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

interface PortfolioItem {
  title: string;
  description: string;
  problem: string;
  tags: string[];
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    title: "TaskFlow",
    description:
      "AI-powered collaborative system designed to automate project organization, dependency tracking, and tasks for distributed teams.",
    problem:
      "Small teams lose hours syncing context across different boards and manual ticketing.",
    tags: ["React", "Next.js", "OpenAI API", "PostgreSQL"],
    image: "/Images/1.svg",
  },
  {
    title: "QuickInvoice",
    description:
      "Automated billing and real-time bank tracking engineered to streamline financial operations and collection cycles.",
    problem:
      "Freelancers and agencies suffer from delayed payments and tedious tracking overhead.",
    tags: ["Svelte", "Node.js", "Stripe Connect", "Redis"],
    image: "/Images/2.svg",
  },
  {
    title: "ContentPilot",
    description:
      "Intellectual content distributor utilizing generative logic to auto-schedule, test, and optimize social media outreach.",
    problem:
      "SaaS startups struggle to maintain structured social media visibility consistently.",
    tags: ["TypeScript", "Python", "FastAPI", "MongoDB"],
    image: "/Images/3.svg",
  },
  {
    title: "FormStack Pro",
    description:
      "Smart drag-and-drop form architecture built with intrinsic drop-off analytics and intelligent automated lead routing.",
    problem:
      "Generic form tools do not integrate deep behavioral metrics or logic easily.",
    tags: ["Vue.js", "Firebase", "Express", "Tailwind CSS"],
    image: "/Images/4.svg",
  },
  {
    title: "SEO Pulse",
    description:
      "Continuous organic presence monitoring dashboard delivering immediate alert protocols for indexing adjustments.",
    problem:
      "Search index drops remain unnoticed for days, resulting in dramatic traffic loss.",
    tags: ["React", "Next.js", "Google Search Console API", "InfluxDB"],
    image: "/Images/5.svg",
  },
  {
    title: "AdCreator AI",
    description:
      "Dynamic, script-to-video creative generator producing high-conversion vertical ad creative within minutes.",
    problem:
      "Traditional production houses are slow, expensive, and unsustainable for micro-experimentation.",
    tags: ["Flutter", "Stable Diffusion", "AWS Lambda", "Supabase"],
    image: "/Images/6.svg",
  },
];

const ActivePortfolioSection: React.FC = () => {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.1,
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

        "&::before": {
          content: '""',
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.07) 0%, rgba(102,85,235,0) 70%)",
          top: "-250px",
          right: "-150px",
          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(102,85,235,0.045) 0%, rgba(102,85,235,0) 70%)",
          bottom: "-220px",
          left: "-180px",
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          flexDirection: { xs: "column", sm: "row" },
          mb: { xs: 5, md: 7 },
          gap: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box>
          {/* Eyebrow */}
          <Typography
            sx={{
              fontFamily: "Sora, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#6655EB",
              mb: 1.5,
            }}
          >
            Selected Work
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
                lg: "54px",
              },
              lineHeight: 1.12,
              letterSpacing: "-1.5px",
              color: "#111111",
            }}
          >
            Active{" "}
            <Box
              component="span"
              sx={{
                color: "#6655EB",
              }}
            >
              Portfolio
            </Box>
          </Typography>
        </Box>

        <Typography
          component="span"
          sx={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "11px", sm: "12px" },
            letterSpacing: "0.12em",
            color: "#6655EB",
            border: "1px solid #DDD9FF",
            backgroundColor: "#F8F7FF",
            borderRadius: "100px",
            px: 2,
            py: 1,
          }}
        >
          06 SHIPPED APPLICATIONS
        </Typography>
      </MotionBox>

      {/* Portfolio Grid */}
      <Grid
        container
        spacing={{ xs: 3, md: 3.5 }}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {portfolioData.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={item.title}>
            <MotionBox
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
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
                backgroundColor: "#FFFFFF",
                border: "1px solid #E7E7E7",
                borderRadius: "20px",
                p: { xs: 2.5, md: 3 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",

                boxShadow: "0 5px 25px rgba(0, 0, 0, 0.035)",

                transition:
                  "border-color 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  borderColor: "#CFC9FF",
                  boxShadow:
                    "0 18px 45px rgba(102, 85, 235, 0.10)",
                },

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
              {/* Image Preview */}
              <Box
                component="div"
                sx={{
                  width: "100%",
                  height: { xs: "190px", md: "200px" },
                  borderRadius: "14px",
                  backgroundColor: "#F6F6F8",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mb: 3,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  p: 1.5,
                  overflow: "hidden",

                  transition: "transform 0.4s ease",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(102,85,235,0.03), transparent 60%)",
                    pointerEvents: "none",
                  },

                  "&:hover": {
                    transform: "scale(1.015)",
                  },
                }}
              >
                <Chip
                  label="ACTIVE"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "9px",
                    letterSpacing: "0.08em",
                    backgroundColor: "#6655EB",
                    color: "#FFFFFF",
                    height: "24px",
                    borderRadius: "6px",
                    position: "relative",
                    zIndex: 2,
                    boxShadow:
                      "0 5px 15px rgba(102, 85, 235, 0.25)",
                  }}
                />
              </Box>

              {/* Title */}
              <MotionTypography
                variant="h3"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "20px", md: "21px" },
                  lineHeight: "28px",
                  color: "#151515",
                  mb: 1.25,
                }}
              >
                {item.title}
              </MotionTypography>

              {/* Description */}
              <Typography
                component="p"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "22px",
                  color: "#6B6B6B",
                  mb: 2.5,
                }}
              >
                {item.description}
              </Typography>

              {/* Problem */}
              <Box
                sx={{
                  mb: 3,
                  backgroundColor: "#F8F7FF",
                  p: 2,
                  borderRadius: "12px",
                  border: "1px solid #EBE8FF",
                  position: "relative",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    color: "#6655EB",
                    display: "block",
                    mb: 0.7,
                  }}
                >
                  THE PROBLEM
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    fontSize: "12.5px",
                    lineHeight: "20px",
                    color: "#555555",
                    m: 0,
                  }}
                >
                  {item.problem}
                </Typography>
              </Box>

              {/* Tech Stack */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.8,
                  mb: 3,
                  mt: "auto",
                }}
              >
                {item.tags.map((tag, tagIndex) => (
                  <Chip
                    key={tagIndex}
                    label={tag}
                    variant="outlined"
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 500,
                      fontSize: "10px",
                      color: "#555555",
                      borderColor: "#DDDDDD",
                      backgroundColor: "#FFFFFF",
                      height: "27px",
                      borderRadius: "6px",

                      "&:hover": {
                        borderColor: "#BDB5FF",
                        backgroundColor: "#F8F7FF",
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Divider */}
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#EEEEEE",
                  mb: 2,
                }}
              />

              {/* View Live */}
              <Link
                href="#"
                underline="none"
                sx={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#161616",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  width: "fit-content",
                  transition:
                    "color 0.25s ease, transform 0.25s ease",

                  "&:hover": {
                    color: "#6655EB",
                    transform: "translateX(3px)",
                  },
                }}
              >
                View Live
                <Box
                  component="span"
                  sx={{
                    fontSize: "17px",
                    lineHeight: 1,
                  }}
                >
                  ↗
                </Box>
              </Link>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </MotionBox>
  );
};

export default ActivePortfolioSection;