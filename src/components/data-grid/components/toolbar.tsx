import * as React from "react";
import { Button, Box, IconButton, Stack, Typography } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport
} from "@mui/x-data-grid-pro";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import { GridToolbarSX } from "./../";
import { MyInput } from "./../../input";

export const MyCustomToolbar = (props) => {
  const {
    onMainActionClick,
    mainActionType = "create",
    onSearchChange,
    searchValue,
    clearSearch,
    disableSearch
  } = props;

  return (
    <GridToolbarContainer sx={GridToolbarSX}>
      {onMainActionClick && (
        <Button
          variant="contained"
          disableElevation
          startIcon={mainActionType === "create" && <AddIcon />}
          onClick={() => onMainActionClick(true)}
        >
          {mainActionType === "create" && "Create"}
        </Button>
      )}
      <Stack direction="row" gap="16px">
        {/* {!disableSearch && (
          <MyInput
            label="Search"
            id="search-table"
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Filter..."
            autoFocus
            noValidation
            fullWidth
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ opacity: ".45" }} fontSize="small" />
              ),
              endAdornment: (
                <IconButton
                  title="Clear"
                  aria-label="Clear"
                  size="small"
                  style={{ visibility: searchValue ? "visible" : "hidden" }}
                  onClick={clearSearch}
                >
                  <ClearIcon fontSize="small" />
                </IconButton>
              )
            }}
            sx={{
              height: "42px",
              m: "0 !important",
              maxWidth: "180px !important",
              ".MuiInputLabel-root": { pl: "38px" },
              ".MuiInputBase-input": { p: "0 0 0 8px", height: "42px" },
              ".MuiFilledInput-underline:before": {
                border: "none !important"
              },
              label: {
                display: "none"
              }
            }}
          />
        )} */}
        <Box
          sx={{
            button: {
              textTransform: "capitalize",
              color: "#747174",
              minWidth: "initial",
              span: { margin: 0 }
            }
          }}
        >
          <Typography variant="caption">Settings:</Typography>
          <GridToolbarColumnsButton color="inherit" />
          <GridToolbarFilterButton color="inherit" />
          <GridToolbarDensitySelector color="inherit" />
          {/* <GridToolbarExport color="inherit" /> */}
        </Box>
      </Stack>
    </GridToolbarContainer>
  );
};
