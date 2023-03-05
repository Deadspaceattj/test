import * as React from "react";
import { Box, Toolbar } from "@mui/material";

import { MyAppBar } from "./../../components/app-bar";
import { MyNavigation } from "./../../components/navigation";
import { MyDataGrid } from "./../../components/data-grid/data-grid";
import { MyTitle } from "./../../components/title";
import { MyDrawer } from "./../../components/drawer";
import { CreateEmployee } from "./../../templates/create-employee";
import { Rows } from "./../../mock/data-grid/employees";
import { Columns } from "./config";

export function EmployeesView(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 800;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigationToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MyAppBar handleDrawerToggle></MyAppBar>

      <MyNavigation
        props={{ window, mobileOpen, container, handleNavigationToggle }}
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
          <MyTitle title="Employees"></MyTitle>
        </Box>
        <MyDrawer open={open} handleClose={handleDrawer(false)}>
          <CreateEmployee></CreateEmployee>
        </MyDrawer>
        <MyDataGrid
          rows={Rows}
          columns={Columns}
          sortedColumns={[{ field: "lastname", sort: "asc" }]}
          pinnedColumns
          checkboxSelection
          onMainActionClick={handleDrawer(true)}
          experimentalFeatures={{ newEditingApi: true }}
        ></MyDataGrid>
      </Box>
    </Box>
  );
}
