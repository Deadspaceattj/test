import * as React from "react";
import { Box, Toolbar } from "@mui/material";

import { MyDataGrid } from "./../../components/data-grid/data-grid";

import { MyAppBar } from "./../../components/app-bar";
import { MyNavigation } from "./../../components/navigation";
import { MyTitle } from "./../../components/title";
import { Columns } from "./config";

const drawerWidth = 240;

export function ApprovalsView(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        <MyTitle title="Approvals" />
        <MyDataGrid
          rows={[]}
          columns={Columns}
          sortedColumns={[{ field: "lastname", sort: "asc" }]}
          pinnedColumns
          checkboxSelection
        ></MyDataGrid>
      </Box>
    </Box>
  );
}
