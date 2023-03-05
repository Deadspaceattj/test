import { GridRenderCellParams, useGridApiContext } from "@mui/x-data-grid-pro";
import { Stack, Typography } from "@mui/material";

export const HeaderCellDate = (params: GridRenderCellParams) => {
  const apiRef = useGridApiContext();
  return (
    <Stack
      direction="column"
      sx={{
        lineHeight: "initial"
      }}
    >
      <Typography variant="columnHeader" sx={{ color: "#747174" }}>
        {params.colDef.headerName}
      </Typography>
      <Typography
        variant="columnHeader"
        sx={{ fontWeight: 300, opacity: "75%" }}
      >
        {apiRef.current.getRow(1)?.summary?.cells[params.field]?.date}
      </Typography>
    </Stack>
  );
};
