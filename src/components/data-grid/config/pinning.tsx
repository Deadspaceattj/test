import { GridColumnPinningState } from "@mui/x-data-grid-pro";

export const getPinnedColumns: GridColumnPinningState = (pinnedColumns) => {
  return typeof pinnedColumns === "boolean"
    ? pinnedColumns
      ? {
          left: ["__check__"],
          right: ["action"]
        }
      : null
    : {
        ...(pinnedColumns?.left && {
          left: [...pinnedColumns?.left]
        }),
        ...(pinnedColumns?.right && {
          right: [...pinnedColumns?.right]
        })
      };
};
