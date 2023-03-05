import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import { MyChip } from "./../../../chip";

export const CellApprovalStatus = (params: GridRenderCellParams) => {
  return (
    <MyChip
      payment={params.value}
      label={params.value}
      sx={{ mr: "24px", ml: "10px" }}
    />
  );
};
