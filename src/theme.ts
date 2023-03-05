import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    columnHeader: React.CSSProperties;
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    columnHeader?: React.CSSProperties;
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    columnHeader: true;
    title: true;
  }
}

export const Theme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        "Helvetica, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      WebkitFontSmoothing: "antialiased"
    },
    h5: {
      color: "#666666",
      fontWeight: 700
    },
    columnHeader: {
      fontSize: "13px",
      color: "#747174",
      fontWeight: 600
    },
    title: {
      fontSize: "24px",
      color: "#666666",
      fontWeight: 400
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "initial",
          letterSpacing: 1.25,
          height: "42px",
          paddingLeft: "16px",
          paddingRight: "16px"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "0 !important"
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          ":before": {
            display: "none"
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f6f6f6",
          header: {
            boxShadow: "none !important"
          },
          main: {
            padding: "24px !important"
          },
          ".MuiListItem-root:hover": {
            background: "#f3f2f0"
          },
          "	.Mui-selected": {
            color: "black !important",
            background: "#F9F8F8 !important"
          },
          "	.Mui-selected:hover": {
            background: "#F3F2F0 !important"
          },
          ".Mui-selected svg": {
            fill: "black"
          },
          "nav .MuiTypography-root": {
            fontSize: 14
          }
        }
      }
    }
  }
});
