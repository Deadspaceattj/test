import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { Typography } from "@mui/material";

export const HeaderCellStatus = (params: GridRenderCellParams) => {
  return (
    <Typography
      variant="columnHeader"
      sx={{
        lineHeight: "initial",
        mr: "24px"
      }}
    >
      {params.colDef.headerName}
    </Typography>
  );
};
