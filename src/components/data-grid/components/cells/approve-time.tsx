import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Typography } from "@mui/material";

export const CellApproveTime = (params: GridRenderCellParams) => {
  return (
    <Typography variant="body2" sx={{ pl: "8px", pr: "8px" }}>
      <strong>{params.value}</strong>
    </Typography>
  );
};
