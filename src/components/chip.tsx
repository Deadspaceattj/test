import { Chip } from "@mui/material";
import React from "react";

export const MyChip = (props): JSX.Element => {
  const {
    label,
    size = "medium",
    color = "default",
    variant = "outlined",
    payment = null,
    sx = null
  } = props;

  const renderPaymentChip: JSX.Element =
    (payment === "pending" && (
      <Chip
        size="small"
        label={label}
        color="default"
        variant={variant}
        sx={sx}
      />
    )) ||
    (payment === "partial" && (
      <Chip
        size="small"
        label={label}
        color="success"
        variant={variant}
        sx={sx}
      />
    )) ||
    (payment === "approved" && (
      <Chip
        size="small"
        label={label}
        color="success"
        variant={variant}
        sx={sx}
      />
    )) ||
    (payment === "rejected" && (
      <Chip
        size="small"
        label={label}
        color="error"
        variant={variant}
        sx={sx}
      />
    ));

  return (
    renderPaymentChip || (
      <Chip size={size} label={label} color={color} variant={variant} />
    )
  );
};
