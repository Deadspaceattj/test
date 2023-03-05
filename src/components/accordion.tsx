import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MyAccordionItem = (props: {
  onChange: (event: React.SyntheticEvent, expanded: boolean) => void;
  children: NonNullable<React.ReactNode>;
  id: any;
  required?: boolean;
  expanded: boolean;
  square?: boolean;
  disableGutters?: boolean;
  disabled?: boolean;
  title: string;
  description?: string | null;
  label?: string | null;
  noClick?: boolean;
}) => {
  const {
    children,
    id,
    required = false,
    expanded = false,
    square = true,
    disableGutters = true,
    disabled = false,
    title = "Title",
    description = null,
    label = null,
    onChange,
    noClick = false
  } = props;

  return (
    <Accordion
      expanded={noClick ? true : expanded}
      onChange={!noClick && onChange}
      square={square}
      disableGutters={disableGutters}
      disabled={!noClick && disabled}
      sx={{
        ".MuiAccordionSummary-root": {
          cursor: noClick ? "default !important" : "pointer",
          borderTop: "1px solid rgba(224, 224, 224, 1)",
          padding: "16px 24px 0"
        },
        ".MuiAccordionDetails-root": {
          backgroundColor: "white"
        },
        ".Mui-expanded": {
          // backgroundColor: "#f6f6f6 !important"
        },
        ".MuiAccordionSummary-expandIconWrapper": {
          display: noClick ? "none" : "block"
        }
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {title}
          {required && "*"}
        </Typography>
        {description && (
          <Typography sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="overline">{label}</Typography>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
