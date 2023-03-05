import * as React from "react";
import {
  DataGridPro,
  DataGridProProps,
  GridPinnedColumns,
  GridExperimentalProFeatures
} from "@mui/x-data-grid-pro";

import {
  GridSX,
  StyledGridBox,
  MyCustomToolbar,
  getPinnedColumns,
  getSortedColumns,
  getGroupedRows,
  EmptyState
} from ".";

function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export const MyDataGrid = (
  props: DataGridProProps & {
    sortedColumns?: [{ field: string; sort: string }] | boolean;
    onMainActionClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
    rowGrouping?: boolean;
    disableSearch?: boolean;
    pinnedColumns?: GridPinnedColumns | boolean;
    experimentalFeatures?: Partial<GridExperimentalProFeatures>;
  }
) => {
  const {
    columns,
    rows,
    pinnedColumns = false,
    sortedColumns,
    onMainActionClick = false,
    experimentalFeatures = null,
    rowGrouping = null,
    groupingColDef = null,
    getTreeDataPath = null,
    treeData = false,
    checkboxSelection = false,
    disableSearch = false
  } = props;

  const [pageSize, setPageSize] = React.useState<number>(15);
  const [searchText, setSearchText] = React.useState("");
  const [getRows, setRows] = React.useState(rows);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(rows);
  }, [rows]);

  return (
    <StyledGridBox>
      <DataGridPro
        rows={getRows}
        columns={columns}
        components={{
          Toolbar: () => (
            <MyCustomToolbar
              onMainActionClick={
                onMainActionClick ? () => onMainActionClick(true) : false
              }
              onSearchChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                requestSearch(event.target.value)
              }
              clearSearch={() => requestSearch("")}
              searchValue={searchText}
              disableSearch={disableSearch}
            ></MyCustomToolbar>
          ),
          NoRowsOverlay: EmptyState
        }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[15, 50, 500]}
        pagination
        density="standard"
        localeText={{
          toolbarColumns: <></>,
          toolbarFilters: <></>,
          toolbarExport: <></>,
          toolbarDensity: <></>
        }}
        checkboxSelection={checkboxSelection}
        initialState={{
          pinnedColumns: getPinnedColumns(pinnedColumns),
          sorting: getSortedColumns(sortedColumns),
          rowGrouping: getGroupedRows(rowGrouping)
        }}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch("")
          }
        }}
        sx={GridSX}
        experimentalFeatures={experimentalFeatures}
        groupingColDef={groupingColDef}
        treeData={treeData}
        getTreeDataPath={getTreeDataPath}
      />
    </StyledGridBox>
  );
};
