import * as React from "react";
import { Box, Toolbar } from "@mui/material";

import { MyAppBar } from "./../../components/app-bar";
import { MyNavigation } from "./../../components/navigation";
import { MyDataGrid } from "./../../components/data-grid/data-grid";
import { MyTitle } from "./../../components/title";
import { Rows } from "./../../mock/data-grid/timesheets";
import { Columns, GroupingColDef } from "./config";

const drawerWidth = 240;

export const TimesheetsView = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const getTreeDataPath = (row) => row.hierarchy;

  return (
    <Box sx={{ display: "flex" }}>
      <MyAppBar handleDrawerToggle></MyAppBar>

      <MyNavigation
        props={{ window, mobileOpen, container, handleDrawerToggle }}
      ></MyNavigation>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px"
          }}
        >
          <MyTitle title="Timesheets"></MyTitle>
        </Box>
        <MyDataGrid
          rows={Rows}
          columns={Columns}
          groupingColDef={GroupingColDef}
          getTreeDataPath={getTreeDataPath}
          pinnedColumns={{ right: ["overall", "action"] }}
          treeData
          disableSearch
        ></MyDataGrid>
      </Box>
    </Box>
  );
};
