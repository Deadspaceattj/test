import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGridBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: 400,
  width: "100%",
  backgroundColor: "white",
  justifyContent: "space-between",
  height: "calc(100vh - 168px)"
}));

export const GridSX = {
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "600",
    fontSize: 13,
    color: "#747174",
    background: "#F0ECE4"
  },
  "& .MuiDataGrid-pinnedColumnHeaders": {
    backgroundColor: "#F0ECE4"
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#F0ECE4"
  },
  ".MuiDataGrid-cell--withRenderer": {
    padding: 0,
    Button: {
      color: "black",
      ".MuiTypography-body2": {
        color: "grey !important"
      }
    }
  }
};

export const GridToolbarSX = {
  backgroundColor: "#f6f6f6",
  width: "calc(100% + 2px)",
  padding: "0 0 16px",
  margin: "-1px",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "flex-start",
  gap: "16px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  zIndex: (theme) => theme.zIndex.drawer + 1,
  position: "relative",
  borderBottom: "1px solid rgba(224, 224, 224, 1)",
  button: {
    fontSize: 14,
    borderRadius: 0
  }
};
