import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Typography } from "@mui/material";

export const CellBold = (params: GridRenderCellParams) => {
  return (
    <Typography variant="body2" sx={{ pl: "10px", pr: "10px" }}>
      <strong>{params.value}</strong>
    </Typography>
  );
};
