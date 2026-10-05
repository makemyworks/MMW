import React, { ReactNode, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  TextFieldProps,
  SxProps,
  Theme,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionBox = motion.create(Box);

const services = [
  "Website & App Development",
  "AI Solutions & Automation",
  "Branding & Graphic Design",
  "Video & Creative Content",
  "Product Image & Fashion Visuals",
  "SEO & Digital Marketing",
  "E-commerce & Business Solutions",
  "Maintenance & Technical Support",
  "Other Custom Solutions",
];

const DEFAULT_BUDGET = "₹1.5 lakh – ₹5 lakh";

/* =========================================
    ANIMATION VARIANTS
========================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================
    MAIN COMPONENT
========================================= */

const API_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/+$/, "");

const ProjectBrief: React.FC = () => {
  /* ---------- API / FORM STATE ---------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: DEFAULT_BUDGET,
    notes: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([
    services[0],
  ]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceToggle = (service: string, checked: boolean) => {
    setSelectedServices((prev) =>
      checked ? [...prev, service] : prev.filter((s) => s !== service)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      await axios.post(
        "https://alphazetaworld.onrender.com/api/contacts",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `${selectedServices[0] || "General"} inquiry`,
          Message: `${formData.notes}\n\nCompany: ${formData.company}\nBudget: ${formData.budget}`,
          service: selectedServices.join(", "),
        },
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccessMsg(
        "Project brief sent successfully! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: DEFAULT_BUDGET,
        notes: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#111111",
        px: {
          xs: "16px",
          sm: "24px",
          md: "40px",
          lg: "50px",
        },
        py: {
          xs: "28px",
          sm: "35px",
          md: "40px",
        },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        {/* =================================
            MAIN TWO COLUMN LAYOUT
        ================================== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "7fr 5fr",
            },
            gap: {
              xs: 3,
              sm: 4,
              md: 5.25,
            },
            margin: "0 auto",
            alignItems: "flex-start",
            maxWidth: "1250px",
            width: "100%",
          }}
        >
          {/* =================================
              LEFT — PROJECT BRIEF
          ================================== */}
          <MotionBox
            variants={cardVariants}
            sx={{
              width: "100%",
              minHeight: {
                md: "594px",
              },
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
              px: {
                xs: "18px",
                sm: "28px",
                md: "31px",
              },
              py: {
                xs: "24px",
                sm: "27px",
                md: "26px",
              },
              boxSizing: "border-box",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                borderColor: "#cbd5e1",
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
              },
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              {/* Title */}
              <MotionBox variants={fadeUp} sx={{ mb: "21px" }}>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                    },
                    lineHeight: "22px",
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  Project Brief
                </Typography>
              </MotionBox>

              {/* NAME / EMAIL */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },
                  columnGap: {
                    xs: 0,
                    sm: 1.25,
                  },
                  rowGap: {
                    xs: 1.5,
                    sm: 1.45,
                  },
                }}
              >
                {/* FULL NAME */}
                <MotionBox variants={fadeUp}>
                  <FieldLabel>Full Name *</FieldLabel>
                  <StyledTextField
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Miller"
                    fullWidth
                  />
                </MotionBox>

                {/* EMAIL */}
                <MotionBox variants={fadeUp}>
                  <FieldLabel>Email Address *</FieldLabel>
                  <StyledTextField
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    fullWidth
                  />
                </MotionBox>

                {/* PHONE */}
                <MotionBox variants={fadeUp}>
                  <FieldLabel>WhatsApp / Phone *</FieldLabel>
                  <StyledTextField
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    fullWidth
                  />
                </MotionBox>

                {/* COMPANY */}
                <MotionBox variants={fadeUp}>
                  <FieldLabel>Company Name</FieldLabel>
                  <StyledTextField
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Stark Industries"
                    fullWidth
                  />
                </MotionBox>
              </Box>

              {/* SERVICE */}
              <MotionBox
                variants={fadeUp}
                sx={{
                  mt: {
                    xs: "18px",
                    sm: "11px",
                  },
                }}
              >
                <FieldLabel>Service Needed *</FieldLabel>
                <Box sx={{ mt: "2px" }}>
                  {services.map((service, index) => (
                    <FormControlLabel
                      key={service}
                      control={
                        <Checkbox
                          checked={selectedServices.includes(service)}
                          onChange={(e) =>
                            handleServiceToggle(service, e.target.checked)
                          }
                          size="small"
                          sx={{
                            p: 0,
                            mr: "8px",
                            color: "#cbd5e1",
                            "&.Mui-checked": {
                              color: "#6366f1",
                            },
                            "& .MuiSvgIcon-root": {
                              fontSize: "16px",
                            },
                          }}
                        />
                      }
                      label={service}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: "22px",
                        height: "auto",
                        m: 0,
                        "& .MuiFormControlLabel-label": {
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: {
                            xs: "11px",
                            sm: "11.5px",
                          },
                          lineHeight: "14px",
                          color: index === 0 ? "#1e293b" : "#475569",
                          fontWeight: index === 0 ? 600 : 400,
                        },
                      }}
                    />
                  ))}
                </Box>
              </MotionBox>

              {/* BUDGET */}
              <MotionBox
                variants={fadeUp}
                sx={{
                  mt: "14px",
                }}
              >
                <FieldLabel>Estimate Budget *</FieldLabel>
                <FormControl fullWidth>
                  <Select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        budget: e.target.value as string,
                      }))
                    }
                    IconComponent={ArrowForwardIcon}
                    sx={{
                      height: "36px",
                      backgroundColor: "#ffffff",
                      borderRadius: "6px",
                      color: "#1e293b",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "11px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#cbd5e1",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#94a3b8",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#6366f1",
                      },
                      "& .MuiSelect-select": {
                        py: "9px",
                        px: "10px",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#64748b",
                        fontSize: "16px",
                        right: "9px",
                      },
                    }}
                    MenuProps={{
                      slotProps: {
                        paper: {
                          sx: {
                            backgroundColor: "#ffffff",
                            color: "#1e293b",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="₹1.5 lakh – ₹5 lakh">
                      ₹1.5 lakh – ₹5 lakh
                    </MenuItem>
                    <MenuItem value="₹5 lakh – ₹10 lakh">
                      ₹5 lakh – ₹10 lakh
                    </MenuItem>
                    <MenuItem value="₹10 lakh+">₹10 lakh+</MenuItem>
                  </Select>
                </FormControl>
              </MotionBox>

              {/* PROJECT NOTES */}
              <MotionBox
                variants={fadeUp}
                sx={{
                  mt: "14px",
                }}
              >
                <FieldLabel>Project Scope & Notes *</FieldLabel>
                <TextField
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Describe what you want us to build, targets, and any specific timelines."
                  sx={{
                    mt: "1px",
                    "& .MuiOutlinedInput-root": {
                      minHeight: "81px",
                      alignItems: "flex-start",
                      borderRadius: "6px",
                      backgroundColor: "#ffffff",
                      color: "#1e293b",
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "11px",
                      p: 0,
                      "& fieldset": {
                        borderColor: "#cbd5e1",
                      },
                      "&:hover fieldset": {
                        borderColor: "#94a3b8",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#6366f1",
                      },
                      "& textarea": {
                        padding: "10px",
                        lineHeight: "16px",
                      },
                    },
                    "& input::placeholder, & textarea::placeholder": {
                      color: "#94a3b8",
                      opacity: 1,
                    },
                  }}
                />
              </MotionBox>

              {/* SUBMIT */}
              <MotionBox
                variants={fadeUp}
                whileHover={{
                  scale: 1.015,
                  boxShadow: "0 8px 25px rgba(99,102,241,0.25)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                sx={{
                  mt: "21px",
                }}
              >
                <Button
                  type="submit"
                  disabled={loading}
                  fullWidth
                  disableElevation
                  sx={{
                    height: "38px",
                    borderRadius: "22px",
                    backgroundColor: "#4f46e5",
                    color: "#ffffff",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#4338ca",
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "#4f46e5",
                      color: "#ffffff",
                      opacity: 0.6,
                    },
                  }}
                >
                  {loading ? "Sending..." : "Send Project Brief"}
                </Button>
              </MotionBox>

              {/* SUCCESS MESSAGE */}
              {successMsg && (
                <Typography
                  sx={{
                    mt: "12px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "11px",
                    color: "#16a34a",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {successMsg}
                </Typography>
              )}
            </Box>
          </MotionBox>

          {/* =================================
              RIGHT — ALTERNATIVE OPTIONS
          ================================== */}
          <MotionBox
            variants={containerVariants}
            sx={{
              width: "100%",
              pt: {
                xs: 0,
                md: "1px",
              },
            }}
          >
            {/* Eyebrow */}
            <MotionBox
              variants={fadeUp}
              sx={{
                mb: "5px",
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "9px",
                  lineHeight: "11px",
                  fontWeight: 700,
                  color: "#4f46e5",
                  textTransform: "uppercase",
                }}
              >
                DIRECT CONNECT
              </Typography>
            </MotionBox>

            {/* Heading */}
            <MotionBox
              variants={fadeUp}
              sx={{
                mb: "21px",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: {
                    xs: "20px",
                    sm: "21px",
                  },
                  lineHeight: "24px",
                  fontWeight: 800,
                  color: "#0f172a",
                  m: 0,
                }}
              >
                Alternative Options
              </Typography>
            </MotionBox>

            {/* STRATEGY CALL */}
            <MotionBox variants={cardVariants}>
              <AlternativeCard>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    mb: "12px",
                  }}
                >
                  <IconCircle background="#6366f1">
                    <AutoAwesomeIcon
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                      }}
                    />
                  </IconCircle>
                  <Typography sx={CardTitle}>Book a Strategy Call</Typography>
                </Box>
                <Typography sx={CardDescription}>
                  Schedule a 15-minute consultation directly with our
                  product team. Free, uncompromised technical advice.
                </Typography>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    mt: "11px",
                    color: "#4f46e5",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  Schedule via Cal.com
                  <ArrowUpwardIcon
                    sx={{
                      fontSize: "13px",
                      transform: "rotate(45deg)",
                    }}
                  />
                </Box>
              </AlternativeCard>
            </MotionBox>

            {/* WHATSAPP */}
            <MotionBox
              variants={cardVariants}
              sx={{
                mt: "21px",
              }}
            >
              <AlternativeCard>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                    mb: "12px",
                  }}
                >
                  <IconCircle background="#10b981">
                    <WhatsAppIcon
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                      }}
                    />
                  </IconCircle>
                  <Typography sx={CardTitle}>
                    Quick Chat on WhatsApp
                  </Typography>
                </Box>
                <Typography sx={CardDescription}>
                  Need answers immediately? Send us a quick brief
                  directly on WhatsApp for instant feedback.
                </Typography>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    mt: "11px",
                    color: "#059669",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    textDecoration: "underline",
                  }}
                >
                  Open WhatsApp Chat
                  <ArrowUpwardIcon
                    sx={{
                      fontSize: "13px",
                      transform: "rotate(45deg)",
                    }}
                  />
                </Box>
              </AlternativeCard>
            </MotionBox>

            {/* OFFICE */}
            <MotionBox
              variants={cardVariants}
              sx={{
                mt: "21px",
              }}
            >
              <AlternativeCard
                sx={{
                  minHeight: "105px",
                }}
              >
                <Typography
                  sx={{
                    ...CardTitle,
                    mb: "9px",
                  }}
                >
                  Studio Head Office
                </Typography>
                <Typography sx={CardDescription}>
                  Alpha Zeta Lab
                  <br />
                  404, Tech Hub, Phase 2
                  <br />
                  Silicon City, IN 560001
                </Typography>
              </AlternativeCard>
            </MotionBox>
          </MotionBox>
        </Box>
      </MotionBox>
    </Box>
  );
};

/* =========================================
    REUSABLE COMPONENTS
========================================= */

interface FieldLabelProps {
  children: ReactNode;
}

const FieldLabel: React.FC<FieldLabelProps> = ({ children }) => (
  <Typography
    component="label"
    sx={{
      display: "block",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "10px",
      lineHeight: "13px",
      fontWeight: 700,
      color: "#334155",
      mb: "5px",
    }}
  >
    {children}
  </Typography>
);

const StyledTextField: React.FC<TextFieldProps> = (props) => (
  <TextField
    {...props}
    variant="outlined"
    size="small"
    sx={{
      "& .MuiOutlinedInput-root": {
        height: "35px",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
        color: "#1e293b",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "11px",
        "& fieldset": {
          borderColor: "#cbd5e1",
        },
        "&:hover fieldset": {
          borderColor: "#94a3b8",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#6366f1",
        },
      },
      "& input": {
        padding: "9px 10px",
      },
      "& input::placeholder": {
        color: "#94a3b8",
        opacity: 1,
      },
      ...props.sx,
    }}
  />
);

interface AlternativeCardProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const AlternativeCard: React.FC<AlternativeCardProps> = ({
  children,
  sx = {},
}) => (
  <MotionBox
    whileHover={{
      y: -4,
      borderColor: "#94a3b8",
      boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
    }}
    transition={{
      duration: 0.25,
      ease: "easeOut",
    }}
    sx={{
      width: "100%",
      minHeight: "123px",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "11px",
      px: "16px",
      py: "15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
      ...sx,
    }}
  >
    {children}
  </MotionBox>
);

interface IconCircleProps {
  children: ReactNode;
  background: string;
}

const IconCircle: React.FC<IconCircleProps> = ({ children, background }) => (
  <MotionBox
    whileHover={{
      scale: 1.08,
      rotate: 5,
    }}
    transition={{
      duration: 0.25,
    }}
    sx={{
      width: "28px",
      height: "28px",
      minWidth: "28px",
      borderRadius: "50%",
      backgroundColor: background,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </MotionBox>
);

const CardTitle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "13px",
  lineHeight: "17px",
  fontWeight: 700,
  color: "#0f172a",
};

const CardDescription = {
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "10.5px",
  lineHeight: "15px",
  fontWeight: 400,
  color: "#64748b",
};

export default ProjectBrief;